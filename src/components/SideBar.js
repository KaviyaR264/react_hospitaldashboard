import React, { useState } from 'react';
import { FaHome, FaUserMd, FaUser, FaBox, FaLifeRing } from 'react-icons/fa'; 

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="images/logo.png" alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          <li className={activeMenuItem === 0 ? "active" : ""} onClick={() => handleMenuItemClick(0)}>
            <FaHome className="menu-icon" /><a href="#">Home</a>
          </li>
          <li className={activeMenuItem === 1 ? "active" : ""} onClick={() => handleMenuItemClick(1)}>
            <FaUserMd className="menu-icon" /><a href="#">Doctors</a>
          </li>
          <li className={activeMenuItem === 2 ? "active" : ""} onClick={() => handleMenuItemClick(2)}>
            <FaUser className="menu-icon" /><a href="#">Patients</a>
          </li>
          <li className={activeMenuItem === 3 ? "active" : ""} onClick={() => handleMenuItemClick(3)}>
            <FaBox className="menu-icon" /><a href="#">Inventory</a>
          </li>
          <li className={activeMenuItem === 4 ? "active" : ""} onClick={() => handleMenuItemClick(4)}>
            <FaLifeRing className="menu-icon" /><a href="#">Support</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
