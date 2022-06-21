import React from 'react';
import Particles from 'react-tsparticles';
import img from '../images/istockphoto-1224664031-612x612-removebg-preview.png';
import gif from '../images/605609942900a56b7d9547ee_animation_500_kmhu8z1q.gif';

const Banner = () => {
    return (
        <div class="grid justify-items-center py-20 bg-slate-900">
            <div className='my-32 text-white  max-w-xl text-center'>
                <div className='avatar placeholder mb-6'>
                    <div className='rounded-full w-32'>
                    <img src={gif} className='max-w-sm' />
                    </div>
                </div>
                <h1 class="text-3xl font-bold">Full Stack <span className='text-rose-600 uppercase'>Web Developer</span></h1>
                <p class="py-6 text-center text-gray-300">Hey! This is Sunjatun Ahmed Runa. My expertise fields are as follows- *Web Design & Development. *HTML5, CSS3, BootStrap, Tailwind CSS, JavaScript, React JS, Node Js & MongoDB.</p>
                <div class="avatar placeholder">
                    <div class="bg-sky-500 rounded-full w-8">
                        <i class="fa-brands fa-facebook-f"></i>
                    </div>
                </div>
                <div class="avatar placeholder mx-4">
                    <div class="bg-white rounded-full w-8">
                        <i class="fa-brands fa-instagram text-pink-700"></i>
                    </div>
                </div>
                <div class="avatar placeholder">
                    <div class="bg-sky-700 rounded-full w-8">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
            {/* <div class="max-w-xl mx-32">
                
                <div>
                <img src={img} />
                </div>
            </div> */}
            <Particles></Particles>
        </div>
    );
};

export default Banner;