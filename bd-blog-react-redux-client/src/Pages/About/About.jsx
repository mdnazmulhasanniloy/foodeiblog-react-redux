import React from 'react';
import AboutStories from '../../Components/AboutStories/AboutStories';
import Subscribe from '../../Components/Subscribe/Subscribe';
import Banner from '../../Components/Banner/Banner';
import { useLocation } from 'react-router-dom';

const About = () => {
    const location = useLocation()
    console.log("first", location)
    const img = "https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?t=st=1695217169~exp=1695217769~hmac=93fb4083a0b9fa6fe06590b2e90ba0ba8207a8b45e46f9d3c1fbb15da500f93c"
    return (
        <section className='mt-10'>
            <Banner img={img} title={"ABOUT US"}  />
            <AboutStories />
            <Subscribe />
            
        </section>
    );
};

export default About;