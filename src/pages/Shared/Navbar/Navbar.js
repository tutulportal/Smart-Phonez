import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSignIn, faMobile } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className='custom-z-index-1'>
            {/* main navbar */}
            <div className='w-11/12 mx-auto py-2 lg:w-100 border-b'>
                <div className="container mx-auto flex flex-row items-center justify-between">
                    <h1 className='text-sm text-gray-600'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <a href='tel:+8801866666666'>+8801866666666</a></h1>
                    <h1 className='text-sm text-gray-600 hidden lg:block'>Hot Deal Going On, Shop Now!</h1>
                    <div>
                        <button className="btn btn-xs bg-[#1877F2] border-[#1877F2] mr-2">Facebook</button>
                        <button className="btn btn-xs bg-[#CD201F] border-[#CD201F]">Youtube</button>
                    </div>
                </div>
            </div>
            <div className='w-full bg-primary'>
                <div className="container mx-auto navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost -ml-4 lg:ml-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-auto text-white">
                            <li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                            <a className="justify-between">
                                Categories
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2 text-white bg-blue-600">
                                <li><Link>iPhone</Link></li>
                                <li><Link>Samsung</Link></li>
                                <li><Link>Xaiomi</Link></li>
                                <li><Link>Realme</Link></li>
                                <li><Link>OnePlus</Link></li>
                                <li><Link>Oppo</Link></li>
                                <li><Link>Vivo</Link></li>
                                <li><Link>Huawei</Link></li>
                            </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl text-white"><FontAwesomeIcon icon={faMobile}></FontAwesomeIcon>&nbsp;Smart Phonez</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 text-white">
                            <li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                                <a>
                                Categories
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                                </a>
                                <ul className="p-2 text-white bg-blue-600 custom-z-index-1">
                                <li><Link>iPhone</Link></li>
                                <li><Link>Samsung</Link></li>
                                <li><Link>Xaiomi</Link></li>
                                <li><Link>Realme</Link></li>
                                <li><Link>OnePlus</Link></li>
                                <li><Link>Oppo</Link></li>
                                <li><Link>Vivo</Link></li>
                                <li><Link>Huawei</Link></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to='/login' className="btn btn-secondary"><FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>&nbsp;Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;