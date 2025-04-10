const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const User = require("./user");
const Task = require("./task");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/task")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token missing" });

  try {
    const decoded = jwt.verify(token, "secretkey");
    req.user = decoded;
    next();
  } catch {
    return res.status(403).json({ message: "Invalid token" });
  }
};

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Input validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Password validation
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed });
    await user.save();
    
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1d" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

app.post("/tasks", authenticateToken, async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    const task = new Task({
      title,
      description,
      dueDate,
      priority,
      assignedTo: req.user.id
    });
    await task.save();
    res.status(201).json({ message: "Task created", task });
  } catch (err) {
    res.status(400).json({ message: "Error creating task", error: err.message });
  }
});

app.get("/tasks", authenticateToken, async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.user.id });

    const priorityOrder = { high: 1, medium: 2, low: 3 };
    const statusOrder = { pending: 1, "in-progress": 2, completed: 3 };

    const sorted = tasks.sort((a, b) => {
      const p1 = priorityOrder[a.priority] || 4;
      const p2 = priorityOrder[b.priority] || 4;
      if (p1 !== p2) return p1 - p2;

      const s1 = statusOrder[a.status] || 4;
      const s2 = statusOrder[b.status] || 4;
      return s1 - s2;
    });

    res.json(sorted);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks", error: err.message });
  }
});

app.get("/tasks/:id", authenticateToken, async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, assignedTo: req.user.id });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving task", error: err.message });
  }
});

app.put("/tasks/:id", authenticateToken, async (req, res) => {
  try {
    const updates = req.body;
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, assignedTo: req.user.id },
      updates,
      { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found or unauthorized" });
    res.json({ message: "Task updated", task });
  } catch (err) {
    res.status(500).json({ message: "Error updating task", error: err.message });
  }
});

app.delete("/tasks/:id", authenticateToken, async (req, res) => {
  try {
    const deleted = await Task.findOneAndDelete({
      _id: req.params.id,
      assignedTo: req.user.id
    });
    if (!deleted) return res.status(404).json({ message: "Task not found or unauthorized" });
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting task", error: err.message });
  }
});

const path = require("path");
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));