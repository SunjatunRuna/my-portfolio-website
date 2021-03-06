import React from 'react';

const About = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 px-32 py-32'>
            <div className='text-right mx-12' style={{ }}>
                <h1 className='text-8xl uppercase text-gray-700'>About <br /> Me</h1>
            </div>
            <div className='text-justify text-gray-300 bg-slate-800 border border-slate-700 p-10 rounded-xl -mt-24'>
            This is Sunjatun Ahmed Runa. I am a CSE student. I always try to come up with innovative ideas and imaginative solutions. And try to create something unique Why me? Client satisfaction and attractive work. As a perfectionist, I can ensure a high-quality work within the given time frame as well.. That's why your project is always in a safe hand of course. I hope you will enjoy and happy with my work. <br />
            <a href="https://drive.google.com/file/d/1L7joOdozUcNnQwEB1hewP24wa1eN9sol/view?usp=sharing" download><button className='btn my-6 bg-rose-600 border-0'>Download Resume</button></a>
            </div>
        </div>
    );
};

export default About;