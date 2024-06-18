import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { binDetails } from './Style';
import BinMonitoringVerticalNav from './BinMonitoringVerticalNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const binsData = [
  {
    id: 1,
    binNo: '001Bin',
    sponsor: 'Coc-015',
    fillLevel: 40,
    location: 'Location A',
    placedDate: '13/08/2022',
    lastCollectionDate: '26/09/2022',
    collector: 'John Doe (EM-001)',
    status: 'Active',
    imageUrl: 'path/to/image1.jpg'
  },
  {
    id: 2,
    binNo: '002Bin',
    sponsor: 'Coc-028',
    fillLevel: 60,
    location: 'Location B',
    placedDate: '15/09/2022',
    lastCollectionDate: '01/10/2022',
    collector: 'Jane Smith (EM-002)',
    status: 'Inactive',
    imageUrl: 'path/to/image2.jpg'
  },
  {
    id: 3,
    binNo: '003Bin',
    sponsor: 'Coc-039',
    fillLevel: 30,
    location: 'Location C',
    placedDate: '20/07/2022',
    lastCollectionDate: '05/08/2022',
    collector: 'Bob Johnson (EM-003)',
    status: 'Active',
    imageUrl: 'path/to/image3.jpg'
  },
  {
    id: 4,
    binNo: '004Bin',
    sponsor: 'Coc-025',
    fillLevel: 90,
    location: 'Location D',
    placedDate: '10/10/2022',
    lastCollectionDate: '15/10/2022',
    collector: 'Alice Davis (EM-004)',
    status: 'Active',
    imageUrl: 'path/to/image4.jpg'
  },
  {
    id: 5,
    binNo: '499Bin',
    sponsor: 'Coc-089',
    fillLevel: 10,
    location: 'Location E',
    placedDate: '01/11/2022',
    lastCollectionDate: '10/11/2022',
    collector: 'Charlie Brown (EM-005)',
    status: 'Inactive',
    imageUrl: 'path/to/image5.jpg'
  },
];

const BinDetails = () => {
  const { bin_id } = useParams();
  const bin = binsData.find(b => b.binNo === bin_id);

  if (!bin) {
    return <div>Bin not found</div>;
  }

  return (
    <div style={{display:'flex'}}>
      <div>
          <BinMonitoringVerticalNav />
      </div>
      {bin ? <div className="container mt-3">
        <Link to="/list-of-bins" className="btn btn-link mb-3">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title" style={{color:'green'}}>{bin.binNo}</h2>
            {/* <img src={bin.imageUrl} alt={bin.binNo} className="bin-image mb-3" /> */}
            <div className='d-flex justify-content-center m-4'>
              <FontAwesomeIcon icon={faTrashAlt} size='8x' color='green'/>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center m-4'>
              <p><strong>Location:</strong> {bin.location}</p>
              <p><strong>Placed by:</strong> {bin.sponsor}</p>
              <p><strong>Placed on:</strong> {bin.placedDate}</p>
              <p><strong>Last collection on:</strong> {bin.lastCollectionDate}</p>
              <p><strong>Collected by:</strong> {bin.collector}</p>
              <p><strong>Status:</strong> {bin.status}</p>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button className="btn driver">Alert driver to collect</button>
              <button className="btn btn-outline-secondary edit">Edit</button>
            </div>
          </div>
        </div>
      </div>  : <p>Bin Not Found</p>}   
    </div>
  );
};

export default BinDetails;
