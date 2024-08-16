import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState({});
  const user1 = JSON.parse(localStorage.getItem('expensetracker-dev-user'));
  const userId = user1._id;
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/users/profile/${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the user data!", error);
      });
  }, [userId]);

  const handleEdit = () => {
    navigate('/edit');
  };

  const handleHome = () => {
    navigate('/');
  };

  

  return (
    <div style={styles.container}>
      {/* Existing Profile Code */}
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
      <div style={styles.leftContainer}>
        <div style={styles.profileCard}>
          <div style={styles.imageContainer}>
            {user.profileImage && (
              <img
                src={`${user.profileImage}`}
                alt="Profile"
                style={styles.profileImage}
              />
            )}
          </div>
          <div style={styles.content}>
            <h1 style={styles.header}>{user.name}</h1>
            <p style={styles.email}>{user.email}</p>
            <p style={styles.detail}><strong>Phone:</strong> {user.phone || 'Not provided'}</p>
            <p style={styles.detail}><strong>Country:</strong> {user.country || 'Not provided'}</p>
            <div style={styles.buttonContainer}>
              <button style={styles.editButton} onClick={handleEdit}>Edit Profile</button>
              <button style={styles.homeButton} onClick={handleHome}>Home</button>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.rightContainer}>
        <dotlottie-player 
          src="https://lottie.host/5f0b8074-1257-4529-8fc6-1c98e9d4b664/VCzZnVBzAE.json" 
          background="transparent" 
          speed="1" 
          loop 
          autoplay></dotlottie-player>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ffd300', // Light yellow background
    padding: '0 20px',
  },
  leftContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd300',
  },
  profileCard: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    paddingTop: '100%', // Ratio to make the image square
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '50%',
  },
  content: {
    padding: '20px',
  },
  header: {
    fontSize: '24px',
    color: '#333',
    margin: '10px 0',
  },
  email: {
    fontSize: '16px',
    color: '#666',
    margin: '5px 0',
  },
  detail: {
    fontSize: '14px',
    color: '#666',
    margin: '5px 0',
  },
  buttonContainer: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'space-around',
  },
  editButton: {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  homeButton: {
    padding: '10px 20px',
    backgroundColor: '#666',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  deleteButton: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#ff4d4d', // Red color for delete button
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Profile;
