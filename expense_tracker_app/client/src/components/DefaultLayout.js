import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../resources/default-layout.css';
import { Button } from 'antd';

function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('expensetracker-dev-user'));
  const navigate = useNavigate();

  return (
    <div className='layout d-flex'>
      <div className="sidebar">
        <div className="logo">
          <h2>
            <Link to="/" className="text-decoration-none text-dark">
            LuxBudget
            </Link>
          </h2>
        </div>
        <hr></hr>
        <div className="user-info">
          <h1 className="username">
            <Link to="/account" className="text-decoration-none text-dark">
              {user.name}
            </Link>
          </h1>
        </div>
        <div className="logout-button">
          <Button
            type="primary"
            danger
            onClick={() => {
              localStorage.removeItem("expensetracker-dev-user");
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </div>
      </div>
      <div className='content flex-grow-1'>
        {props.children}
      </div>
    </div>
  );
}

export default DefaultLayout;

































































































// import React from "react";
// import { Menu, Dropdown, Button, Space } from "antd";
// import {useNavigate} from 'react-router-dom'

// import "../resources/default-layout.css";
// function DefaultLayout(props) {
//   const user = JSON.parse(localStorage.getItem("sheymoney-udemy-user"));
//   const navigate = useNavigate()
//   const menu = (
//     <Menu
//       items={[
//         {
//           label: (
//             <li onClick={()=>{
//               localStorage.removeItem('sheymoney-udemy-user')
//               navigate("/login");
//             }}>Logout</li>
//           ),
//         }
//       ]}
//     />
//   );
//   return (
//     <div className="layout">
//       <div className="header d-flex justify-content-between align-items-center">
//         <div>
//           <h1 className="logo">SHEY MONEY</h1>
//         </div>
//         <div>
//           <Dropdown overlay={menu} placement="bottomLeft">
//             <button className='primary'>{user.name}</button>
//           </Dropdown>
//         </div>
//       </div>

//       <div className="content">{props.children}</div>
//     </div>
//   );
// }

// export default DefaultLayout;