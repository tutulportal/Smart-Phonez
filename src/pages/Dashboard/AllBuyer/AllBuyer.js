import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import UseTitle from '../../../hooks/useTitle';
import SingleBuyerRow from './SingleBuyerRow';

const AllBuyer = () => {
    UseTitle('All Buyers');
    const [currentState, setCurrentState] = useState(false);
    const [buyers, setBuyers] = useState([{}]);
    useEffect( () => {
        fetch('https://smart-phonez-server.vercel.app/users/buyers')
        .then(res => res.json())
        .then(data => setBuyers(data))
    }, [currentState])

    const deleteSuccessToast = () => {
        toast.success('User Deleted Successfully!', {
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
        toast.error("Can't Delete User, Something Wrong!", {
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

    const handleDeleteBuyers = (id) => {
        const confirm = window.confirm('Are you sure you want to delete this user?');
        
        if(confirm){
            fetch(`https://smart-phonez-server.vercel.app/users/delete/${id}`, {
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
        }else{
            
        }
    }

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
                                buyers.map((buyer, i) => <SingleBuyerRow key={i+1} buyer={buyer} i={i} handleDeleteBuyers={handleDeleteBuyers}></SingleBuyerRow> )
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