import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../contexts/LoginContext';
import '../css/Logout.css'

const LogoutForm = () => {
    const { setLoggedin } = useContext(LoginContext);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleLogout = (event) => {
        event.preventDefault();
        // Perform the logout logic
        setLoggedin(false);
        // Set success message and redirect
        setSuccessMessage('Logout successful! Redirecting to home page.');
        setTimeout(() => {
            navigate('/'); // Redirect to home page
        }, 1300); // Delay for alert to be visible
    };

    return (
        <div className="flex items-center justify-center h-screen bg-deep-teal">
            <div className="logout bg-pastel-green p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-3xl font-bold mb-4 text-dark-teal">Logout</h2>
                {successMessage && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                        <strong className="font-bold">Success!</strong>
                        <span className="block sm:inline">{successMessage}</span>
                    </div>
                )}
                <form onSubmit={handleLogout} className="space-y-4">
                    <p className="text-dark-teal text-md mb-4">Are you sure you want to log out?</p>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Logout
                        </button>
                        <button
                            type="button"
                            onClick={() => console.log('Cancel clicked')}
                            className="px-4 py-2 bg-gray-300  rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogoutForm;