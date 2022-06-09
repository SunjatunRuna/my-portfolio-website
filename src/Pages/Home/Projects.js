import React from 'react';
import img from '../images/Capture2.PNG'
import img2 from '../images/Capture.PNG'
import img3 from '../images/Capture3.PNG'

const Projects = () => {
    return (
        <div className='px-32'>
            <h3 className='text-3xl divider max-w-sm'>Portfolio</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 my-24'>
                <div>
                    <img src={img} alt="" className='h-56' />
                    <a href="https://aquamarine-seahorse-d9833f.netlify.app"><button className='w-full btn my-8'>Live Demo</button></a>
                    
                </div>
                <div>
                    <img src={img2} alt="" className='h-56'/>
                    <a href="https://service-provider-auth.web.app"><button className='w-full btn my-8'>Live Demo</button></a>
                </div>
                <div>
                    <img src={img3} alt="" className='h-56' />
                    <a href="https://confident-turing-4a9e1f.netlify.app"><button className='w-full btn my-8'>Live Demo</button></a>
                </div>
            </div>
        </div>
    );
};

export default Projects;