import React from 'react';
import Particles from 'react-tsparticles';
import img from '../images/istockphoto-1224664031-612x612-removebg-preview.png'

const Banner = () => {
    return (
        <div class="grid justify-items-center py-32 bg-slate-900">
            <div className='my-32 text-white  max-w-xl text-center'>
                <h1 class="text-5xl font-bold">Full Stack <span>Web Developer</span></h1>
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