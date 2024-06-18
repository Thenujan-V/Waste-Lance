import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { calendar } from '../Style';
import VerticalNavbar from './VerticalNavbar';

const workData = [
  {
    date: '2024-06-20',
    totalWeight: '100kg',
    mrfName: 'MRF 1',
    wasteDetails: {
      pet: '20kg',
      pp: '24kg',
      hdpe: '56kg'
    }
  },
  {
    date: '2024-06-22',
    totalWeight: '120kg',
    mrfName: 'MRF 2',
    wasteDetails: {
      pet: '30kg',
      pp: '30kg',
      hdpe: '60kg'
    }
  },
  {
    date: '2024-06-24',
    totalWeight: '90kg',
    mrfName: 'MRF 3',
    wasteDetails: {
      pet: '25kg',
      pp: '25kg',
      hdpe: '40kg'
    }
  }
];

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = date => {
    setSelectedDate(date);
  };

  const getDetailsForDate = date => {
    return workData.find(d => d.date === formatDate(date));
  };

  const isWorkDay = date => {
    return workData.some(d => d.date === formatDate(date));
  };

  const formatDate = date => {
    // Ensure the date is in 'YYYY-MM-DD' format
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const selectedDateDetails = selectedDate ? getDetailsForDate(selectedDate) : null;

  return (
    <div style={{display:'flex'}}>
        <div >
            <VerticalNavbar />
        </div>
        <div className="calendar-container mt-5">
            <h2>Select Date</h2>
        <div>
            <Calendar
            onClickDay={handleDateClick}
            tileClassName={({ date }) =>
            isWorkDay(date) ? 'workday' : null 
            }
        />
        </div>
        {selectedDateDetails && (
            <div className="details-container w-50"  >
            <h3>{selectedDateDetails.date}</h3>
            <p>MRF Name: {selectedDateDetails.mrfName}</p>
            <p>Total Weight: {selectedDateDetails.totalWeight}</p>
            <h3>Waste Details:</h3>
            <ul>
                {Object.entries(selectedDateDetails.wasteDetails).map(([type, weight]) => (
                <li key={type}>{type}: {weight}</li>
                ))}
            </ul>
            </div>
        )}
        </div>
    </div>
  );
};

export default CalendarComponent;
