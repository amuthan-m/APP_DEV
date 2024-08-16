import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const nav = useNavigate();
  const user1 = JSON.parse(localStorage.getItem('expensetracker-dev-user'));
  const userId = user1._id;

  useEffect(() => {
    axios.get(`/api/users/profile/${userId}`)
      .then(response => {
        const user = response.data;
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone || '');
        setCountry(user.country || '');
        setPreviewImage(user.profileImage ? `${user.profileImage}` : null);
      })
      .catch(error => {
        console.error("There was an error fetching the user data!", error);
      });
  }, [userId]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('country', country);
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }
    if (currentPassword && newPassword) {
      formData.append('newPassword', newPassword);
    }

    try {
      const response = await axios.post(`/api/users/profile/${userId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      const updatedUser = response.data;

      localStorage.setItem('expensetracker-dev-user', JSON.stringify({
        ...user1,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
        country: updatedUser.country,
        profileImage: updatedUser.profileImage
      }));
      alert('Profile updated successfully');
      nav('/account');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div style={styles.container}>
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
      <h1 style={styles.header}>Edit Profile</h1>
      <form onSubmit={handleProfileUpdate} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Profile Image:</label>
          <div style={styles.imageContainer}>
            {previewImage && (
              <img
                src={previewImage}
                alt="Profile"
                style={styles.profileImage}
              />
            )}
            <input
              type="file"
              onChange={handleImageChange}
              style={styles.fileInput}
            />
          </div>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Confirm New Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Update Profile</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '150vh',
    backgroundColor: '#ffd300', // Light yellow background
    padding: '20px',
  },
  header: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  fileInput: {
    padding: '5px',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default EditProfile;
