class Task {
    constructor(taskName, priority, dueDate, status = "in-progress") {
        this.taskNumber = Task.generateTaskNumber(); // Generating a unique task number
        this.taskName = taskName;
        this.priority = priority;
        this.dueDate = new Date(dueDate);
        this.status = status;
    }

    static generateTaskNumber() {
        if (!Task.lastTaskNumber) {
            Task.lastTaskNumber = 0;
        }
        return ++Task.lastTaskNumber;
    }

    markComplete() {
        this.status = "completed";
    }

    markInProgress() {
        this.status = "in-progress";
    }

    isOverdue() {
        return this.dueDate < new Date() && this.status !== "completed";
    }

    isUpcoming() {
        return this.dueDate > new Date();
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(taskNumber) {
        this.tasks = this.tasks.filter(task => task.taskNumber !== taskNumber);
    }

    updateTask(taskNumber, updatedTask) {
        const index = this.tasks.findIndex(task => task.taskNumber === taskNumber);
        if (index !== -1) {
            this.tasks[index] = updatedTask;
        }
    }

    sortTasksByPriority() {
        return this.tasks.sort((a, b) => a.priority - b.priority);
    }

    sortTasksByDueDate() {
        return this.tasks.sort((a, b) => a.dueDate - b.dueDate);
    }

    filterTasksByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }

    displayOverdueTasks() {
        const overdueTasks = this.tasks.filter(task => task.isOverdue());
        console.log("Overdue Tasks:");
        overdueTasks.forEach(task => {
            console.log(`\x1b[31m${task.taskName} - ${task.dueDate}\x1b[0m`);
        });
    }

    displayUpcomingTasks() {
        const upcomingTasks = this.tasks.filter(task => task.isUpcoming());
        console.log("Upcoming Tasks:");
        upcomingTasks.forEach(task => {
            console.log(`\x1b[32m${task.taskName} - ${task.dueDate}\x1b[0m`);
        });
    }
}

const taskManager = new TaskManager();

taskManager.addTask(new Task("Complete project report", 2, "2025-02-01"));
taskManager.addTask(new Task("Prepare for presentation", 1, "2025-01-15"));
taskManager.addTask(new Task("Fix bugs in app", 3, "2024-12-30"));

taskManager.updateTask(3, new Task("Fix bugs in app", 1, "2024-12-31"));

console.log("Sorted by Priority:");
console.log(taskManager.sortTasksByPriority());

console.log("Sorted by Due Date:");
console.log(taskManager.sortTasksByDueDate());

console.log("In-progress Tasks:");
console.log(taskManager.filterTasksByStatus("in-progress"));

console.log("Completed Tasks:");
console.log(taskManager.filterTasksByStatus("completed"));

taskManager.displayOverdueTasks();
taskManager.displayUpcomingTasks();