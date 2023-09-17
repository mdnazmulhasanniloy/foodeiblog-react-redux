import React from 'react';
import bg_2  from '../../../Assets/Carousel_Image/bg_2.jpg';      
import Card from '../../../Components/Card';

const HolidaySeasonsRecipes = () => {
    const post = [1,2]
    const categories = [1,2,3]
    return (
        <div className='w-full my-10'>
            <div className="flex items-end gap-2">
                <h3 className='text-4xl font-bold '>Holiday Seasons Recipes</h3> 
                <div className="h-2 w-2 bg-yellow-400"></div>
            </div>

            <div className="flex flex-col md:flex-row mt-10 gap-10 md:gap-5">
                <div className="left w-full md:w-[70%]">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
                        {
                            post.map((item, index) => <Card bg_2={bg_2} key={index} />)
                        }    
                    </div> 
                </div>


                <div className="right w-full md:w-[30%] -mt-5">
                    <div className="title mb-5 text-3xl font-bold">Categories</div>
                    <div className="grid grid-cols-1 w-11/12 mx-auto gap-5">
                        {
                            categories.map((item, index) =><div className="relative h-[140px]" key={index}>
                                <img src={bg_2} className="w-full h-full object-cover" alt="" />
                                <div className="w-full h-full bg-[#00000041] absolute top-0 left-0 z-1 "></div>
                                <div className="absolute top-[40%] left-[40%]">
                                    <div className="title text-2xl font-bold text-white text-center">Foods</div>
                                </div>
                            </div>)
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HolidaySeasonsRecipes;