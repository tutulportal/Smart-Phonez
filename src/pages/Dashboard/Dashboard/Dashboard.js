import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSackDollar, faHeart } from '@fortawesome/free-solid-svg-icons'
import UseTitle from './../../../hooks/useTitle';

const Dashboard = () => {
    UseTitle('Dashboard');
    const {user} = useContext(AuthContext);
    return (
        <div className='w-100'>
            <div className="container mx-auto flex flex-col items-center">
                <div className='w-100 text-center'>
                    <h1 className='text-4xl font-bold text-secondary uppercase mt-6'>Welcome to dashboard, {user.displayName}</h1>
                </div>
                <div className="stats w-[100%] md:w-auto flex flex-col justify-center items-center md:flex-row shadow my-10">
    
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <FontAwesomeIcon icon={faCartShopping} className="inline-block w-8 h-8 stroke-current"></FontAwesomeIcon>
                        </div>
                        <div className="stat-title">My Orders</div>
                        <div className="stat-value">0</div>
                        <div className="stat-desc">Total</div>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <FontAwesomeIcon icon={faSackDollar} className="inline-block w-8 h-8 stroke-current"></FontAwesomeIcon>
                        </div>
                        <div className="stat-title">Cash Costs</div>
                        <div className="stat-value">$0</div>
                        <div className="stat-desc">↗︎ Total</div>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <FontAwesomeIcon icon={faHeart} className="inline-block w-8 h-8 stroke-current"></FontAwesomeIcon>
                        </div>
                        <div className="stat-title">Wishlist</div>
                        <div className="stat-value">0</div>
                        <div className="stat-desc">Total</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Dashboard;