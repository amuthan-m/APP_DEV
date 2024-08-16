// import logo from './logo.svg';
import './App.css';
// import { Button } from 'antd';
// import 'antd/dist/antd.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import EditProfilePage from './pages/EditProfilePage';
import Main from './pages/Main';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<ProtectedRoute><Main /></ProtectedRoute>} />
        <Route path='/dash' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/test' element={<ProtectedRoute><Test /></ProtectedRoute>} />
        <Route path='/account' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit' element={<ProtectedRoute><EditProfilePage /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export function ProtectedRoute(props) {
  const user = localStorage.getItem('expensetracker-dev-user');
  console.log('ProtectedRoute check, user:', user); 

  if (user) {
    return props.children;
  } else {
    return <Navigate to='/login' />;
  }
}




export default App;
