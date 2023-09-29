const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: String,
  courses_offered: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    }
  ],
  HoD: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty',
  },
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
