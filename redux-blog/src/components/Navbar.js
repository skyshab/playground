import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/' className='hover:underline mr-4'>
                Home
            </Link>
            <Link to='/blog' className='hover:underline mr-4'>
                Blog
            </Link>
            <Link to='/about' className='hover:underline'>
                About
            </Link>
        </div>
    );
};

export default Navbar;
