import React from 'react';
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom';
import Globe from '../../assets/earth.png';


const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeclassname='active'>
                   <p>Home</p> 
                </NavLink>
                <div className='side-nav-div'>    
                    <div><p>PUBLIC</p></div>
                
                     <NavLink to='/Questions' className='side-nav-links' activeclassname='active'  >
                        <img src={Globe} alt="Globe" width="18" height="18" />
                         <p style={{paddingLeft:"10px"}}>Questions</p>
                    </NavLink>
                <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft:"40px"}}>
                   <p>Tags</p> 
                </NavLink>
                </div>
                <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft:"40px"}}>
                   <p>Users</p> 
                </NavLink>

            </nav>

        </div>
    );
}



export default LeftSidebar;