import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from './../../contexts/AuthProvider';
import useToken from './../../hooks/useToken';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import UseTitle from '../../hooks/useTitle';

const Register = () => {
    UseTitle('Register');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, loginWithGoogle } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    const [theHaveUser, setHaveUser] = useState();

    useEffect( () => {
        if(token){
            navigate('/');
        }
    }, [navigate, token])
    

    const registerSuccessToast = () => {
        toast.success('Successfully Registered', {
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

    const registerFailedToast = () => {
        toast.error('This Email already used or Failed to register!', {
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

    const registerFailedToast2 = () => {
        toast.warn('Logged In But Already Registered!', {
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

    const handleSignUp = (data) => {
        setSignUPError('');
        const verified = 'false';
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserWithEmail(data.name, data.email, data.mobile, data.userRole, verified);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                registerFailedToast();
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const handleSignUpGoogle = data => {
        setSignUPError('');
        const verified = 'false';
        loginWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
                .then(() => {
                    saveUser(user.displayName, user?.email, user.mobile ? user.mobile : '' , 'buyer', verified);
                })
                .catch(err => console.log(err));
        })
        .catch(error => {
            console.log(error)
            setSignUPError(error.message)
        });
    }

    const saveUser = (name, email, mobile, userRole, verified) =>{
        const user ={name, email, mobile, userRole, verified};
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                registerSuccessToast();
                setCreatedUserEmail(email);
            })
    }

    const saveUserWithEmail = (name, email, mobile, userRole, verified) => {
        const user ={name, email, mobile, userRole, verified};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            registerSuccessToast();
            setCreatedUserEmail(email);
        })
    }

    return (
        <div className='w-full flex flex-col justify-center items-center py-10'>
            <div className="max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Register</h2>
                <p className="text-sm text-center dark:text-gray-400">Already have account?
                    <Link to="/login" rel="noopener noreferrer" className="focus:underline hover:underline">Login here</Link>
                </p>
                <div className="my-6 space-y-4">
                    <button onClick={handleSignUpGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Sign Up with Google</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400"/>
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400"/>
                </div>
                <form onSubmit={handleSubmit(handleSignUp)} className="space-y-8 ng-untouched ng-pristine ng-valid pt-4">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm">Full Name</label>
                            <input type="text" {...register("name", {
                                required: "Full Name is required"
                            })} id="name" placeholder="Jhon Doe" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="mobile" className="block text-sm">Mobile</label>
                            <input type="text" {...register("mobile", {
                                required: "Mobile is required"
                            })} id="mobile" placeholder="+8801777777777" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" {...register("email", {
                                required: "Email is required"
                            })} id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="user-role" className="block text-sm">User Role</label>
                            <select {...register("userRole", {
                                required: "User role Required"
                            })} className='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'>
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                            {errors.userRole && <p className='text-red-500'>{errors.userRole.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" {...register("password", {
                                required: "Password Required",
                                minLength: { value: 6, message: "Password must be 6 characters long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must with Uppercase, Special Character & Numbers' }
                            })} id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                    </div>
                    <input type="submit" value="Register" className='w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900' />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
            </div>
        </div>
    );
};

export default Register;