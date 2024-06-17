import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerOption } from '../Components/Style';

const RegisterOption = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  }

  const handleContinueClick = () => {
    if (selectedOption === 'MRF') {
      navigate('/MRF-registration');
    } else if (selectedOption === 'Supplier') {
      navigate('/Supplier-registration')
    }
  }

  return (
    <div className='selection'>
      <div className="container-fluid d-flex registerOptionPage">
        <div className="row flex-grow-1">
          <div className="col-md-6 d-none d-md-flex bg-image">
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="registerSeletion">
              <h2 className='text-center'>Register</h2>
              <h4>Select one of the options below</h4>
              <div className='buttons'>
                <button className='btn' onClick={() => handleOptionClick('MRF')}>MRF Account</button>
                <button className='btn' onClick={() => handleOptionClick('Supplier')}>Supplier Account</button>
              </div>
              <button className='btn submitBtn' onClick={handleContinueClick}>Continue</button>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default RegisterOption;
