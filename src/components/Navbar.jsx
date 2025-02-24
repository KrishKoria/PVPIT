import React, { useState } from "react";
import "../styles/nav.css";
import logo from "../assets/logo.svg";

const searchIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const Navbar = ({ user, handleLogin, handleLogout }) => {
  const [showLoginButton, setShowLoginButton] = useState(false);

  return (
    <div className="nav">
      <div className="logo">
        <a href="/PVPIT/">
          <img id="logoImage" src={logo} width={"112px"} height={"56px"} />
        </a>
      </div>
      <a className="navlinks" href="/PVPIT/">Home</a>
      <a className="navlinks" href="/PVPIT/form">Join us</a>
      <a className="navlinks" href="/PVPIT/">Apply for a meet</a>

      <div className="searchbox">
        <input type="text" name="search" placeholder="Search" />
        {searchIcon}

        {!user && !showLoginButton && (
          <button className="navlinks login-btn" onClick={() => setShowLoginButton(true)}>Log-In</button>
        )}

        {!user && showLoginButton && (
          <button className="login-with-google-btn" onClick={handleLogin}>Sign in with Google</button>
        )}

        {user && (
          <img
            src={user.photoURL}
            alt="User"
            className="user-avatar"
            onClick={handleLogout}
            width={"50px"} height={"50px"}
            title="Click to logout"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
