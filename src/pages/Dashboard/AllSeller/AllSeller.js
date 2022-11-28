import React, { useEffect, useState } from 'react';
import SingleSellerRow from './SingleSellerRow';

const AllSeller = () => {

    const [sellers, setSellers] = useState([{}]);
    useEffect( () => {
        fetch('http://localhost:5000/users/sellers')
        .then(res => res.json())
        .then(data => setSellers(data))
    }, [])

    return (
        <div className='w-100'>
            <div className="container mx-auto">
                <h1 className='text-primary text-2xl font-semibold text-center py-4'>All Sellers</h1>
            </div>

            <div className="overflow-x-auto mt-4 mb-10">
                <table className="table table-zebra w-full">
                    <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Verification</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.length > 0 ? <>
                                {
                                    sellers.map((seller, i) => <SingleSellerRow key={i+1} seller={seller} i={i}></SingleSellerRow> )
                                }
                            </> :
                                <tr>
                                    <td colSpan="6" className='text-error font-semibold text-sm text-center'>No Data Found</td>
                                </tr>
                            
                        }
                    
                    
                    
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllSeller;