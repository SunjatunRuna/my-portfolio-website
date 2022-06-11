import React from 'react';

const Contact = () => {
    return (
        <div className='px-32 mt-24'>
            <h3 className='uppercase text-3xl font-bold text-center my-16 text-slate-700'>Contact Me</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-24 text-xl text-gray-300'>
                <div>
                <i class="fa-solid fa-phone mx-4"></i>
                <span>+8801638084253</span>
                </div>
                <div>
                <i class="fa-solid fa-envelope mx-4"></i>
                <span><a href="#">sunjatuna@gmail.com</a></span>
                </div>
                <div>
                <i class="fa-solid fa-location-dot mx-4"></i>
                <span>Chittagong, Bangladesh</span>
                </div>
            </div>
            <div className='mt-24 text-center pb-24'>
                <p className='my-6 text-gray-300 text-xl uppercase'>Any Query?</p>
                <form>
                    <input type="email" placeholder='email' className='border w-96 pl-4 py-2'/><br />
                    <textarea name="" id="" rows="5" className='border w-96 my-6'></textarea><br />
                    <button className='btn w-96 bg-rose-500 border-0 pl-4'>Send Message</button>
                </form>
            </div>       
        </div>
    );
};

export default Contact;