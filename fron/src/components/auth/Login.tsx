import React, { useState } from 'react'
import * as yup from 'yup'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../Features/login/userSlice';
import { loginAPI } from '../../Features/loginApi';

type LoginInputs = {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const emailFromState = location.state?.email || ''; // Get email from state if available
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');
    const dispatch = useDispatch();

    const [LoginUser] = loginAPI.useLoginUserMutation();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<LoginInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: LoginInputs) => {
        setIsLoading(true);
        setError('');
        try {
            const response = await LoginUser(data).unwrap();
            dispatch(loginSuccess(response)); // Dispatch login success action
            console.log('Login successful:', response);
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (error: any) {
            console.error('Login failed:', error);
            setError(error?.data?.message || 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }
    
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded mb-4">
                            {error}
                        </div>
                    )}
                    
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter your email"
                                autoComplete="email"
                                type="email"
                                id="email"
                                defaultValue={emailFromState}
                                {...register('email')}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter your password"
                                type="password"
                                id="password"
                                {...register('password')}
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Signing In...' : 'Sign In'}
                            </button>
                            
                            <div>
                                <p className="mt-2 text-center text-sm text-gray-600">
                                    Don't have an account? <a href="/register" className="text-indigo-600 hover:text-indigo-500">Register</a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
