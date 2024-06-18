import React from 'react'
import VerticalNavbar from './VerticalNavbar'
import { Link } from 'react-router-dom'
import WastagePieChart from './WastagePieChart'

const WasteContribution = () => {
  return (
    <div style={{display:'flex'}} className='wasteContribution'>
        <div style={{flex:'1'}}>
            <VerticalNavbar />
        </div>
        <div style={{flex:'4', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h1 className=' text-center mt-4'>Waste Contribution</h1>
            <div className='d-flex flex-column justify-content-center align-items-center mt-5 w-50' style={{backgroundColor:'#F5F5F5'}}>
                <h2>WELL DONE...!</h2>
                <Link to='/suppliers/waste-contribution/calander' className='btn mt-3' style={{border:`4px solid #37B943`, fontSize:'22px', fontWeight:'600',borderRadius:'30px', padding:'4px 25px' }}>click here to view</Link>
                <div className='m-4'>
                    <WastagePieChart />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WasteContribution