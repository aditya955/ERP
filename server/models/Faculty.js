const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: String,
  designation: String,
  email: String,
  address: String,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
  },
  course_tutoring: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      },
    }
  ]
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
