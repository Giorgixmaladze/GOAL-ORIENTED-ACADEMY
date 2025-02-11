import { useState } from "react";

function Management() {
    const [tasks, setTasks] = useState([]);
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editingTaskName, setEditingTaskName] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        setTasks((prev) => [...prev, { id: Date.now(), name: e.target.task.value }]);
        e.target.task.value = "";
    };

    const deleteTask = (id) => {
        const updated = tasks.filter(item => item.id !== id);
        setTasks(updated);
    };

    const startEditing = (id, name) => {
        setEditingTaskId(id);
        setEditingTaskName(name);
    };

    const saveTask = (id) => {
        const updated = tasks.map(item => 
            item.id === id ? { ...item, name: editingTaskName } : item
        );
        setTasks(updated);
        setEditingTaskId(null);
        setEditingTaskName("");
    };

    return (
        <>
            <form onSubmit={addTask}>
                <input type="text" name="task" required placeholder="Enter the task" />
                <button>Submit</button>
            </form>

            {tasks.length > 0 ? (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Task ID</th>
                            <th>Task Name</th>
                            <th>Edit Task</th>
                            <th>Delete Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    {editingTaskId === item.id ? (
                                        <input
                                            type="text"
                                            value={editingTaskName}
                                            onChange={(e) => setEditingTaskName(e.target.value)}
                                            placeholder="Enter the task"
                                        />
                                    ) : (
                                        item.name
                                    )}
                                </td>
                                <td>
                                    {editingTaskId === item.id ? (
                                        <button onClick={() => saveTask(item.id)}>Save</button>
                                    ) : (
                                        <button onClick={() => startEditing(item.id, item.name)}>Edit</button>
                                    )}
                                </td>
                                <td><button onClick={() => deleteTask(item.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                "Add a task"
            )}
        </>
    );
}

export default Management;
