import React from "react";
import "./NavBar.css"; // Importing the CSS file
import { Avatar } from "antd";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div >
        <h1>PREP-HUB</h1>
      </div>      
      {/* Right: Avatar */}
      <div className="user-profile">
      <Avatar size="large" >S</Avatar>

      </div>
    </nav>
  );
};

export default NavBar;
