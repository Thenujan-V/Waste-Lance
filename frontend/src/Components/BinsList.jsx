import React from 'react';
import { binList } from './Style';
import BinMonitoringVerticalNav from './BinMonitoringVerticalNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const binsData = [
  { binNo: '#001Bin', sponsor: 'Coc-015', fillLevel: 40 },
  { binNo: '#002Bin', sponsor: 'Coc-028', fillLevel: 60 },
  { binNo: '#003Bin', sponsor: 'Coc-039', fillLevel: 30 },
  { binNo: '#004Bin', sponsor: 'Coc-025', fillLevel: 90 },
  { binNo: '#499Bin', sponsor: 'Coc-089', fillLevel: 10 },
];

const BinsList = () => {
  return (
    <div style={{display:'flex'}}>
        <div>
            <BinMonitoringVerticalNav />
        </div>
        <div className="container mt-3">
            <h2 className="text-center mb-4">List of Bins</h2>
            <ul className="list-group">
                {binsData.map((bin, index) => {
                let levelClass = 'bg-success'; // Default to green
                if (bin.fillLevel > 75) {
                    levelClass = 'bg-danger'; // Red for more than 75%
                } else if (bin.fillLevel > 50) {
                    levelClass = 'bg-warning'; // Yellow for more than 50%
                }

                return (
                    <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center list">
                        <div className='d-flex align-items-center'>
                            <div className={`icon-circle ${levelClass} mr-3`}><FontAwesomeIcon icon={faTrash} size='xl'/></div>
                            <div>
                                <div className="bin-info">{bin.binNo} - {bin.sponsor}</div>
                                <div className="bin-level">Bin level: {bin.fillLevel}%</div>
                            </div>  
                        </div>
                        
                    </div>
                    <div className='buttons'>
                            <button className='btn view' to={`/bin-details/${bin.binNo}`}>View</button>
                            <button className='btn delete'>Delete</button>
                        </div>
                    </li>
                );
                })}
            </ul>
        </div>
    </div>
  );
};

export default BinsList;
