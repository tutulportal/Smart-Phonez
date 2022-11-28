import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-toastify';

const SingleProduct = ({product}) => {
    const {_id, categoryId, description, location, email, oldPrice, picture, postedOn, productName, sellerName, status, usedPrice, verified, yearsOfUse} = product;
    const {user} = useContext(AuthContext);

    const [userinfo, setUserInfo] = useState([{}]);
    useEffect( () => {
        fetch(`http://localhost:5000/users/${email}`)
        .then(res => res.json())
        .then(data => setUserInfo(data))
    }, [email])

    const [categoriName, setCategoryName] = useState('');
    useEffect( () => {
        fetch(`http://localhost:5000/categories/${categoryId}`)
        .then(res => res.json())
        .then(data => setCategoryName(data[0].categoryName))
    },[categoryId, categoriName])

    const submitSuccessToast = () => {
        toast.success('Successfully Booked', {
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

    const submitFailedToast = () => {
        toast.error('Already Booked!', {
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

    const handleBooking = (e) => {
        e.preventDefault();
        const theModalId = `bookModal${_id}`;
        const booking = {
            "productId": _id,
            "categoryId": categoryId,
            "categoryName": categoriName,
            "productName": productName,
            "productPrice": usedPrice,
            "picture": picture,
            "userEmail": user.email,
            "userName": user.displayName,
            "userMobile": e.target.mobile.value,
            "meetingLocation": e.target.meetingLocation.value
        }
            fetch('http://localhost:5000/booking', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.acknowledged){
                    document.getElementById(theModalId).checked = false;
                    submitSuccessToast();
                }else{
                    submitFailedToast();
                    document.getElementById(theModalId).checked = false;
                }
            })
        
    }

    // for limit the words
    function shorten(text,max) {
        return text && text.length > max ? text.slice(0,max).split(' ').slice(0, -1).join(' ') : text
    }

    const shortDesc = shorten(description, 200);

    return (
        <div className="p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img src={picture} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">iPhone | {sellerName} {userinfo[0].verified === "true" ? <FontAwesomeIcon title='Verified' className='text-success' icon={faCircleCheck}></FontAwesomeIcon> : <></>}</span>
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-white-500">{postedOn}</span>
                <h2 className="text-xl font-semibold tracking-wide">{productName}</h2>
            </div>
            <p className="dark:text-gray-100"><span className='font-bold'>Location:</span> {location}</p>
            <p className="dark:text-gray-100"><span className='font-bold'>Condition:</span> {yearsOfUse} Years Used</p>
            <p className='dark:text-gray-100'><span className='font-bold'>Description: </span>{shortDesc}...</p>
            <h2 className='text-white text-2xl'>Offical Rate: <del className='text-secondary font-semibold'>${oldPrice}</del><br/> Used Rate: <span className='text-success font-semibold'>${usedPrice}</span></h2>
            <p className='text-xl'>Status: <span className='text-secondary'>{status}</span></p>
            {
                user ? <>
                    <label htmlFor={`bookModal${_id}`} className="btn btn-primary w-full mt-2">Book Now</label>

                    <input type="checkbox" id={`bookModal${_id}`} className="modal-toggle" />
                    <div className="modal">
                    <div className="modal-box bg-white-600 text-black relative">
                        <label htmlFor={`bookModal${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold text-center">Book {productName} Now</h3>
                        <p className="py-4 text-center">Fill the form to book</p>
                        <div className="card flex-shrink-0 w-full bg-base-100">
                            <form className="card-body" onSubmit={handleBooking}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" disabled defaultValue={user.displayName} className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="name@email.com" disabled defaultValue={user.email} className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Mobile</span>
                                    </label>
                                    <input type="text" required name="mobile" placeholder="Mobile" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Meeting Location</span>
                                    </label>
                                    <input type="text" required name="meetingLocation" placeholder="location" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" placeholder="Product Name" disabled defaultValue={productName} className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" disabled defaultValue={usedPrice} className="input input-bordered" />
                                </div>
                                
                                <div className="form-control mt-6 modal-action">
                                <input type="submit" value="Submit" className='btn btn-primary' />
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>


                    {/* <a href="#my-modal-2" className="btn btn-primary w-full mt-2">Book Now</a>
                    <p></p>
                    <div className="modal" id="my-modal-2">
                    <div className="modal-box">
                        
                        <div className="modal-action">
                        <a href="#" className="btn">Book Now</a>
                        </div>
                    </div>
                    </div> */}

                </> : <Link to='/login' className='btn btn-primary w-full mt-2'>Login to Get</Link>
            }

        </div>
    );
};

export default SingleProduct;