import React from 'react';
import { Link } from 'react-router-dom';

const HomeCategories = () => {
    return (
        <div className='w-100'>
            <div className="mx-auto max-w-7xl rounded-lg bg-slate-200 py-6 mt-4 mb-8 shadow-lg border border-white border-2">
                <h1 className='text-primary font-bold text-4xl text-center pb-4 pt-2'>Categories</h1>
                <div className="flex flex-row justify-around items-center flex-wrap gap-2 py-2">
                    <Link className='btn'>iPhone</Link>
                    <Link className='btn'>Samsung</Link>
                    <Link className='btn'>Xaiomi</Link>
                    <Link className='btn'>Realme</Link>
                    <Link className='btn'>OnePlus</Link>
                    <Link className='btn'>Vivo</Link>
                    <Link className='btn'>Oppo</Link>
                    <Link className='btn'>Huawei</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCategories;