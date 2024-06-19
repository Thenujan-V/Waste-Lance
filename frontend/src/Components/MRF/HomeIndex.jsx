import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faCoffee, faMoneyBill, faMoneyCheckDollar, faTrash, faTrashAlt, faTruckPickup, faUser, faUserAlt, faUserCog, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { showSchedule } from '../../Services/MRFService';


const HomeIndex = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetch_schedule = async () => {
            try{
                const response = await showSchedule()
                setData(response.data)
            }
            catch(error){
                console.log('error occure when fetching data :', error)
            }
        }
        fetch_schedule()
    }, [])


    const countOfNewSchedules = data.reduce((acc, item) => item.status === 'pending' ? acc + 1 : acc, 0)

  return (
    <div>
        <div className="container">
        <div className='MRFHome'>
            <Link to='/wastage-pickups' className="col-lg-4 col-md-4 col-4 link">
                <FontAwesomeIcon icon={faTruckPickup} size='5x'/>
                <h4>New Pickups</h4>
                {countOfNewSchedules !== 0 && <span className="notification-badge">{countOfNewSchedules}</span>}
            </Link>
            <Link to='/wastage-collection' className="col-lg-4 col-md-4 col-4 link">
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
            <Link to='employee-list' className="col-lg-4 col-md-4 col-4 link">
                <FontAwesomeIcon icon={faUserCog} size='5x'/>
                <h4>employee management</h4>
            </Link>
            <Link to='/suppliers-list' className="col-lg-4 col-md-4 col-4 link">
                <FontAwesomeIcon icon={faUsers} size='5x'/>
                <h4>supplier profiles</h4>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default HomeIndex