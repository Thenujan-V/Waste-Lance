import React, { useEffect, useState } from 'react';
import { wastagePickups } from '../Style';
import { showSchedule } from '../../Services/MRFService';

const initialData = [
    { schedule_id: 'WC0001', status: 'Pending', location: 'KFC Colombo', weight: 1325, wasteType: 'PET', date: '17/09/2022' },
    { schedule_id: 'WC0002', status: 'Completed', location: 'NFC Colombo', weight: 420, wasteType: 'PE-HD', date: '17/09/2022' },
    { schedule_id: 'WC0003', status: 'Pending', location: 'Kelaniya IOC', weight: 1250, wasteType: 'PVC', date: '17/09/2022' },
    { schedule_id: 'WC0004', status: 'Rejected', location: 'UI Colombo', weight: 865, wasteType: 'PE-LD', date: '17/09/2022' },
    { schedule_id: 'WC0005', status: 'Completed', location: 'NSB Colombo', weight: 1020, wasteType: 'PS', date: '17/09/2022' },
    { schedule_id: 'WC0005', status: 'Accepted', location: 'NSB Colombo', weight: 1020, wasteType: 'PS', date: '17/09/2022' },
];

const WasteCollection = () => {
    const [data, setData] = useState([]);
    const [selectedSchedule, setSelectedSchedule] = useState(null);

    useEffect(() => {
        const fetch_schedule = async () => {
            try{
                const response = await showSchedule()
                console.log('res :', response.data)
                setData(response.data)
            }
            catch(error){
                console.log('error occure when fetching data :', error)
            }
        }
        fetch_schedule()
    }, [])

    const handleViewClick = (schedule) => {
        setSelectedSchedule(schedule);
    };

    const handleRejectClick = (schedule_id) => {
        alert(`Request rejected for schedule ID: ${schedule_id}`);
        setData((prevData) =>
            prevData.map((item) =>
                item.schedule_id === schedule_id ? { ...item, status: 'Rejected' } : item
            )
        );
    };

    const handleAcceptClick = (schedule_id) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.schedule_id === schedule_id ? { ...item, status: 'Accepted' } : item
            )
        );
        setSelectedSchedule((prevSchedule) => ({
            ...prevSchedule,
            status: 'Accepted',
        }));
    };

    const handlePickupFinishClick = () => {
        alert(`Pickup finished for schedule ID: ${selectedSchedule.schedule_id}`);
        setData((prevData) =>
            prevData.map((item) =>
                item.schedule_id === selectedSchedule.schedule_id ? { ...item, status: 'Completed' } : item
            )
        );
        setSelectedSchedule(null);
    };

    const closePopup = () => {
        setSelectedSchedule(null);
    };

    return (
        <div className="container collection-schecdule">
            <h1 className="header">Waste Collection Schedule</h1>
            <table className="table w-75 table-striped">
                <thead>
                    <tr>
                        <th>Schedule ID</th>
                        <th>Status</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 && data.map((item) => (
                        <tr key={item.schedule_id}>
                            <td>{item.schedule_id}</td>
                            <td>{item.status}</td>
                            <td>{item.location}</td>
                            <td className='d-flex' style={{gap:'25px'}}>
                                <button className="btn-view" onClick={() => handleViewClick(item)}>View</button>
                                {(item.status === 'pending' || item.status === 'completed' || item.status === 'accepted') && (
                                    <button className="btn-reject" onClick={() => handleRejectClick(item.schedule_id)}>Reject</button>
                                )}
                                {/* {item.status === 'Completed' && (
                                    <span className="status-completed">Completed</span>
                                )} */}
                                {item.status === 'rejected' && (
                                    <span className="status-rejected">Rejected</span>
                                )}
                                {/* {item.status === 'Accepted' && (
                                    <span className="status-accepted">Accepted</span>
                                )} */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedSchedule && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Details for Schedule ID: {selectedSchedule.schedule_id}</h3>
                        <p>Status: {selectedSchedule.status}</p>
                        <p>Location: {selectedSchedule.location}</p>
                        <p>Waste Type: {selectedSchedule.type}</p>
                        <p>quantity: {selectedSchedule.weight} kg</p>
                        <p>Date: {new Date(selectedSchedule.schedule_date).toLocaleDateString()}</p>
                        {selectedSchedule.status === 'pending' && (
                            <button className="btn btn-accept m-2" onClick={() => handleAcceptClick(selectedSchedule.schedule_id)}>Accept</button>
                        )}
                        {selectedSchedule.status === 'accepted' && (
                            <button className="btn btn-pickup-finish m-2" onClick={handlePickupFinishClick}>Pickup Finish</button>
                        )}
                        <button className="btn close m-2" onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WasteCollection;
