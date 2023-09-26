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
        <div className='mt-5 relative'>
            <Slide /> 
            <RecentPost />
            <FeaturedPosts />
            <HolidaySeasonsRecipes />
            <AboutStories />
            <Subscribe /> 

            {/* <div className="">
                <div id="g_id_onload"
                    data-client_id="mdnajmulhasanniloy323@gmail.com"
                    data-context="use"
                    data-ux_mode="popup"
                    data-login_uri="http://localhost:3000/login"
                    data-nonce=""
                    data-auto_select="true"
                    data-itp_support="true">
                </div>

                <div class="g_id_signin"
                    data-type="standard"
                    data-shape="rectangular"
                    data-theme="filled_blue"
                    data-text="continue_with"
                    data-size="large"
                    data-logo_alignment="left"
                    data-width="300">
                </div>
            </div> */}
            
        </div>
    );
};

export default Home;