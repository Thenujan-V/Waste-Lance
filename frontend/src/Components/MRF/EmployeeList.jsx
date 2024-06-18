import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import MRFNavbar from './MRFNavbar';

const employees = [
  { id: 1, name: 'John Doe', profilePic: 'https://via.placeholder.com/50', address: '123 Main St', phone: '123-456-7890', age: 30, nic: 'NIC123456' },
  { id: 2, name: 'Jane Smith', profilePic: 'https://via.placeholder.com/50', address: '456 Elm St', phone: '234-567-8901', age: 28, nic: 'NIC234567' },
  { id: 3, name: 'Michael Johnson', profilePic: 'https://via.placeholder.com/50', address: '789 Oak St', phone: '345-678-9012', age: 35, nic: 'NIC345678' },
  { id: 4, name: 'Emily Davis', profilePic: 'https://via.placeholder.com/50', address: '101 Pine St', phone: '456-789-0123', age: 25, nic: 'NIC456789' },
  { id: 5, name: 'David Wilson', profilePic: 'https://via.placeholder.com/50', address: '202 Birch St', phone: '567-890-1234', age: 40, nic: 'NIC567890' },
  { id: 6, name: 'Linda Taylor', profilePic: 'https://via.placeholder.com/50', address: '303 Cedar St', phone: '678-901-2345', age: 32, nic: 'NIC678901' },
];

const EmployeeList = () => {
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleViewClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleCloseModal = () => {
    setShowCollectionModal(false);
  };

  const handleCollectionClick = () => {
    setShowCollectionModal(true);
    // Additional logic to handle collection data retrieval can go here
  };

  // Simulated collection data (replace with actual data fetching if needed)
  const collectionData = [
    { id: 1, date: '2024-06-18', time: '10:00 AM', weight: '20 kg' },
    { id: 2, date: '2024-06-17', time: '11:30 AM', weight: '15 kg' },
    { id: 3, date: '2024-06-16', time: '09:45 AM', weight: '18 kg' },
  ];

  return (
    <>
      <MRFNavbar />
      <div className="container mt-5 employeeList">
        <h1 className="m-4 text-center">Employee Management</h1>
        <div className="row">
          {employees.map(employee => (
            <div key={employee.id} className="col-md-4 mb-3 employee">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <img src={employee.profilePic} alt="Profile" className="rounded-circle m-2" width="70" height="70" />
                  <div className="flex-grow-1">
                    <h5 className="card-title mb-3">{employee.name}</h5>
                    <p className="card-text mb-4">ID: {employee.id}</p>
                    <Link to={`/employee/${employee.id}`} className="btn view">View</Link>
                    <button className="btn collection" onClick={() => handleCollectionClick(employee)}>Collection</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying collection details */}
      <div className={`modal fade ${showCollectionModal ? 'show' : ''}`} style={{ display: showCollectionModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Collection Details</h5>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {collectionData.map(item => (
                    <tr key={item.id}>
                      <td>{item.date}</td>
                      <td>{item.time}</td>
                      <td>{item.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
