import React from "react";
import '../IncubatorProgram.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="left-section1">
          <span className="badge">Access your Dashboard</span>
          <h1 className="title">Top Talent Meets Global Opportunities</h1>
          <p className="description">
            We bridge the gap between talented developers and companies that need their skills.
          </p>
        </div>
        <div className="right-section1">
          <h2>Welcome Back.</h2>
          <p>Login to your account.</p>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input type="password" id="password" placeholder="Enter your password" />
                <button type="button" className="show-password">👁️</button>
              </div>
            </div>
            <div className="form-options">
              <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="login-button">Login to Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
