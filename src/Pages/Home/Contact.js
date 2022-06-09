import React from 'react';

const Contact = () => {
    return (
        <div className='px-32 my-24'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mx-32 text-xl'>
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
            <div className='my-24 text-center'>
                <p className='my-6'>Any Query?</p>
                <form>
                    <input type="email" placeholder='email' className='border w-96'/><br />
                    <textarea name="" id="" rows="5" className='border w-96 my-6'></textarea><br />
                    <button className='btn w-96'>Send Message</button>
                </form>
            </div>       
        </div>
    );
};

export default Contact;