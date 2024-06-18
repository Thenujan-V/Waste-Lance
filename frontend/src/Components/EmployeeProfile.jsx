import React from 'react';
import { useParams } from 'react-router-dom';
import MRFNavbar from './MRFNavbar';


const EmployeeProfile = () => {
    const {id} = useParams()
    const employees = [
        { id: 1, name: 'John Doe', profilePic: 'https://via.placeholder.com/50', address: '123 Main St', phone: '123-456-7890', age: 30, nic: 'NIC123456' },
        { id: 2, name: 'Jane Smith', profilePic: 'https://via.placeholder.com/50', address: '456 Elm St', phone: '234-567-8901', age: 28, nic: 'NIC234567' },
        { id: 3, name: 'Michael Johnson', profilePic: 'https://via.placeholder.com/50', address: '789 Oak St', phone: '345-678-9012', age: 35, nic: 'NIC345678' },
        { id: 4, name: 'Emily Davis', profilePic: 'https://via.placeholder.com/50', address: '101 Pine St', phone: '456-789-0123', age: 25, nic: 'NIC456789' },
        { id: 5, name: 'David Wilson', profilePic: 'https://via.placeholder.com/50', address: '202 Birch St', phone: '567-890-1234', age: 40, nic: 'NIC567890' },
        { id: 6, name: 'Linda Taylor', profilePic: 'https://via.placeholder.com/50', address: '303 Cedar St', phone: '678-901-2345', age: 32, nic: 'NIC678901' },
      ]

      const employee = employees.find(employee => employee.id === parseInt(id))

  return (
    <>
    <MRFNavbar />
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
           {employee && <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
              <img src={employee.profilePic} alt="Profile" className="rounded-circle mb-3" width="150" height="150" />
              <h5 className="card-title mb-3">{employee.name}</h5>
              <p className="card-text mb-2">ID: {employee.id}</p>
              <p><strong>Address:</strong> {employee.address}</p>
              <p><strong>Phone:</strong> {employee.phone}</p>
              <p><strong>Age:</strong> {employee.age}</p>
              <p><strong>NIC:</strong> {employee.nic}</p>
              <div style={{display:'flex', gap:'80px'}}>
                <a href="#" className="btn view" style={{backgroundColor:'#37B943', borderRadius:'30px', fontWeight:'600'}}>View Contributions</a>
                <a href="#" className="btn btn-danger" style={{borderRadius:'30px', fontWeight:'600'}}>Delete Profile</a>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default EmployeeProfile;
