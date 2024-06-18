import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MRFNavbar from './MRFNavbar';

const SupplierList = () => {
    const [suppliers, setSuppliers] = useState([
        { id: '#C001', name: 'HNB', location: 'Kotahena', joinedDate: '01/01/2020', supplyHistory: { PET: 50, Cardboard: 20, others: 10 } },
        { id: '#C002', name: 'Cargils', location: 'Kelaniya', joinedDate: '26/03/2022', supplyHistory: { PET: 50, Cardboard: 20, others: 10 } },
        { id: '#C003', name: 'Royal College', location: 'Colombo 07', joinedDate: '15/05/2021', supplyHistory: { PET: 40, Cardboard: 30, others: 5 } },
        { id: '#C004', name: 'KFC', location: 'Wellawatta', joinedDate: '20/08/2019', supplyHistory: { PET: 60, Cardboard: 10, others: 15 } },
        { id: '#C005', name: 'HNB', location: 'Kotahena', joinedDate: '01/01/2020', supplyHistory: { PET: 50, Cardboard: 20, others: 10 } },
        { id: '#C006', name: 'HNB', location: 'Modara', joinedDate: '11/11/2021', supplyHistory: { PET: 55, Cardboard: 25, others: 8 } },
        { id: '#C007', name: 'HNB', location: 'Pettah', joinedDate: '05/05/2020', supplyHistory: { PET: 65, Cardboard: 15, others: 12 } },
        { id: '#C008', name: 'NSB', location: 'Kotahena', joinedDate: '22/02/2019', supplyHistory: { PET: 70, Cardboard: 20, others: 10 } },
        { id: '#C009', name: 'Sampath', location: 'Kotahena', joinedDate: '13/03/2021', supplyHistory: { PET: 50, Cardboard: 20, others: 10 } }
    ]);

    const [show, setShow] = useState(false);
    const [selectedSupplier, setSelectedSupplier] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (supplier) => {
        setSelectedSupplier(supplier);
        setShow(true);
    };

    const handleDelete = (id) => {
        setSuppliers(suppliers.filter(supplier => supplier.id !== id));
    };

    return (
        <>
        <MRFNavbar />
        <div className="container mt-4">
            <h2 className='text-center m-4'>Suppliers List</h2>
            <div className="list-group">
                {suppliers.map(supplier => (
                    <div key={supplier.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{supplier.id} - {supplier.name}</h5>
                            <p>{supplier.location}</p>
                        </div>
                        
                        <div className='d-flex' style={{gap:'20px'}}>
                            <button className="btn mr-2" onClick={() => handleShow(supplier)} style={{backgroundColor:'#37B943', fontSize:'18px', fontWeight:'bold', borderRadius:'30px'}}>View</button>
                            <button className="btn btn-danger" onClick={() => handleDelete(supplier.id)} style={{ fontSize:'18px', fontWeight:'bold', borderRadius:'30px'}} >Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedSupplier && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedSupplier.name} - {selectedSupplier.location}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Joined date: {selectedSupplier.joinedDate}</p>
                        <p>Location: {selectedSupplier.location}</p>
                        <div className="bg-light p-2">
                            <p>PET: {selectedSupplier.supplyHistory.PET}kg</p>
                            <p>Cardboard: {selectedSupplier.supplyHistory.Cardboard}kg</p>
                            <p>Others: {selectedSupplier.supplyHistory.others}kg</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
        </>
    );
};

export default SupplierList;
