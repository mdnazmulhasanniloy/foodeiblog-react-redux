import React from 'react';

const Subscribe = () => {
    return (
        <section className='w-[50%] mx-auto mt-10'>
            <div className="flex flex-col">
                <div className="w-full flex justify-center items-end">
                    <h3 className='text-4xl font-bold'>Subscribe to our Newsletter</h3> 
                    <div className="h-2 w-2 bg-yellow-400"></div>
                </div>
                <p className='text-lg text-center text-gray-500 mt-4'>
                    A  small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
                <div className="mt-4 mx-auto">
                    <div className="form-control">
                        <label className="label"> 
                        </label>
                        <label className="input-group">
                            <input type="text" 
                                   placeholder="Enter the email address" 
                                   className="input input-bordered" />
                            <span className='bg-black text-white hover:cursor-pointer'>Subscribe</span>
                        </label>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Subscribe;