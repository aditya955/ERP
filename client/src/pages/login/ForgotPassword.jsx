import "./style.scss";
import React, { useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LockIcon from "@mui/icons-material/Lock";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PasswordIcon from "@mui/icons-material/Password";
import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from '../../context/AuthContext';
import axios from "axios";

const ForgotPassword = () => {
  const [reset, setReset] = useState(true);
  const [formData, setFormData] = useState({ erp_id: "", DoB: "" });
  const [resetData, setResetData] = useState({
    password: "",
    conf_password: "",
    otp: "",
  });
  const navigate = useNavigate();
  // const {user, login} = useAuth()

  const handleChange = (e) => {
    reset
      ? setFormData({ ...formData, [e.target.name]: e.target.value })
      : setResetData({ ...resetData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/forgot_password", formData);
      console.log(response);
      setReset(!response.data.flag);

      // console.log(user)
      // navigate("/");
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };
  const handleReset = async (e) => {
    e.preventDefault();
    if (resetData.password === resetData.conf_password) {
      try {
        const mergedData = { ...formData, ...resetData };
        const response = await axios.post("/reset_password", mergedData);
        console.log(response.data.message);
        // console.log(user)
        navigate("/");
      } catch (error) {
        console.error(error);
        // Handle login error
      }
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="loginContainer">
      {reset ? (
        <>
          <form onSubmit={handleSubmit}>
            <h2>Our ERP Login</h2>
            <div>
              <PermIdentityIcon className="icon" />
              <input
                type="text"
                name="erp_id"
                value={formData.erp_id}
                onChange={handleChange}
                placeholder="ERP Id"
                required
              />
            </div>
            <div>
              <CalendarMonthIcon className="icon" />
              <input
                className="date"
                type="date"
                name="DoB"
                value={formData.DoB}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send OTP</button>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={handleReset}>
            <h2>Our ERP Login</h2>
            <div>
              <PasswordIcon className="icon" />
              <input
                type="otp"
                name="otp"
                value={resetData.otp}
                onChange={handleChange}
                placeholder="Enter OTP"
                required
              />
            </div>
            <div>
              <LockIcon className="icon" />
              <input
                type="password"
                name="password"
                value={resetData.password}
                onChange={handleChange}
                placeholder="New Password"
                required
              />
            </div>
            <div>
              <LockIcon className="icon" />
              <input
                type="password"
                name="conf_password"
                value={resetData.conf_password}
                placeholder="Confirm Password"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Set Password</button>
          </form>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
