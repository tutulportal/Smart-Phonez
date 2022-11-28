import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import UseTitle from '../../../hooks/useTitle';

const AddProduct = () => {

    UseTitle('Add Product');

    const currentMoment = moment().format('LLL');

    const navigate = useNavigate();

    const {user} = useContext(AuthContext);

    // load all districs
    const [districs, setDistrics] = useState([{}]);
    useEffect( () => {
        fetch(`https://bdapis.herokuapp.com/api/v1.1/districts`)
        .then(res => res.json())
        .then(data => setDistrics(data.data))
    }, [])

    // load all categories
    const [categories, setCategories] = useState([{}]);
    useEffect( () => {
        fetch(`https://smart-phonez-server.vercel.app/categories`)
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    // load user data from db
    const [dbUser, setDbUser] = useState([{}]);
    useEffect( () => {
        fetch(`https://smart-phonez-server.vercel.app/users/${user.email}`)
        .then(res => res.json())
        .then(data => setDbUser(data))
    }, [user.email])

    let verifiedUser = "false";
    if(dbUser.verified === 'true'){
        verifiedUser = "true";
    }else{
        verifiedUser = "false";
    } 

    const addProductSuccessToast = () => {
        toast.success('Product Added Successfully', {
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

    const addProductFailedToast = () => {
        toast.error("Can't Add Product, something wrong!", {
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

    const handleAddNewProduct = e => {
        e.preventDefault();
        const formData = e.target;
        const getCategory = categories.find(e => e._id === formData.category.value);
        const categoryName = getCategory.categoryName;
        const product = {
            "productName": formData.productName.value,
            "oldPrice": formData.oldPrice.value,
            "usedPrice": formData.usedPrice.value,
            "categoryId": formData.category.value,
            "categoryName": categoryName,
            "description": formData.description.value,
            "picture": formData.picture.value,
            "location": formData.location.value,
            "condition": formData.condition.value,
            "yearsOfUse": formData.yearsOfUse.value,
            "postedOn": currentMoment,
            "sellerName": user.displayName,
            "verified": verifiedUser,
            "advertise": "0",
            "status": "available",
            "email": user.email
        }

        fetch('https://smart-phonez-server.vercel.app/add-product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            e.target.reset();
            addProductSuccessToast();
            navigate('/dashboard/my-products');
        })
        .catch(error => {
            console.error(error);
            addProductFailedToast();
        })

    }
    return (
        <div className='w-100'>
            <h1 className='text-primary text-2xl font-semibold text-center pt-4'>Add Product</h1>
            <div className="card flex-shrink-0 container mx-auto pb-10 pt-2 bg-base-100">
                <form className="card-body" onSubmit={handleAddNewProduct}> 
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" required name='productName' placeholder="Product name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input type="number" required name="oldPrice" placeholder="brand new price" className="input input-bordered mb-2" />
                        <input type="number" required name="usedPrice" placeholder="used price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <select className='input input-bordered' name="condition" required>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <input type="text" required placeholder="+8801777777777" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <select className='input input-bordered' required name='location'>
                            {
                                districs.map((distric, i) => <option key={i+1} value={distric.district}>{distric.district}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Category</span>
                        </label>
                        <select className='input input-bordered' required name='category'>
                            {
                                categories.map((category, i) => <option key={i+1} value={category._id}>{category.categoryName}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea placeholder='About Product' name="description" required className='textarea textarea-bordered'></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <input type="text" name="picture" required placeholder="image link" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Years Of Use</span>
                        </label>
                        <input type="number" name='yearsOfUse' required placeholder="1" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value='Submit' className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;