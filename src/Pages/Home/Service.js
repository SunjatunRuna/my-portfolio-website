import React from 'react';

const Service = () => {
    return (
        <div className='my-32 px-32'>
            <h3 className='text-3xl text-center'>My Service</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center my-24 mx-32'>
                <div className='text-center border border-gray-100 py-6 px-16'>
                <i class="fa-solid fa-feather-pointed text-5xl"></i>
                <h4 className='my-6 text-xl font-bold uppercase'>Web Design</h4>
                </div>
                <div className='text-center border border-gray-100 p-6'>
                    <i class="fa-solid fa-screwdriver-wrench text-5xl"></i>
                    <h4 className='my-6 text-xl font-bold uppercase'>Web Development</h4>
                </div>
                <div className='text-center border border-gray-100 py-6 px-16'>
                <i class="fa-solid fa-virus text-5xl"></i>
                    <h4 className='my-6 text-xl font-bold uppercase'>Bug Fixing</h4>
                </div>
                <div className='text-center border border-gray-100 p-6 my-10'>
                <i class="fa-solid fa-mobile-screen text-5xl"></i>
                    <h4 className='my-6 text-xl font-bold uppercase'>Responsive Design</h4>
                </div>
                <div className='text-center border border-gray-100 p-6 my-10'>
                <i class="fa-brands fa-nfc-directional text-5xl"></i>
                    <h4 className='my-6 text-xl font-bold uppercase'>E-Commerce Website</h4>
                </div>
                <div className='text-center border border-gray-100 p-6 my-10'>
                <i class="fa-brands fa-wordpress-simple text-5xl"></i>
                    <h4 className='my-6 text-xl font-bold uppercase'>WordPress Design</h4>
                </div>
            </div>
        </div>
    );
};

export default Service;