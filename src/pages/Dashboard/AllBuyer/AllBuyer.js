import React, { useEffect, useState } from 'react';
import SingleBuyerRow from './SingleBuyerRow';

const AllBuyer = () => {

    const [buyers, setBuyers] = useState([{}]);
    useEffect( () => {
        fetch('http://localhost:5000/users/buyers')
        .then(res => res.json())
        .then(data => setBuyers(data))
    }, [])

    return (
        <div className='w-100'>
            <div className="container mx-auto">
                <h1 className='text-primary text-2xl font-semibold text-center py-4'>All Buyers</h1>
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
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        buyers.length > 0 ? <>
                            {
                                buyers.map((buyer, i) => <SingleBuyerRow key={i+1} buyer={buyer} i={i}></SingleBuyerRow> )
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

export default AllBuyer;