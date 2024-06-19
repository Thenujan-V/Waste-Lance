import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mrfRegistraion } from '../Components/Style';

const MrfRegistraion = () => {
  const navigator = useNavigate()
  const [formData, setFormData] = useState({
    mrfName: '',
    email: '',
    location: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear previous error for the field when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    let errors = {};
    if (!formData.mrfName.trim()) {
      errors.mrfName = 'MRF Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.mrfName.trim())) {
      errors.mrfName = 'MRF Name should only contain letters and spaces';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = 'Invalid email address';
    }

    if (!formData.location.trim()) {
      errors.location = 'Location is required';
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.trim().length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Implement registration logic here
      console.log(formData); // For demonstration
      // Reset form after successful submission (optional)
      setFormData({
        mrfName: '',
        email: '',
        location: '',
        password: '',
        confirmPassword: ''
      });
      navigator('/')
    }
  };

  return (
    <div className="container-fluid mrf-registration">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">
            <Link to="/register-options" className="btn btn-link">
              <i className="bi bi-arrow-left"></i> Go Back
            </Link>
            MRF Account Registration
          </h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className={`form-control ${errors.mrfName ? 'is-invalid' : ''}`}
                id="mrfName"
                name="mrfName"
                placeholder='Enter MRF Name'
                value={formData.mrfName}
                onChange={handleChange}
                
              />
              {errors.mrfName && <div className="invalid-feedback">{errors.mrfName}</div>}
            </div>
            <div className="mb-3">
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                placeholder='Email address'
                value={formData.email}
                onChange={handleChange}
                
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <input
                type="text"
                className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                id="location"
                name="location"
                placeholder='Your Location'
                value={formData.location}
                onChange={handleChange}
                
              />
              {errors.location && <div className="invalid-feedback">{errors.location}</div>}
            </div>
            <div className="mb-3">
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                id="password"
                name="password"
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <div className="mb-3">
              <input
                type="password"
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                id="confirmPassword"
                name="confirmPassword"
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                onChange={handleChange}
                
              />
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>
            <div className='buttons'>
                <button type="submit" className="btn">Register</button>
            </div>
          </form>
          <div className='para'>
          <p className="mt-3 text-center">
            Already have an account? <Link to="/login" className='link'>Login here</Link>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MrfRegistraion;
