import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaBell } from 'react-icons/fa'; // Import icons
import { FaSearch } from 'react-icons/fa'; 
import { Avatar } from 'primereact/avatar';
import "../css/NavBar.css";

const NavBar = () => {
  const iconStyle = {
    fill: 'none', // Sets fill to none (transparent)
    stroke: 'black', // Sets stroke color to current color (default color)
    strokeWidth: 40 // Sets stroke width
  };

  return (
    <div className="navbar">
      <div className="search-bar">
      <FaSearch className="search-icon" /> 
      <input type="text" placeholder="Search Here..." />        
      </div>
      <div className="icons">
        <FaPhoneAlt className="icon" style={iconStyle} /> 
        <FaEnvelope className="icon" style={iconStyle} />
        <FaBell className="icon" style={iconStyle} />
        <Avatar image="/images/avatar/kaviya.jpg" size="large" shape="circle" className="avatar" />
      </div>
    </div>
  );
};

export default NavBar;
