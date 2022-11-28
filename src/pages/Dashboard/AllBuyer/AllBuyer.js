import React from 'react';

const AllBuyer = () => {
    return (
        <div className='w-100'>
            <div className="container mx-auto">
                <h1 className='text-primary text-2xl font-semibold text-center py-4'>All Buyers</h1>
            </div>

            <div className="overflow-x-auto mt-4 mb-10">
                <table className="table table-zebra w-full">
                    <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            
                                <tr>
                                    <td colSpan="6" className='text-error font-semibold text-sm text-center'>No Data Found</td>
                                </tr>
                            
                        }
                    
                    
                    
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllBuyer;