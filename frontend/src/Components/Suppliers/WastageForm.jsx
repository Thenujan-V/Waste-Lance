import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalNavbar from './VerticalNavbar';
import 'react-datepicker/dist/react-datepicker.css';
import { wastageForm } from '../Style';  // Make sure this path is correct
import { setSchedule } from '../../Services/SupplierServices';  // Make sure this path is correct
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WastageForm = () => {
    const [startDate, setStartDate] = useState('');
    const [address, setAddress] = useState("");
    const [wastageType, setWastageType] = useState("plastic");
    const [mrfName, setMrfName] = useState("Eko plasco - Colombo");
    const [quantity, setQuantity] = useState("");

    const handleClear = () => {
        setStartDate('')
        setAddress('')
        setWastageType("plastic")
        setMrfName("Eko plasco - Colombo")
        setQuantity('')
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            schedule_date: startDate,
            MRF_name: mrfName,
            type: wastageType,
            quantity: quantity,
            location: address,
            supplier_id: '1'
        }
        console.log('data :', data)
        try {
            await setSchedule(data)
            toast.success('Schedule set successfully!', {
                position: 'top-right',
                autoClose: 5000,
                className: 'custom-toast',
                style: {
                    backgroundColor: 'green',
                    color: 'black',
                }
            })
            handleClear()
        } catch (error) {
            console.log('error occur when set schedule :', error)
            toast.error('Error setting schedule!', {
                position: 'top-right',
                autoClose: 5000,
                className: 'custom-toast',
                style: {
                    backgroundColor: 'red',
                    color: 'white',
                }
            });
        }
    }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: '1' }}>
                <VerticalNavbar />
            </div>
            <div className="container mt-5 wasteForm">
                <h1 className="text-center">Schedule Pickup</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="form-group mt-4 col-md-6">
                            <label htmlFor="pickupDate">Pickup Date</label>
                            <input type="date" className="form-control" id="pickupDate" value={startDate} onChange={e => setStartDate(e.target.value)} />
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
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default WastageForm;
