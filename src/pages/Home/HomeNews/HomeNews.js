import React from 'react';
import { Link } from 'react-router-dom';

const HomeNews = () => {
    return (
        <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100 mb-8 rounded-lg">
            <h1 className="text-white text-left font-light tracking-wider pb-4 pt-2 px-4 md:px-0 lg:px-0 text-2xl uppercase">- News</h1>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"  style={{
                    backgroundImage: `url("https://wallpapercave.com/wp/wp5297415.jpg")`
                }}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <Link rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">iPhone</Link>
                        <div className="flex flex-col justify-start text-center dark:text-gray-100">
                            <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                            <span className="leading-none uppercase">Aug</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <Link rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-100"> This week iphone 14 Pro Max Has been realeased</Link>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" style={{
                    backgroundImage: `url("https://wallpapercave.com/wp/wp5297415.jpg")`
                }}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <Link rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">Xaiomi</Link>
                        <div className="flex flex-col justify-start text-center dark:text-gray-100">
                            <span className="text-3xl font-semibold leading-none tracking-wide">01</span>
                            <span className="leading-none uppercase">Aug</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <Link rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-100">We geting new snapdragon processor sooner.</Link>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" style={{
                    backgroundImage: `url("https://wallpapercave.com/wp/wp5297415.jpg")`
                }}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <Link rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">Realme</Link>
                        <div className="flex flex-col justify-start text-center dark:text-gray-100">
                            <span className="text-3xl font-semibold leading-none tracking-wide">28</span>
                            <span className="leading-none uppercase">Jul</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <Link rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-100">Realme is now budget friendly to all level users!</Link>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" style={{
                    backgroundImage: `url("https://wallpapercave.com/wp/wp5297415.jpg")`
                }}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <Link rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">Xaiomi</Link>
                        <div className="flex flex-col justify-start text-center dark:text-gray-100">
                            <span className="text-3xl font-semibold leading-none tracking-wide">19</span>
                            <span className="leading-none uppercase">Jul</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <Link rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-100">MI is sponsoring PUBG Mobile Battleground gaming competetion.</Link>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default HomeNews;