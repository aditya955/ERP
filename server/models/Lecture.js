const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  dept: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  current_lec_number: Number,
  date: Date,
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty',
  },
  attendance: {
    total_stud_number: Number,
    present_stud_count: Number,
  }
});

const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;
