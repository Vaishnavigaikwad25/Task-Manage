import { useState } from "react";
import api from "../services/api";
import "./Login.css"; // correct path since CSS is in same folder

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await api.post("auth/login/", form);
      localStorage.setItem("token", res.data.access); // store access token
      localStorage.setItem("refresh", res.data.refresh); // optional
      alert("Login successful");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Login failed: " + JSON.stringify(err.response?.data));
    }
  };

  return (
    <div className="login-container"> {/* <- Added className */}
      <h2>Login</h2>
      <input
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        No account? <a href="/register">Register</a>
      </p>
    </div>
  );
}
