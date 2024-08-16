import React, { useEffect, useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import '../resources/reg.css';
import axios from 'axios';
import Spinner from "../components/Spinner";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.post('/api/users/register', values);
      alert('Registration Successful');
      setLoading(false);
      navigate("/login");
    } catch (error) {
      message.error('Something went wrong');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("expensetracker-dev-user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="register-container">
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
      <div className="register-box">
        <h1 className="register-title">REGISTER</h1>
        <Form layout="vertical" onFinish={onFinish} className="register-form">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input className="register-input" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input className="register-input" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className="register-input" />
          </Form.Item>

          <div className="register-footer">
            <Link to="/login" className="login-link">
              Already Registered? Click Here to Login
            </Link>
            <button className="register-button" type="submit">
              REGISTER
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
