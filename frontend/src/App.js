import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import RegisterOption from './Pages/RegisterOption'
import MrfRegistraion from './Pages/MrfRegistraion'
import SupplierRegistraion from './Pages/SupplierRegistration'
import HomePage from './Pages/MRF_Pages/HomePage'
import BinMonitoringPage from './Pages/MRF_Pages/BinMonitoringPage'
import BinsList from './Components/BinsList'
import BinDetails from './Components/BinDetails'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register-options" element={<RegisterOption />} />
        <Route path="/MRF-registration" element={<MrfRegistraion />} />
        <Route path="/Supplier-registration" element={<SupplierRegistraion />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/bin-monitoring" element={<BinMonitoringPage />} />
        <Route path="/list-of-bins" element={<BinsList />} />
        <Route path="/bin-details/:bin_id" element={<BinDetails />} />

      </Routes>
    </>
  )
}

export default App