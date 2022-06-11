import React from 'react';
import html from '../images/512px-HTML5_logo_and_wordmark.svg.png';
import css from '../images/CSS3_logo_and_wordmark.svg.png';
import bootstrap from '../images/Bootstrap_logo.svg.png';
import tailwind from '../images/Tailwind_CSS_Logo.svg.png';
import JavaScript from '../images/javascript-2752148-2284965.png';
import react from '../images/React-icon.svg.png';
import nodejs from '../images/2560px-Node.js_logo.svg.png';
import mongodb from '../images/1024px-Antu_mongodb.svg.png';

const Skills = () => {
    return (
        <div className='bg-slate-800 py-12'>
            <div className='grid grid-cols-2 lg:grid-cols-8 justify-items-center gap mx-24'>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={html} />
                    </div>
                </div>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={css} />
                    </div>
                </div>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={bootstrap} />
                    </div>
                </div>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={tailwind} />
                    </div>
                </div>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={JavaScript} />
                    </div>
                </div>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={react} />
                    </div>
                </div>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={nodejs} />
                    </div>
                </div>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={mongodb} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;