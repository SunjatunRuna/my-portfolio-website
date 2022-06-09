import React from 'react';
import About from './About';
import Background from './Background';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Background></Background>
            <Service></Service>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;