const mongoose=require('mongoose');
const express=require('express');
const app=express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/students", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  roll: { type: String, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

app.post("/api/users/register", async (req, res) => {
  try {
    const { roll, name, email, password } = req.body;
    const user = new User({ roll: roll || uuidv4(), name, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000,()=>{
  console.log('server connected at port http://localhost:3000')
})

app.get("/api/users/:roll", async (req, res) => {
  try {
    const user = await User.findOne({ roll: req.params.roll });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/users/:roll", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ roll: req.params.roll }, req.body, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/users/:roll", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ roll: req.params.roll });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});