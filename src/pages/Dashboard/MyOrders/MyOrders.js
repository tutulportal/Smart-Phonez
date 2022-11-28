import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import UseTitle from '../../../hooks/useTitle';
import SingleOrderRow from './SingleOrderRow';

const MyOrders = () => {
    UseTitle('My Orders');
    const {user} = useContext(AuthContext);
    const [currentState, setCurrentState] = useState(false);
    const [myOrders, setMyOrders] = useState([{_id: ''}]);
    useEffect( () => {
        fetch(`http://localhost:5000/bookings/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [user.email, currentState])

    const deleteSuccessToast = () => {
        toast.success('Booking Successfully Removed', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    const deleteFailedToast = () => {
        toast.error('Failed to remove booking!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    const handleDeleteBooking = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                setCurrentState(!currentState);
                deleteSuccessToast();
            }else{
                deleteFailedToast();
            }
        })
    }
    
    return (
        <div className='w-100'>
            <div className="container mx-auto">
                <h1 className='text-primary text-2xl font-semibold text-center py-4'>My All Orders</h1>
                <div className="overflow-x-auto mt-4 mb-10">
                    <table className="table table-zebra w-full">
                        <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            myOrders.length > 0 ? <>
                                {
                                    myOrders.map((myOrder, i) => <SingleOrderRow key={myOrder._id} myOrder={myOrder} handleDeleteBooking={handleDeleteBooking} i={i}></SingleOrderRow>)
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

export default MyOrders;