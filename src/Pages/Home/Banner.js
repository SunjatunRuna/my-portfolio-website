import React from 'react';
import img from '../images/istockphoto-1224664031-612x612-removebg-preview.png'

const Banner = () => {
    return (
        <div class="py-32">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-32">
                <div className='my-32'>
                    <h1 class="text-5xl font-bold">Full Stack Web Developer</h1>
                    <p class="py-6 text-justify">Hey! This is Sunjatun Ahmed Runa. My expertise fields are as follows- *Web Design & Development. *HTML5, CSS3, BootStrap, Tailwind CSS, JavaScript, React JS, Node Js & MongoDB.</p>
                    <div class="avatar placeholder">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <i class="fa-brands fa-facebook-f"></i>
                        </div>
                    </div>
                    <div class="avatar placeholder mx-4">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <div class="avatar placeholder">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <div>
                <img src={img} />
                </div>
            </div>
        </div>
    );
};

export default Banner;