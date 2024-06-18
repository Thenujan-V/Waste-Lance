import React from 'react';
import VerticalNavbar from './VerticalNavbar';

const PickupHistory = () => {
  const pickupHistory = [
    { pickupDate: '2024-06-15', wastageType: 'Plastic', weight: '5kg' },
    { pickupDate: '2024-06-14', wastageType: 'Organic', weight: '10kg' },
    { pickupDate: '2024-06-13', wastageType: 'Metal', weight: '3kg' },
  ];

  return (
    <div style={{display:'flex'}} >
        <div style={{flex:'1'}}>
            <VerticalNavbar />
        </div>
        <div className="container mt-4 p-5">
            <h2 className="mb-5 text-center">Pickup History</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Pickup Date</th>
                    <th scope="col">Wastage Type</th>
                    <th scope="col">Weight</th>
                </tr>
                </thead>
                <tbody>
                {pickupHistory.map((pickup, index) => (
                    <tr key={index}>
                    <td>{pickup.pickupDate}</td>
                    <td>{pickup.wastageType}</td>
                    <td>{pickup.weight}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default PickupHistory;
