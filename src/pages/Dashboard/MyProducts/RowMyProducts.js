import React from 'react';
import { Link } from 'react-router-dom';

const RowMyProducts = ({product, i}) => {
    const {postedOn, picture, productName, oldPrice, usedPrice, categoryId, categoryName, location, condition, yearsOfUse, status} = product;

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
            <td><button className='btn btn-primary btn-sm'>Advertise</button> <button className='btn btn-error btn-sm'>Delete</button></td>
        </tr>
    );
};

export default RowMyProducts;