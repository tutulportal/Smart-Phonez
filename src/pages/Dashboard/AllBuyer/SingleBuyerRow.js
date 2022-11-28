import React from 'react';

const SingleBuyerRow = ({buyer, i}) => {
    const {_id, name, email, mobile} = buyer;
    return (
        <tr>
            <td>{i+1}</td>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td>
                <button className="btn btn-circle btn-error btn-sm btn-outline" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default SingleBuyerRow;