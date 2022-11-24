import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className="relative overflow-hidden custom-z-index-2">
            <div className="bg-white pt-10 pb-14 sm:pt-16 lg:pt-2 lg:pb-4">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="flex flex-row justify-between items-center">
                        <div className="mx-auto my-auto container w-8/12">
                            <div className="lg:py-4">
                                <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"><span className="block text-pink-500">Affordable Avocation </span><span className="block text-black">With Your Budget</span></h1>
                                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Get a dream phone with your budget. Used but New Condition and your hobby!</p>
                                <div className="mt-10 sm:mt-12 lg:block md:block flex flex-col items-center">
                                    <Link className='btn btn-primary mr-0 mb-2 md:mb-0 md:mr-2 lg:mb-0 lg:mr-2 w-full md:w-auto lg:w-auto' to='/'>Explore Used Phones</Link>
                                    <Link className='btn btn-ghost border-primary text-primary hover:btn-secondary w-full md:w-auto lg:w-auto' to='/'>Get Best Deal</Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 hidden lg:flex flex-col items-end w-4/12">
                            <img className="w-[18em]" src="https://user-images.githubusercontent.com/1884712/202186141-9f8a93e1-7743-459a-bc95-b1d826931624.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;