import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', formData);
            console.log('User logged in successfully:', response.data);

            // Сохраните токен в localStorage или состоянии приложения
        } catch (error) {
            console.error('Login failed:', error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} required />
            <br />
            <label>Password:</label>
            <input type="password" name="password" onChange={handleChange} required />
            <br />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
