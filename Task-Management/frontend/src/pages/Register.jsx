import { useState } from "react";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
  try {
    const res = await api.post("auth/register/", form);
    console.log(res.data); // log success
    alert("Registration successful. Please login.");
    window.location.href = "/";
  } catch (err) {
    // safer access
    console.error(err); // log full error
    const message = err.response?.data || err.message || "Unknown error";
    alert("Registration failed: " + JSON.stringify(message));
  }
};



  return (
    <div>
      <h2>Register</h2>
      <input
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
