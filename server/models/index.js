const mongoose = require('mongoose');

// Import all your schemas and models
const Student = require('./Student');
const Course = require('./Course');
const Faculty = require('./Faculty');
const Department = require('./Department');
const Lecture = require('./Lecture');
const Attendance = require('./Attendance');

// Export all the models
module.exports = {
  Student,
  Course,
  Faculty,
  Department,
  Lecture,
  Attendance,
};