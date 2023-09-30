const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
// Importing models(Collections)
const { Student, Course, Faculty, Department, Lecture, Attendance } = require('./models/index');

const app = express();
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// MongoDB Atlas Connection 
mongoose
    .connect(`mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@${process.env.CLUSTER}/${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Atlas connected'))
    .catch(err => console.log(err));



// Login route
app.post('/login', async (req, res) => {
    try {
      const { erp_id, password } = req.body;
      // Check if the user exists      
      const user = await Student.findOne({ erp_id });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Compare the provided password with the hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
      console.log(passwordMatch)
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Incorrect password' });
      }
      // Generate a JWT token upon successful login
      const token = jwt.sign(
        { id: user._id, erp_id: user.erp_id,name:user.name },
        JWT_SECRET,
        { expiresIn: '1h' } // Token expiration time (adjust as needed)
      );
  
      res.status(200).json({ 
        message:"Success",
        token: token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
//   Forgot Password route
app.post('/forgot_password', async (req, res) => {
    try {
        const { erp_id, DoB } = req.body;
        // Check if the user exists
        const user = await Student.findOne({ erp_id, DoB });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Generate a 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000);
        console.log('OTP:', otp);
        // Update the OTP in the user object
        user.otp = otp;
        // Save the updated user object to the database
        const result = await user.save();
        console.log('Save result:', result);

        if (!result) {
            return res.status(500).json({ message: 'Error saving OTP' });
        }

        res.status(200).json({ message: 'OTP sent successfully', flag: true, otp });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//   Reset Password route
app.post('/reset_password', async (req, res) => {
    try {
      const { erp_id, DoB, password, conf_password, otp } = req.body;
  
      // Check if the user exists
      const user = await Student.findOne({ erp_id, DoB,otp});
      if (!user) {
        return res.status(404).json({ message: 'Invalid Entry' });
      }

      if (password == conf_password) {
        // Hash the new password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);
        // Update the user's password in the database
        user.password = hashedPassword;
        await user.save();
      }
    
      res.status(200).json({ message: 'Password set successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})