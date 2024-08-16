import React, { useEffect, useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";  // Assume this CSS file has updated styles
import axios from "axios";
import Spinner from "../components/Spinner";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", values);
      localStorage.setItem("expensetracker-dev-user", JSON.stringify({...response.data , password:''}));
      setLoading(false);
      alert("Login successful");
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Login failed");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("expensetracker-dev-user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="login-container">
      {loading && <Spinner />}
      <div className="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

  </div>
      <div className="login-box">
        <h1 className="login-title">LOGIN</h1>
        <Form layout="vertical" onFinish={onFinish} className="login-form">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input className="login-input" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input type="password" className="login-input" />
          </Form.Item>

          <div className="login-footer">
            <Link to="/register" className="register-link">
              Not Registered Yet? Click Here to Register
            </Link>
            <button className="login-button" type="submit">
              LOGIN
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
