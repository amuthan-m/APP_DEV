const express = require("express");
const User = require("../models/User");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Transaction = require("../models/Transaction");

router.post("/login", async function (req, res) {
  try {
    const result = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (result) {
      res.send(result);
    } else {
      res.status(500).json("Error");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/register", async function (req, res) {
  try {
    const newuser = new User(req.body);
    await newuser.save();
    res.send('User Registered Successfully')
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/profile/:id", async function (req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);    
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Configure multer for image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Folder to save images
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
    }
});

const upload = multer({ storage: storage });

router.post("/profile/:id", upload.single('profileImage'), async function (req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      console.log('User found:', user);
      console.log('Request Body:', req.body);
      console.log('Uploaded File:', req.file);

      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.phone = req.body.phone || user.phone;
      user.country = req.body.country || user.country;
      user.password = req.body.newPassword || user.password;
      
      if (req.file) {
        console.log('Saving file path:', path.join('/uploads', req.file.filename));
        user.profileImage = path.join('/uploads', req.file.filename);
      }

      await user.save();
      console.log('User updated:', user);
      res.send("Profile updated successfully");
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json(error);
  }
});



module.exports = router;