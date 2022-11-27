import React from 'react';
import { Link } from 'react-router-dom';

const SingleOrderRow = ({myOrder, handleDeleteBooking, i}) => {
    const {_id, categoryId, categoryName, meetingLocation, productId, productName, userEmail, userMobile, userName, productPrice} = myOrder;
    return (
        <tr>
            <td>{i+1}</td>
            <td>{productName}</td>
            <td>${productPrice}</td>
            <td><Link className='text-primary font-semibold' to={`/categories/${categoryId}`}>{categoryName}</Link></td>
            <td>{userName}</td>
            <td>{userEmail}</td>
            <td>{userMobile}</td>
            <td>{meetingLocation}</td>
            <td>
            <button className="btn btn-circle btn-error btn-sm btn-outline" onClick={() => handleDeleteBooking(_id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            </td>
        </tr>
    );
};

export default SingleOrderRow;