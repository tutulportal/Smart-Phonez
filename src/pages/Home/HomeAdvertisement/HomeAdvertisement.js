import React from 'react';
import SingleProduct from '../../../components/SingleProduct/SingleProduct';

const HomeAdvertisement = () => {
    return (
        <div className='w-100'>
            <div className="mx-auto max-w-7xl pt-4 pb-8">
                <h1 className="text-secondary text-left font-light tracking-wider pb-4 pt-6 px-4 md:px-0 lg:px-0 text-2xl uppercase">- Recently Arrived</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-4 lg:px-0 md:px-0 gap-6">

                    <SingleProduct></SingleProduct>
                    <SingleProduct></SingleProduct>
                    <SingleProduct></SingleProduct>
                    <SingleProduct></SingleProduct>
                    <SingleProduct></SingleProduct>
                    <SingleProduct></SingleProduct>

                </div>
            </div>
        </div>
    );
};

export default HomeAdvertisement;