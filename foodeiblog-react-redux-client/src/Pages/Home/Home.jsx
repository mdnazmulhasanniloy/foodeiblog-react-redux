import React, { useEffect } from 'react'; 
import Slide from './Slider/Slide';
import RecentPost from './RecentPost/Recent_Post';
import FeaturedPosts from './FeaturedPosts/FeaturedPosts';
import HolidaySeasonsRecipes from './HolidaySeasonsRecipes/HolidaySeasonsRecipes';
import AboutStories from '../../Components/AboutStories/AboutStories';
import Subscribe from '../../Components/Subscribe/Subscribe';
import loadBlogsData from '../../Redux/Thunk/FetchBlogs';
import { useDispatch } from 'react-redux';
import loadCategoriesData from '../../Redux/Thunk/FetchCategories';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadBlogsData())
        dispatch(loadCategoriesData())
    },[dispatch])
    return (
        <div className='mt-5'>
            <Slide /> 
            <RecentPost />
            <FeaturedPosts />
            <HolidaySeasonsRecipes />
            <AboutStories />
            <Subscribe /> 
            
        </div>
    );
};

export default Home;