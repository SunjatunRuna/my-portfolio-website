import React from 'react';

const Background = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 px-32 my-32'>
            <div>
                <h3 className='border border-gray-100 p-8 uppercase text-center text-gray-400 text-3xl font-bold'>Education</h3>
                <div>
                    Bachelor of Science in Computer Engineering  <br />
                    Britannia University, Cumilla <br />
                    6th Semester Running
                </div>
            </div>
            <div>
                <h3 className='border border-gray-100 p-8 uppercase text-center text-gray-400 text-3xl font-bold'>Experience</h3>
                <div>
                    Complete Web Development Course at <a href="https://web.programming-hero.com/">Programming Hero</a>
                    <h5>Have Good Knowledge: </h5>
                    <div className='grid grid-cols-3 gap-6 my-12'>
                        <div>
                            <div className="radial-progress text-primary font-bold" style={{ "--value": 100, "--size": "5rem", "--thickness": "0.5rem" }}>100%</div>
                            <h3 className='text-center uppercase my-6 font-bold text-sm text-primary'>html</h3>
                        </div>
                        <div>
                            <div className="radial-progress text-primary font-bold" style={{ "--value": 80, "--size": "5rem", "--thickness": "0.5rem" }}>80%</div>
                            <h3 className='text-center uppercase my-6 font-bold text-sm text-primary'>css</h3>
                        </div>
                        <div>
                            <div className="radial-progress text-primary font-bold" style={{ "--value": 90, "--size": "5rem", "--thickness": "0.5rem" }}>90%</div>
                            <h3 className='text-center uppercase my-6 font-bold text-sm text-primary'>bootstrap</h3>
                        </div>
                        <div>
                            <div className="radial-progress text-primary font-bold" style={{ "--value": 70, "--size": "5rem", "--thickness": "0.5rem" }}>70%</div>
                            <h3 className='text-center uppercase my-6 font-bold text-sm text-primary'>tailwind</h3>
                        </div>
                        <div>
                            <div className="radial-progress text-primary font-bold" style={{ "--value": 65, "--size": "5rem", "--thickness": "0.5rem" }}>65%</div>
                            <h3 className='text-center uppercase my-6 font-bold text-sm text-primary'>JavaScript</h3>
                        </div>
                        <div>
                            <div className="radial-progress text-primary font-bold" style={{ "--value": 60, "--size": "5rem", "--thickness": "0.5rem" }}>60%</div>
                            <h3 className='text-center uppercase my-6 font-bold text-sm text-primary'>react</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Background;