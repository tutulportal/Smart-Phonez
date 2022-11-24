import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center py-10'>
            <div className="max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Register</h2>
                <p className="text-sm text-center dark:text-gray-400">Already have account?
                    <Link to="/login" rel="noopener noreferrer" className="focus:underline hover:underline">Login here</Link>
                </p>
                <form novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid pt-4">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label for="name" className="block text-sm">Full Name</label>
                            <input type="text" name="name" id="name" placeholder="Jhon Doe" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-2">
                            <label for="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label for="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                    </div>
                    <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;