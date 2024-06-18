import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addBin } from '../Style';
import BinMonitoringVerticalNav from './BinMonitoringVerticalNav';

const AddBin = () => {
  const [binName, setBinName] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [sponsor, setSponsor] = useState('');
  const [notes, setNotes] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div style={{display:'flex'}}>
        <div>
            <BinMonitoringVerticalNav />
        </div>
        <div className="container addBin mt-3 w-50">
            <Link to="/list-of-bins" className="btn btn-link mb-3">
                <i className="fas fa-arrow-left"></i> Back
            </Link>
            <h2 className='text-center '>Add New Bin</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="binName" className="form-label">Bin Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="binName"
                    value={binName}
                    onChange={(e) => setBinName(e.target.value)}
                    required
                />
                </div>
                <div className="mb-3">
                <label htmlFor="binImage" className="form-label">Insert Bin Image</label>
                <input
                    type="file"
                    className="form-control"
                    id="binImage"
                    onChange={handleImageChange}
                    required
                />
                </div>
                <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input
                    type="text"
                    className="form-control"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                </div>
                <div className="mb-3">
                <label htmlFor="sponsor" className="form-label">Sponsored By</label>
                <input
                    type="text"
                    className="form-control"
                    id="sponsor"
                    value={sponsor}
                    onChange={(e) => setSponsor(e.target.value)}
                    required
                />
                </div>
                <div className="mb-3">
                <label htmlFor="notes" className="form-label">Notes</label>
                <textarea
                    className="form-control"
                    id="notes"
                    rows="3"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                ></textarea>
                </div>
                <button type="submit" className="btn">Add Bin</button>
            </form>
            </div>  
    </div>
  );
};

export default AddBin;
