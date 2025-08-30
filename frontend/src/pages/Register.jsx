
import {use, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", formData);
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Register failed");
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Register
                </button>
            </form>
        </div>
    );
}
