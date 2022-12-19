import React from 'react'
import {GiEarthAmerica} from 'react-icons/gi'

const Navbar = () => {
  return (
    <React.StrictMode>
        <nav className='nav-container'>
            <GiEarthAmerica className='earth-icon'/>
            <h4>My Travel Journal</h4>
            
        </nav>
    </React.StrictMode>
  )
}

export default Navbar