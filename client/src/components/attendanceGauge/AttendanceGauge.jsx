import React from 'react';
import './AttendanceGauge.scss';

const AttendanceGauge = ({ present, absent, total, title }) => {
  const attendance = (present > 0) ? Math.round((present / total) * 100) : 0;
  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (attendance / 100) * circumference;

  return (
    <>
      <div className='gauge'>
        <div className="gauge-content">
          <h2 className="gauge-title">{title}</h2>
          <div className="gauge-container">
            <svg height={2 * radius} width={2 * radius}>
              <circle
                className="gauge-background"
                cx={radius}
                cy={radius}
                r={radius}
              />
              <circle
                className="gauge-progress"
                cx={radius}
                cy={radius}
                r={radius - 8}
                strokeDasharray={circumference}
                strokeDashoffset={dashoffset}
              />
              <text
                className="gauge-text"
                x={radius}
                y={radius + 10}
                textAnchor="middle"
              >
                {attendance}%
              </text>
            </svg>
          </div>
        </div>
        <div className="gauge-info">
          <h3>Present: {present} Days </h3>
          <h3>Absent: {absent} Days </h3>
          <h3>Total: {total} Days </h3>
        </div>
      </div>
    </>
  );
};

AttendanceGauge.defaultProps = {
  present: 0,
  absent: 0,
  total: 0,
  title: "Attendance"
}

export default AttendanceGauge;
