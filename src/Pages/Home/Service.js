import React from 'react';

const Service = () => {
    return (
        <div className='my-32 px-32'>
            <h3 className='text-3xl text-center uppercase text-gray-700 font-bold'>My Service</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-300 justify-items-center my-24 mx-32'>
                <div className='text-center border border-slate-800 py-6 px-16 bg-indigo-600 rounded-2xl'>
                <i class="fa-solid fa-feather-pointed text-5xl"></i>
                <h4 className='my-6 text-xl font-bold uppercase'>Web Design</h4>
                </div>
                <div className='text-center border border-slate-800 bg-yellow-500 rounded-2xl p-6'>
                    <i class="fa-solid fa-screwdriver-wrench text-5xl"></i>
                    <h4 className='my-6 text-xl font-bold uppercase'>Web Development</h4>
                </div>
                <div className='text-center border border-slate-800 shadow-inner py-6 px-16 bg-pink-700 rounded-2xl'>
                <i class="fa-solid fa-virus text-5xl"></i>
                    <h4 className='my-6 text-xl font-bold uppercase'>Bug Fixing</h4>
                </div>
                <div className='text-center border border-slate-800 shadow-inner p-6 bg-rose-500 rounded-2xl'>
                <i class="fa-solid fa-mobile-screen text-5xl"></i>
                    <h4 className='my-6 text-xl font-bold uppercase'>Responsive Design</h4>
                </div>
                <div className='text-center border border-slate-800 shadow-inner p-6 bg-sky-500 rounded-2xl'>
                <i class="fa-brands fa-nfc-directional text-5xl"></i>
                    <h4 className='my-6 text-xl font-bold uppercase'>E-Commerce Website</h4>
                </div>
                <div className='text-center border border-slate-800 shadow-inner p-6 bg-purple-700 rounded-2xl'>
                <i class="fa-brands fa-wordpress-simple text-5xl"></i>
                    <h4 className='my-6 text-xl font-bold uppercase'>WordPress Design</h4>
                </div>
            </div>
        </div>
    );
};

export default Service;