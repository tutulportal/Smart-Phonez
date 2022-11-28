import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeCategories = () => {

    const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetch('https://smart-phonez-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div className='w-100'>
            <div className="mx-auto max-w-7xl rounded-lg bg-slate-200 py-6 mt-4 mb-8 shadow-lg border-white border-2">
                <h1 className='text-primary font-bold text-4xl text-center pb-4 pt-2'>Categories</h1>
                <div className="flex flex-row justify-around items-center flex-wrap gap-2 py-2">
                    {
                        categories.map(category => <Link key={category._id} to={`/categories/${category._id}`} className='btn'>{category.categoryName}</Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeCategories;