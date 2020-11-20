import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='bg-blue-800 text-white'>
            <div className='container mx-auto p-4'>
                <h1 className='text-3xl'>My React Redux Blog</h1>
                <Navbar />
            </div>
        </div>
    );
};

export default Header;
