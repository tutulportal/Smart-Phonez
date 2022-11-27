import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {

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
        fetch(`http://localhost:5000/categories`)
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    // load user data from db
    const [dbUser, setDbUser] = useState([{}]);
    useEffect( () => {
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setDbUser(data))
    }, [user.email])

    const handleAddNewProduct = e => {
        e.preventDefault();
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
                        <input type="text" placeholder="Product name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input type="number" placeholder="brand new price" className="input input-bordered mb-2" />
                        <input type="number" placeholder="used price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <select className='input input-bordered'>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <input type="text" placeholder="+8801777777777" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <select className='input input-bordered'>
                            {
                                districs.map((distric, i) => <option key={i+1} value={distric.district}>{distric.district}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Category</span>
                        </label>
                        <select className='input input-bordered'>
                            {
                                categories.map((category, i) => <option key={i+1} value={category.categoryName}>{category.categoryName}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="" placeholder='About Product' className='textarea textarea-bordered'></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <input type="text" placeholder="image link" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Years Of Use</span>
                        </label>
                        <input type="number" placeholder="1" className="input input-bordered" />
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