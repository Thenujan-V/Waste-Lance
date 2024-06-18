import React from 'react'
import { binMonitoringVerticalNav } from './Style'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const BinMonitoringVerticalNav = () => {
  return (
    <div>
        <div className="vertical-navbar bg-success text-white">
            <Link to='/'><FontAwesomeIcon icon={faArrowLeft} size='xl' color='black'/></Link>
            <h3 className="navbar-heading">BIN MONITORING</h3>
            <ul className="nav flex-column">
                <li className="nav-item">
                <Link to="/list-of-bins" className="nav-link text-white">
                    List of Bins
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/add-bin" className="nav-link text-white">
                    Add Bins
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/download-bins" className="nav-link text-white">
                    Download Report
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/report-bins" className="nav-link text-white">
                    Report Problem
                </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default BinMonitoringVerticalNav