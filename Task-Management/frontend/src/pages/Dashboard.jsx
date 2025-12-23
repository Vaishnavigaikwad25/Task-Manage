import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("tasks/")
      .then((res) => setTasks(res.data))
      .catch(() => {
        alert("Unauthorized");
        window.location.href = "/";
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <h2>My Tasks</h2>
      <button onClick={logout}>Logout</button>

      {tasks.map((task) => (
        <div key={task.id} style={{ border: "1px solid #ccc", margin: "10px" }}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <b>{task.status}</b>
        </div>
      ))}
    </div>
  );
}
