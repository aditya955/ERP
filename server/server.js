const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const { Student, Course, Faculty, Department, Lecture, Attendance } = require('./models/index');

const app = express();
dotenv.config();

// MongoDB Atlas Connection 
mongoose
    .connect(`mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@${process.env.CLUSTER}/${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Atlas connected'))
    .catch(err => console.log(err));

    
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})