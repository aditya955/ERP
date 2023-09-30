const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  erp_id: Number,
  password: String,
  DoB: Date,
  otp: Number,
  address: String,
  year_of_study: Number,
  admitted_year: Number,
  admitted_type: String,
  phone: String,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
  },
  courses_enrolled: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      }
    }
  ]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
