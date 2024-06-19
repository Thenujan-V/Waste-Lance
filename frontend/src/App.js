import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import RegisterOption from './Pages/RegisterOption'
import MrfRegistraion from './Pages/MrfRegistraion'
import SupplierRegistraion from './Pages/SupplierRegistration'
import HomePage from './Pages/MRF_Pages/HomePage'
import BinMonitoringPage from './Pages/MRF_Pages/BinMonitoringPage'
import BinsList from './Components/MRF/BinsList'
import BinDetails from './Components/MRF/BinDetails'
import AddBin from './Components/MRF/AddBin'
import SupplierList from './Components/MRF/SupplierList'
import EmployeeList from './Components/MRF/EmployeeList'
import EmployeeProfile from './Components/MRF/EmployeeProfile'
import VerticalNavbar from './Components/Suppliers/VerticalNavbar'
import WasteContribution from './Components/Suppliers/WasteContribution'
import CalendarComponent from './Components/Suppliers/CalendarComponent'
import WastageForm from './Components/Suppliers/WastageForm'
import PickupHistory from './Components/Suppliers/PickupHistory'
import WasteCollection from './Components/MRF/WasteCollection'
import WastagePickups from './Components/MRF/WastagePickups'


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
        <Route path="/wastage-collection" element={<WasteCollection />} />
        <Route path="/wastage-pickups" element={<WastagePickups />} />
        <Route path="/list-of-bins" element={<BinsList />} />
        <Route path="/bin-details/:bin_id" element={<BinDetails />} />
        <Route path="/add-bin" element={<AddBin />} />
        <Route path="/suppliers-list" element={<SupplierList />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeProfile />} />
        <Route path="/suppliers" element={<VerticalNavbar />} />
        <Route path="/suppliers/waste-contribution" element={<WasteContribution />} />
        <Route path="/suppliers/waste-contribution/calander" element={<CalendarComponent />} />
        <Route path="/suppliers/schedule" element={<WastageForm />} />
        <Route path="/suppliers/pickup-hstory" element={<PickupHistory />} />
        
      </Routes>
    </>
  )
}

export default App