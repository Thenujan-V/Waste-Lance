import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import VerticalNavbar from './VerticalNavbar';
import 'react-datepicker/dist/react-datepicker.css';
import { wastageForm } from '../Style';

const WastageForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [address, setAddress] = useState("");
    const [wastageType, setWastageType] = useState("plastic");
    const [mrfName, setMrfName] = useState("Eko plasco - Colombo");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Date:", startDate);
        console.log("Address:", address);
        console.log("Wastage Type:", wastageType);
        console.log("MRF Name:", mrfName);
        console.log("Quantity:", quantity);
    }

    return (
        <div style={{display:'flex'}} >
            <div style={{flex:'1'}}>
                <VerticalNavbar />
            </div>
            <div className="container mt-5 wasteForm">
                <h1 className="text-center">Schedule Pickup</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="form-group mt-4 col-md-6">
                            <label htmlFor="pickupDate">Pickup Date</label>
                            <input type="date" className="form-control" id="pickupDate" selected={startDate} onChange={date => setStartDate(date)} />
                        </div>
                        <div className="form-group mt-4 col-md-6">
                            <label htmlFor="address">Address</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="address" 
                                placeholder="Enter your address" 
                                value={address} 
                                onChange={e => setAddress(e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group mt-4 col-md-6">
                            <label htmlFor="mrfName">MRF Name</label>
                            <select 
                                className="form-control" 
                                id="mrfName" 
                                value={mrfName} 
                                onChange={e => setMrfName(e.target.value)}
                            >
                                <option value="Eko plasco - Colombo">Eko plasco - Colombo</option>
                                <option value="Eko plasco - Ratnapura">Eko plasco - Ratnapura</option>
                                <option value="Eko plasco - Kalutura">Eko plasco - Kalutura</option>
                                <option value="Eko Spindles - Matara">Eko Spindles - Matara</option>
                            </select>
                            </div>
                            <div className="form-group mt-4 col-md-6">
                                <label htmlFor="quantity">Quantity</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="quantity" 
                                    placeholder="Enter quantity" 
                                    value={quantity} 
                                    onChange={e => setQuantity(e.target.value)} 
                                />
                        </div>  
                    </div>
                    <div className="form-group mt-4">
                        <label>Wastage Type</label>
                        <div className="wastage-type-container">
                            {['plastic', 'glass', 'e-wastage', 'paper', 'organic', 'metals', 'other'].map(type => (
                                <div 
                                    key={type} 
                                    className={`wastage-type-card ${wastageType === type ? 'selected' : ''}`} 
                                    onClick={() => setWastageType(type)}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default WastageForm;

