import React from 'react'
import { Link } from 'react-router-dom';
import  search  from '../../assets/search-icon-png-9969.png'
import logo from '../../assets/Stack_Overflow-Logo.wine.svg'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import '../../components/Navbar/Navbar.css'
import './Navbar.css'

var User = null
const Navbar = () => {
    return (
        <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt="logo" width="80" />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type="text" placeholder='search...'/>
                <img src={search} alt="search" width="18" className='search-icon'/>
            </form>
            {User === null?
                <Link to='/Auth' className='nav-item nav-links'>Log In</Link>:
                <>
                <Link to='/'><Avatar backgroundColor='#009dff' px="10px" py="7px"  borderRadius='60%' color='white'><Link to='/User' style={{color:'white',textDecoration:'none'}}>M</Link></Avatar></Link>
                <button className='nav-item nav-links'>Log Out</button>
                </>

            }
        </div>
      </nav>
    );

    }
export default Navbar;