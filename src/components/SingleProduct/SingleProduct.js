import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../contexts/AuthProvider';

const SingleProduct = ({product}) => {
    const {_id, categoryId, location, oldPrice, picture, postedOn, productName, sellerName, status, usedPrice, verified, yearsOfUse} = product;
    const {user} = useContext(AuthContext);
    return (
        <div className="p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img src={picture} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">iPhone | {sellerName} {verified > 0 ? <FontAwesomeIcon title='Verified' className='text-success' icon={faCircleCheck}></FontAwesomeIcon> : <></>}</span>
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-white-500">{postedOn}</span>
                <h2 className="text-xl font-semibold tracking-wide">{productName}</h2>
            </div>
            <p className="dark:text-gray-100">Location: {location}</p>
            <p className="dark:text-gray-100">Condition: {yearsOfUse} Years Used</p>
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
                            <form className="card-body">

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
                                    <input type="text" placeholder="Mobile" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Meeting Location</span>
                                    </label>
                                    <input type="text" placeholder="location" className="input input-bordered" />
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
                                
                                <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </> : <Link to='/login' className='btn btn-primary w-full mt-2'>Login to Get</Link>
            }

        </div>
    );
};

export default SingleProduct;