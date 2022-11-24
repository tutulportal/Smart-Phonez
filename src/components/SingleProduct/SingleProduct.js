import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = () => {
    return (
        <div className="p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">iPhone | TutulPortal</span>
                <h2 className="text-xl font-semibold tracking-wide">iPhone 13 Pro Max</h2>
            </div>
            <p className="dark:text-gray-100">Newly Arrived iPhone 13 Pro Max 8/128 Varient. Offical Papers, Warrenty and Box with this package.</p>
            <h2 className='text-white text-2xl'>Offical Rate: <del className='text-secondary font-semibold'>$999.00</del><br/> Used Rate: <span className='text-success font-semibold'>$599.00</span></h2>
            <Link className='btn btn-primary w-full mt-2'>Buy Now</Link>
        </div>
    );
};

export default SingleProduct;