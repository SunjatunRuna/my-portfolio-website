import React from 'react';

const About = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 px-32 py-24'>
            <div className='text-right mx-12'>
                <h1 className='text-8xl uppercase text-gray-200'>About <br /> Me</h1>
            </div>
            <div className='text-justify'>
            This is Sunjatun Ahmed Runa. I am a CSE student. My expertise fields are as follows- *Web Design & Development. *HTML5, CSS3, BootStrap, Tailwind CSS, JavaScript, React JS, Node Js & MongoDB. I always try to come up with innovative ideas and imaginative solutions. And try to create something unique Why me? Client satisfaction and attractive work. As a perfectionist, I can ensure a high-quality work within the given time frame as well.. That's why your project is always in a safe hand of course. I hope you will enjoy and happy with my work. <br />
            <button className='btn my-6'>Download Resume</button>
            </div>
        </div>
    );
};

export default About;