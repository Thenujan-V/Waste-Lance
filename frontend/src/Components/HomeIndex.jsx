import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faCoffee, faMoneyBill, faMoneyCheckDollar, faTrash, faTrashAlt, faUser, faUserAlt, faUserCog, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const HomeIndex = () => {
  return (
    <div className="container">
        <div className='row MRFHome'>
        <Link to='' className="col-lg-4 col-md-4 col-4 link">
            <FontAwesomeIcon icon={faCloudArrowDown} size='5x'/>
            <h4>Waste Collection</h4>
        </Link>
        <Link to='/bin-monitoring' className="col-lg-4 col-md-4 col-4 link">
            <FontAwesomeIcon icon={faTrashAlt} size='5x'/>
            <h4>Bin monitoring</h4>
        </Link>
        <Link className="col-lg-4 col-md-4 col-4 link">
            <FontAwesomeIcon icon={faMoneyCheckDollar} size='5x'/>
            <h4>payments</h4>
        </Link>
        <Link className="col-lg-4 col-md-4 col-4 link">
            <FontAwesomeIcon icon={faUserCog} size='5x'/>
            <h4>employee management</h4>
        </Link>
        <Link className="col-lg-4 col-md-4 col-4 link">
            <FontAwesomeIcon icon={faUserAlt} size='5x'/>
            <h4>employee profiles</h4>
        </Link>
        <Link className="col-lg-4 col-md-4 col-4 link">
            <FontAwesomeIcon icon={faUsers} size='5x'/>
            <h4>supplier profiles</h4>
        </Link>
        
    </div>
    </div>
  )
}

export default HomeIndex