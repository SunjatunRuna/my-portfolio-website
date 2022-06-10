import React from 'react';
import Particles from 'react-tsparticles';
import img from '../images/istockphoto-1224664031-612x612-removebg-preview.png'

const Banner = () => {
    return (
        <div class="py-32" style={{backgroundImage: 'url(https://wallpapertops.com/walldb/original/0/1/b/465102.jpg)', backgroundSize: 'cover'}}>
            <div class="max-w-xl mx-32">
                <div className='my-32 text-white'>
                    <h1 class="text-5xl font-bold">Full Stack <span>Web Developer</span></h1>
                    <p class="py-6 text-justify text-slate-500">Hey! This is Sunjatun Ahmed Runa. My expertise fields are as follows- *Web Design & Development. *HTML5, CSS3, BootStrap, Tailwind CSS, JavaScript, React JS, Node Js & MongoDB.</p>
                    <div class="avatar placeholder">
                        <div class="outline outline-gray-100 outline-1 rounded-full w-8">
                        <i class="fa-brands fa-facebook-f"></i>
                        </div>
                    </div>
                    <div class="avatar placeholder mx-4">
                        <div class="outline outline-gray-100 outline-1 rounded-full w-8">
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <div class="avatar placeholder">
                        <div class="outline outline-gray-100 outline-1 rounded-full w-8">
                        <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                {/* <div>
                <img src={img} />
                </div> */}
            </div>
            <Particles></Particles>
        </div>
    );
};

export default Banner;