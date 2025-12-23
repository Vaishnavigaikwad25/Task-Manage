import { useEffect, useState } from "react";
import api from "../services/api";
import "./Dashboard.css"; // make sure this file is in the same folder

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("tasks/", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => setTasks(res.data))
      .catch(() => {
        alert("Unauthorized");
        window.location.href = "/";
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    window.location.href = "/";
  };

  return (
    <div className="dashboard-container"> {/* <- main container */}
      <h2>My Tasks</h2>
      <button className="logout-btn" onClick={logout}>Logout</button>

      <div className="tasks-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-card"> {/* <- task card */}
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <b>{task.status}</b>
          </div>
        ))}
      </div>
    </div>
  );
}
