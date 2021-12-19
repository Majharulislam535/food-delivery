import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../img/logo.png';
import './navbar.css';

const Navbar = () => {
    const [isMobile, setMobile] = useState(false);
    return (
        <div>
            <div className="nav-items flex items-center justify-between lg:m-4 md:m-4 m-2">
                <div>
                    <img src={logo} width='50%' alt="" />
                </div>
                <div className={isMobile ? 'nav-link-mobile' : 'nav-link'} onClick={() => setMobile(false)}>
                    <NavLink to="/home" className='font-bold text-xl mx-4'>Home</NavLink>
                    <NavLink to="/order" className='font-bold text-xl mx-4'>Order</NavLink>
                    <NavLink to="/manageOrder" className='font-bold text-xl mx-4 relative'><i className="fas fa-shopping-cart"></i><span className='count-number'>0</span></NavLink>
                    <NavLink to="/login" className='font-bold text-xl mx-4'>Login</NavLink>
                </div>
                <button className="hamburger"
                    onClick={() => setMobile(!isMobile)}
                >
                    {
                        isMobile ? <i className="fas fa-times font-bold text-2xl mx-4"></i> : <i className="fas fa-bars font-bold text-2xl mx-4"></i>
                    }
                </button>
            </div>
        </div >
    );
};

export default Navbar;