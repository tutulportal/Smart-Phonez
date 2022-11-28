import React from 'react';
import { toast } from 'react-toastify';

const SingleSellerRow = ({seller, i, handleDeleteSellers}) => {
    const {_id, name, email, verified, mobile} = seller;

    const verifySuccessToast0 = () => {
        toast.success('User Verified Successfully!', {
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

    const verifySuccessToast1 = () => {
        toast.success('User Unverified!', {
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

    const nonVerifyToast = () => {
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

    const handleVerifyAction = (e) => {
        if(e.target.getAttribute('verified') === 'false'){
            e.target.setAttribute('verified', 'true');
            updateVerfication('true');
        }else{
            e.target.setAttribute('verified', 'false');
            updateVerfication('false');
        }
    }
    

    const updateVerfication = (verified) => {
        fetch(`https://smart-phonez-server.vercel.app/users/update/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({verified})
        })
        .then(res => res.json())
        .then(data => {
            if(data.message === 'updated'){
                if(verified === 'true'){
                    verifySuccessToast0()
                }else{
                    verifySuccessToast1()
                }
            }else{
                nonVerifyToast()
            }
        })
    }

    return (
        <tr>
            <td>{i+1}</td>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            {
                verified === 'true' ? <td><input type="checkbox" name='advertiseBtn' className="toggle toggle-success" verified='true' defaultChecked onClick={handleVerifyAction} /></td> : <td><input type="checkbox" name='advertiseBtn' className="toggle toggle-success" verified='false' onClick={handleVerifyAction} /></td>
            }
            <td>
                <button className="btn btn-circle btn-error btn-sm btn-outline" onClick={() => handleDeleteSellers(_id)} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default SingleSellerRow;