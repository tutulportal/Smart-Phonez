import React from 'react';

const SingleSellerRow = ({seller, i}) => {
    const {_id, name, email, verified, mobile} = seller;
    return (
        <tr>
            <td>{i+1}</td>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td></td>
            <td></td>
        </tr>
    );
};

export default SingleSellerRow;