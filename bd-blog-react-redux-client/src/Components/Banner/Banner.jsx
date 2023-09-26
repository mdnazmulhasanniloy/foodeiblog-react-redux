import React from 'react';

const Banner = ({img, location, title}) => {
    return (
        <div className='w-full h-[80vh] relative'>
            <img src={img} alt={title} className='h-full w-full' />
            <div className="h-full w-full bg-[#00000041] absolute top-0 left-0 z-1"></div>
            <div className="absolute top-[40%] left-[40%] z-2">

            </div>
            
        </div>
    );
};

export default Banner;