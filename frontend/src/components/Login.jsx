import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginContext from '../contexts/LoginContext';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [data, setData] = useState([]);

    const { loggedin, setLoggedin, email, setEmail } = useContext(LoginContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}users`);
                if (!response.ok) {
                    throw new Error("Network response was not okay!");
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log("Error fetching the data:", error);
                setError("Error fetching the data.");
            }
        }
        fetchData();
    }, [loggedin]);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const isValidUser = data.some(user => user.email === formData.email && user.password === formData.password);

            if (isValidUser) {
                setLoggedin(true)
                setEmail(formData.email)
                console.log("Account verified successfully !!!");
                setSuccess("Login successful! Redirecting to home page.");
                setTimeout(() => navigate('/profile'), 1300);
            } else {
                console.log("Account verification failed !");
                setError("Invalid email or password. Please try again.");
            }   
        } catch (error) {
            console.error("Error submitting the form:", error);
            setError("Error submitting the form.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-deep-teal">
                <div className="w-full max-w-sm p-8 bg-pastel-green rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-dark-teal text-center">Login</h2>
                    {success && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                            <strong className="font-bold">Success!</strong>
                            <span className="block sm:inline">{success}</span>
                        </div>
                    )}
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                            <strong className="font-bold">Error!</strong>
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-dark-teal font-nunito">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-lg font-medium text-dark-teal font-nunito">Password</label>
                            <input
                                name="password"
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
                            className={`w-full py-2 px-4 bg-dark-teal text-pastel-green text-lg font-semibold rounded-lg shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-dark-teal'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                        <p className="text-md text-dark-teal text-center mt-4 font-nunito">
                            Don't have an account? 
                            <NavLink className="text-deep-teal font-semibold hover:text-deep-teal " to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginForm;

