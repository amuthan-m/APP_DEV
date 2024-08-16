import React from 'react';
import '../resources/Navbar.css';
import { Link, useNavigate} from "react-router-dom";
import Lumin from '../asert/LuminLog.png';

const Navbar = () => {
  const navigate = useNavigate();
  const onhandle = () =>{
    navigate('/account');
  }
  return (
    <div className='Navbar'>
      <div className="logo">
        <img src={Lumin}/>
      </div>
      <ul>
        <li><a onClick={() => navigate('\dash')}>Dashboard</a></li>
        <li><a onClick={onhandle}>Account</a></li>
        <li><a href='#cont'>Contact us</a></li>
      </ul>
      <div className='but-login-signup'>
      <Link to="/login">
      <a className='signup' onClick={() => {
                  localStorage.removeItem("expensetracker-dev-user");
                  navigate("/login");
                }}
          >sign out</a>
          </Link>
      </div>
    </div>
  );
}

export default Navbar;