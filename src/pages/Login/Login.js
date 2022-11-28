import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from './../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import { toast } from 'react-toastify';
import UseTitle from '../../hooks/useTitle';

const Login = () => {
    UseTitle('Login');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, user } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const loginSuccessToast = () => {
        toast.success('Successfully Logged In', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setLoginUserEmail(user.email);
    }

    const loginFailedToast = (msg) => {
        toast.error(msg, {
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

    const handleLogin = async (data) => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                loginSuccessToast();
                setLoginUserEmail(data.email);
                navigate(from, { replace: true });
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                if(error.message === 'Firebase: Error (auth/wrong-password).'){
                    loginFailedToast(error.message);
                    setLoginError(error.message);
                }else if(error.message === 'Firebase: Error (auth/user-not-found).'){
                    loginFailedToast(error.message);
                    setLoginError(error.message);
                }else{
                    setLoginUserEmail(data.email);
                }
            });
    }

    return (
        <div className='w-full flex flex-col justify-center items-center py-10'>
            <div className="max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login</h2>
                <p className="text-sm text-center dark:text-gray-400">Dont have account?
                    <Link to="/register" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</Link>
                </p>
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-8 ng-untouched ng-pristine ng-valid pt-4">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input {...register("email", {
                                required: "Email Address is required"
                            })} name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <Link className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
                            </div>
                            <input type="password" {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })} id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                    </div>
                    <input type="submit" value="Sign in" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900" />
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </form>
            </div>

        </div>
    );
};

export default Login;