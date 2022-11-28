import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import RowMyProducts from './RowMyProducts';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const [products, setProducts] = useState([{}]);
    useEffect( () => {
        fetch(`http://localhost:5000/find-products/${user.email}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [user.email])

    const handleDeleteMyProduct = id => {
        const confirm = window.confirm('Are you sure you want to delete this product?');
        if(confirm){
            console.log(id)
        }else{
            
        }
    }

    return (
        <div className='w-100'>
            <div className="container mx-auto">
                <h1 className='text-primary text-2xl font-semibold text-center py-4'>All Products</h1>
                <div className="overflow-x-auto mt-4 mb-10">
                    <table className="table table-zebra w-full">
                        <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Date & Time</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Category</th>
                            <th>Condition</th>
                            <th>Sold Out</th>
                            <th>Location</th>
                            <th>Advertise</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                products.length > 0 ? <>
                                    {
                                        products.map((product, i) => <RowMyProducts key={i+1} product={product} i={i} handleDeleteMyProduct={handleDeleteMyProduct}></RowMyProducts>)
                                    }

                                </> : <>
                                    <tr>
                                        <td colSpan="11" className='text-error font-semibold text-sm text-center'>No Data Found</td>
                                    </tr>
                                </>
                            }
                        
                        
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;