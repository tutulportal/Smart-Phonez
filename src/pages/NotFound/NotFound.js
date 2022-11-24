import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-full h-[100vh] bg-yellow-100 flex flex-col items-center justify-center'>
            <h2 className='text-5xl text-danger font-bold'>404 Page not found!</h2>
            <Link className='btn btn-primary mt-6' to='/'>Go to Home</Link>
        </div>
    );
};

export default NotFound;