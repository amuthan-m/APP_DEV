import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password
            });
            console.log("Login response:", response.data);
            if (response.data) {
                alert('Login successful!');
                // Redirect to dashboard or another page
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            console.error("Login error:", err);
            if (err.response && err.response.data) {
                setError(err.response.data);
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="login-container-wrapper">
            <div className="login-container">
                <h1 className="login-title">Lumin</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
