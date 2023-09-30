import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "./style.scss";

const Login = () => {
  const [formData, setFormData] = useState({ erp_id: "", password: "" });
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", formData);
      console.log(response);
      login(response.data.token);
      console.log(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
        <h2>Our ERP Login</h2>
        <div className="inputContainer">
          <PermIdentityIcon className="icon" />
          <input
            type="erp_id"
            name="erp_id"
            value={formData.erp_id}
            onChange={handleChange}
            placeholder="ERP Id"
            required
          />
        </div>
        <div className="inputContainer">
          <LockIcon className="icon" />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Login</button>

        <p>
          <Link to="/forgot-password">Forgot Password ?</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
