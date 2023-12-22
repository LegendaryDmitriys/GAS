import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/register/', formData);
            console.log('User registered successfully:', response.data);
        } catch (error) {
            console.error('Registration failed:', error.response.data);
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
            <label>First Name:</label>
            <input type="text" name="first_name" onChange={handleChange} required />
            <br />
            <label>Last Name:</label>
            <input type="text" name="last_name" onChange={handleChange} required />
            <br />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
