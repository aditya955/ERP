const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    stud_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    },
    lec_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lecture',
    },
    is_present: Boolean,
    date: Date,
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
