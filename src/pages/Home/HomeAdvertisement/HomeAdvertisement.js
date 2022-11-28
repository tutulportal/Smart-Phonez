import React, { useEffect, useState } from 'react';
import SingleProduct from '../../../components/SingleProduct/SingleProduct';

const HomeAdvertisement = () => {

    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch(`https://smart-phonez-server.vercel.app/ad-products/1`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='w-100'>
            {
                products.length > 0 ? <div className="mx-auto max-w-7xl pt-4 pb-8">
                <h1 className="text-secondary text-left font-light tracking-wider pb-4 pt-6 px-4 md:px-0 lg:px-0 text-2xl uppercase">- Recently Arrived & Advertised</h1>
                {
                    products.length > 0 ? <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-4 lg:px-0 md:px-0 gap-6">

                    {
                        products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                    }
                    

                </div> : <div>
                    <h2 className='text-sm text-gray-600'>No Advertisement Now!</h2>
                </div>
                }
                
            </div> : <></>
            }
            
        </div>
    );
};

export default HomeAdvertisement;