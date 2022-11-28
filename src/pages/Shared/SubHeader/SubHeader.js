import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const SubHeader = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);
    const [userType, setUserType] = useState([
        {
            "userType": ''
        }
    ]);
    useEffect( () => {
        fetch(`https://smart-phonez-server.vercel.app/users/${user.email}`)
        .then(res => res.json())
        .then(data => setUserType(data))
    }, [user.email])

    const userRole = userType[0].userRole;

    return (
        <div className='w-100 bg-slate-200'>
            <div className="flex flex-row justify-center items-center flex-wrap">

                {
                    userRole === 'buyer' ? <>
                        <li className='list-none'><Link to='/dashboard/my-orders' className='mx-2 p-2 inline-block bg-slate-200 hover:bg-slate-300 text-black'>My Orders</Link></li>
                    </> : <></>
                }
                {
                    userRole === 'seller' ? <>
                        <li className='list-none'><Link to='/dashboard/my-orders' className='mx-2 p-2 inline-block bg-slate-200 hover:bg-slate-300 text-black'>My Orders</Link></li>
                        <li className='list-none'><Link to='/dashboard/add-product' className='mx-2 p-2 inline-block bg-slate-200 hover:bg-slate-300 text-black'>Add Product</Link></li>
                        <li className='list-none'><Link to='/dashboard/my-products' className='mx-2 p-2 inline-block bg-slate-200 hover:bg-slate-300 text-black'>My Products</Link></li>
                    </> : <></>
                }
                {
                    userRole === 'admin' ? <>
                        <li className='list-none'><Link to='/dashboard/my-orders' className='mx-2 p-2 inline-block bg-slate-200 hover:bg-slate-300 text-black'>My Orders</Link></li>
                        <li className='list-none'><Link to='/dashboard/add-product' className='mx-2 p-2 inline-block bg-slate-200 hover:bg-slate-300 text-black'>Add Product</Link></li>
                        <li className='list-none'><Link to='/dashboard/my-products' className='mx-2 p-2 inline-block bg-slate-200 hover:bg-slate-300 text-black'>My Products</Link></li>
                        <li className='list-none'><Link to='/dashboard/all-sellers' className='mx-2 p-2 inline-block bg-slate-200 hover:bg-slate-300 text-black'>All Sellers</Link></li>
                        <li className='list-none'><Link to='/dashboard/all-buyers' className='mx-2 p-2 inline-block bg-slate-200 hover:bg-slate-300 text-black'>All Buyers</Link></li>
                    </> : <></>
                }

            </div>
        </div>
    );
};

export default SubHeader;