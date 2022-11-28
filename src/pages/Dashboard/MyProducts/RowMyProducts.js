import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const RowMyProducts = ({product, i}) => {
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

    const handleAdvertiseAction = (e) => {
       if(e.target.getAttribute('advertised') === '0'){
            e.target.setAttribute('advertised', '1');
            updateAdversise('1');
       }else{
            e.target.setAttribute('advertised', '0');
            updateAdversise('0');
       }
       
    }

    const updateAdversise = (advertise) => {
        fetch(`http://localhost:5000/update-product/${_id}`, {
            method: "PATCH",
            headers: {"content-type": "application/json"},
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
            <td title='Click on button to change Status'><button className='btn btn-success btn-sm'>{status}</button></td>
            <td>{location}</td>
            {
                advertise > 0 ? <td><input type="checkbox" name='advertiseBtn' className="toggle toggle-success" advertised={advertise} defaultChecked onClick={handleAdvertiseAction} /></td> : <td><input type="checkbox" name='advertiseBtn' className="toggle toggle-success" advertised={advertise} onClick={handleAdvertiseAction} /></td>
            }

            <td>
                <button className="btn btn-circle btn-error btn-sm btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default RowMyProducts;