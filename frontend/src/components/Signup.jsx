/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginContext from '../contexts/LoginContext';
import 'tailwindcss/tailwind.css';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        Phone_no: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    let { setLoggedin } = useContext(LoginContext)

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/users/', formData);
            setSuccess('User registered successfully!');
            navigate('/login')
            setError('');
        } catch (err) {
            setError('Something went wrong. Please try again.');
            setSuccess('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-deep-teal">
            <div className="w-full max-w-sm bg-pastel-green p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-dark-teal text-center">Sign Up</h2>
                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" aria-live="polite">
                        <strong className="font-bold">Success!</strong>
                        <span className="block sm:inline">{success}</span>
                    </div>
                )}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" aria-live="assertive">
                        <strong className="font-bold">Error!</strong>
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-dark-teal font-nunito">First Name</label>
                        <input
                            name='fname'
                            type="text"
                            id="name"
                            value={formData.fname}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-dark-teal font-nunito">Last Name</label>
                        <input
                            name='lname'
                            type="text"
                            id="lname"
                            value={formData.lname}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-dark-teal font-nunito">Email Address</label>
                        <input
                            name='email'
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="Phone_no" className="block text-lg font-medium text-dark-teal font-nunito">Phone Number</label>
                        <input
                            name='Phone_no'
                            type='number'
                            id="phone"
                            value={formData.Phone_no}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-lg font-medium text-dark-teal font-nunito">Password</label>
                        <input
                            name='password'
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 px-4 bg-dark-teal text-pastel-green text-lg font-semibold rounded-lg shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-dark-teal'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                    <p className="text-md text-dark-teal text-center mt-4">
                        Already have an account?
                        <NavLink className="text-deep-teal font-semibold hover:text-deep-teal" to="/login">
                            Login
                        </NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
