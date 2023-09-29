import './header.scss'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Header = () => {
  return (
    <div className="header">
      <div className="search">
        <SearchIcon />
      </div>
      <div className="notification">
        <NotificationsIcon />
      </div>
      <div className="calender">
        <CalendarMonthIcon />
      </div>
      <div className="profile">
        <div className="profile_pic">
          <img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=400&h=270&dpr=1" alt="pic" />
        </div>
        <div className="details">
          <p className="name">John Doe The BigBull</p>
          <div className="role">Student</div>
        </div>
      </div>
    </div>
  )
}

export default Header