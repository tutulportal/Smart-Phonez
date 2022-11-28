import React from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../hooks/useTitle';
import noResult from '../../resources/no-results.png';

const NotFound = () => {
    UseTitle('404 Not Found')
    return (
        <section className="flex items-center h-[100vh] p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <div className="mb-8 text-center block">
                        <img src={noResult} alt="" className='w-[220px] inline-block' />
                    </div>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-400">I think you will find correct page from home page.</p>
                    <Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;