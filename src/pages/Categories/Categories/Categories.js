import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from '../../../components/SingleProduct/SingleProduct';
import UseTitle from '../../../hooks/useTitle';

const Categories = () => {
    const categoryInfo = useLoaderData();

    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch(`http://localhost:5000/products/${categoryInfo[0]._id}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [categoryInfo])
    
    UseTitle(`${categoryInfo[0].categoryName}`);

    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl font-semibold text-primary text-center py-4'>Category: {categoryInfo[0].categoryName}</h2>
            
                {
                    products.length > 0 ? <>
                        <div className='w-100 grid grid-cols-3 gap-5 mt-4 mb-10'>
                            {
                                products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                            }
                        </div>
                    </> : <>
                        <div className='w-100 block text-center mt-4 mb-6'>
                            <h1 className='text-center text-red-600 font-semibold text-lg'>No Products Found!</h1>
                        </div>
                    </>
                }
                
        </div>
    );
};

export default Categories;