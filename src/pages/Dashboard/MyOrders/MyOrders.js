import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const [myOrders, setMyOrders] = useState([{}]);
    useEffect( () => {
        fetch(`http://localhost:5000/bookings/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [user.email])

    console.log(myOrders);

    return (
        <div className='w-100'>
            <div className="container mx-auto">
                <h1 className='text-primary text-2xl font-semibold text-center py-4'>My All Orders</h1>
                <div className="overflow-x-auto mt-4 mb-10">
                    <table className="table table-zebra w-full">
                        <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Category</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Location</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;