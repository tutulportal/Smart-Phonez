import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const RowMyProducts = ({product, i, handleDeleteMyProduct}) => {
    const {_id, postedOn, picture, productName, oldPrice, usedPrice, categoryId, categoryName, location, condition, yearsOfUse, status, advertise} = product;

    const advertisedSuccessToast1 = () => {
        toast.success('Product Advertised Successfully!', {
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

    const advertisedSuccessToast0 = () => {
        toast.success('Your Product Deadvertised!', {
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

    const statusSuccessToast0 = () => {
        toast.success('product Sold Out!', {
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

    const statusSuccessToast1 = () => {
        toast.success('Now Product Available!', {
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

    const nonAdvertisedToast = () => {
        toast.error("Something Wrong!", {
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

    const nonStatusToast = () => {
        toast.error("Something Wrong!", {
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

    const handleAdvertiseAction = (e) => {
       if(e.target.getAttribute('advertised') === '0'){
            e.target.setAttribute('advertised', '1');
            updateAdversise('1');
       }else{
            e.target.setAttribute('advertised', '0');
            updateAdversise('0');
       }
       
    }

    const handleStatusAction = (e) => {
        if(e.target.getAttribute('status') === 'sold-out'){
            e.target.setAttribute('status', 'available');
            updateStatus('available');
        }else{
            e.target.setAttribute('status', 'sold-out');
            updateStatus('sold-out');
        }
    }

    const updateAdversise = (advertise) => {
        fetch(`https://smart-phonez-server.vercel.app/update-product/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({advertise})
        })
        .then(res => res.json())
        .then(data => {
            if(data.message === 'updated'){
                if(advertise === '1'){
                    advertisedSuccessToast1()
                }else{
                    advertisedSuccessToast0()
                }
            }else{
                nonAdvertisedToast()
            }
        })
    }

    const updateStatus = (status) => {
        fetch(`https://smart-phonez-server.vercel.app/update-product/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({status})
        })
        .then(res => res.json())
        .then(data => {
            if(data.message === 'updated'){
                if(status === 'sold-out'){
                    statusSuccessToast0()
                }else{
                    statusSuccessToast1()
                }
            }else{
                nonStatusToast()
            }
        })
    }

    return (
        <tr>
            <td>{i+1}</td>
            <td>{postedOn}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={picture} alt={picture} />
                    </div>
                    </div>
                </div>
            </td>
            <td>{productName}</td>
            <td>Brand New: ${oldPrice} <br /> Used: ${usedPrice}</td>
            <td><Link className='font-semibold text-primary' to={`/categories/${categoryId}`}>{categoryName}</Link></td>
            <td>{condition}, {yearsOfUse} Years Used</td>
            {/* handleStatusAction */}
            {
                status === 'sold-out' ? <td><input type="checkbox" name='advertiseBtn' className="toggle toggle-error" status='sold-out' defaultChecked onClick={handleStatusAction} /></td> : <td><input type="checkbox" name='advertiseBtn' className="toggle toggle-error" status='available' onClick={handleStatusAction} /></td>
            }
            <td>{location}</td>
            {
                advertise > 0 ? <td><input type="checkbox" name='advertiseBtn' className="toggle toggle-success" advertised={advertise} defaultChecked onClick={handleAdvertiseAction} /></td> : <td><input type="checkbox" name='advertiseBtn' className="toggle toggle-success" advertised={advertise} onClick={handleAdvertiseAction} /></td>
            }

            <td>
                <button className="btn btn-circle btn-error btn-sm btn-outline" onClick={() => handleDeleteMyProduct(_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default RowMyProducts;