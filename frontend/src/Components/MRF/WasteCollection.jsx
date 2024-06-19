import React, { useState } from 'react';
import { wasteCollection } from '../Style';

const initialData = [
    { id: 1, supplierName: 'Supplier A', supplierId: 'SUP001', wasteType: 'PE-HD', weight: 10 },
    { id: 2, supplierName: 'Supplier A', supplierId: 'SUP001', wasteType: 'PP', weight: 20 },
    { id: 2, supplierName: 'Supplier D', supplierId: 'SUP004', wasteType: 'PP', weight: 20 },
    { id: 3, supplierName: 'Supplier C', supplierId: 'SUP003', wasteType: 'PET', weight: 15 },
    { id: 4, supplierName: 'Supplier D', supplierId: 'SUP004', wasteType: 'PVC', weight: 8 },
    { id: 5, supplierName: 'Supplier A', supplierId: 'SUP001', wasteType: 'PET', weight: 10 },
    { id: 6, supplierName: 'Supplier B', supplierId: 'SUP002', wasteType: 'PP', weight: 20 },
    { id: 7, supplierName: 'Supplier C', supplierId: 'SUP003', wasteType: 'PE-HD', weight: 15 },
    { id: 8, supplierName: 'Supplier D', supplierId: 'SUP004', wasteType: 'PE-HD', weight: 8 },
];

const WasteCollection = () => {
    const [view, setView] = useState('wasteType'); // Default view by waste type

    const groupBy = (key) => {
        return initialData.reduce((result, item) => {
            (result[item[key]] = result[item[key]] || []).push(item);
            return result;
        }, {});
    };

    const renderGroupedData = (groupedData) => {
        return Object.entries(groupedData).map(([key, items]) => (
            <div key={key} className="mb-4">
                <h5 className="text">{key}</h5>
                {items.map((item) => (
                    <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <p className="mb-1">{item.wasteType} - {item.weight} kg</p>
                            <p className="mb-0">Supplier: {item.supplierName} ({item.supplierId})</p>
                        </div>
                        <small>Date: 17/09/2022</small>
                    </div>
                ))}
            </div>
        ));
    };

    const groupedData = {
        wasteType: groupBy('wasteType'),
        supplier: groupBy('supplierName'),
        date: groupBy('date'), // assuming a 'date' field exists in the data
    };

    return (
        <div className="container waste-collections">
            <h1 className="text-center my-4">Waste Collection</h1>
            <div className="d-flex justify-content-around mb-4">
                <button className="btn" onClick={() => setView('wasteType')}>By Waste Type</button>
                <button className="btn" onClick={() => setView('supplier')}>By Supplier</button>
                <button className="btn" onClick={() => setView('date')}>By Date</button>
            </div>
            <div className="list-group">
                {renderGroupedData(groupedData[view])}
            </div>
        </div>
    );
}

export default WasteCollection;
