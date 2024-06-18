// VerticalNavbar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faListAlt, faCalendarAlt, faHandHolding, faMoneyBill, faUserCog, faAddressCard, faCog, faInfoCircle, faQuestionCircle, faLock, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { verticalNavbar } from '../Style';

const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
      <div className="profile">
        <img src="" alt="Profile" className="profile-pic" />
        <span className="username">Thenuz</span>
      </div>
      <ul className="nav-links">
        <li><FontAwesomeIcon icon={faListAlt} /> <a href="/suppliers/waste-contribution">Waste Contribution</a></li>
        <li><FontAwesomeIcon icon={faCalendarAlt} /> <a href="schedule">Schedule</a></li>
        <li><FontAwesomeIcon icon={faHandHolding} /> <a href="#">Pickups</a></li>
        <li><FontAwesomeIcon icon={faMoneyBill} /> <a href="#">Payments</a></li>
      </ul>
      <ul className="nav-links">
        <li><FontAwesomeIcon icon={faUserCog} /> <a href="#">My Account</a></li>
        <li><FontAwesomeIcon icon={faAddressCard} /> <a href="#">Contact Us</a></li>
        <li><FontAwesomeIcon icon={faCog} /> <a href="#">Settings</a></li>
        <li><FontAwesomeIcon icon={faInfoCircle} /> <a href="#">About</a></li>
        <li><FontAwesomeIcon icon={faQuestionCircle} /> <a href="#">Help</a></li>
        <li><FontAwesomeIcon icon={faLock} /> <a href="#">Privacy Policy</a></li>
        <li><FontAwesomeIcon icon={faSignOutAlt} /> <a href="#">Logout</a></li>
      </ul>
    </div>
  );
}

export default VerticalNavbar;
