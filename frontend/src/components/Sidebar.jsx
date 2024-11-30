import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Sidebar.css'; // Ensure the CSS file is imported
import LoginContext from '../contexts/LoginContext';
import i1 from '../assets/images/male.jpg'

export default function Sidebar() {
    const { loggedin, email } = useContext(LoginContext); // Destructure email from context
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState(null); // State to store user details

    // Function to handle the sidebar toggle
    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}users`);
                if (!response.ok) {
                    throw new Error("Network response was not okay!");
                }
                const result = await response.json();
                setData(result);

                // Filter the data for the user with matching email
                const matchedUser = result.find((user) => user.email === email);
                setUserData(matchedUser);
            } catch (error) {
                console.log("Error fetching the data:", error);
            }
        }
        fetchData(); // Don't forget to invoke the function
    }, [email]);

    return (
        <>

            {/* Sidebar */}
            {isSidebarOpen && (
                <aside className="sidebar shadow sticky z-50 top-0  ">
                    <nav className="bg-white border-gray-200 py-4 px-6">
                        <div className="flex flex-col items-start mx-auto max-w-screen-xl">
                            <div className="flex flex-col w-full">

                                <div className='student-div'>
                                    <img src={i1} alt="." className='student-image' />
                                </div>

                                <h2 className="text-lg font-semibold mb-4 student-name">
                                    {/* Display user details if available */}
                                    {userData ? `Welcome, ${userData.fname}` : "Welcome"}
                                </h2>
                                <div className="mt-4">
                                    <NavLink
                                        to="/profile"
                                        className={({ isActive }) =>
                                            `block py-2 px-4 text-sm ${isActive ? 'text-orange-700 bg-gray-50' : 'text-gray-700'
                                            } rounded-lg duration-200 hover:bg-gray-100`
                                        }
                                    >
                                        My Profile
                                    </NavLink>
                                </div>
                                <div className="mt-4">
                                    <NavLink
                                        to="/Mycourses"
                                        className={({ isActive }) =>
                                            `block py-2 px-4 text-sm ${isActive ? 'text-orange-700 bg-gray-50' : 'text-gray-700'
                                            } rounded-lg duration-200 hover:bg-gray-100`
                                        }
                                    >
                                        Enrolled Courses
                                    </NavLink>
                                </div>
                                <div className="mt-4">
                                    <NavLink
                                        to="/Courses"
                                        className={({ isActive }) =>
                                            `block py-2 px-4 text-sm ${isActive ? 'text-orange-700 bg-gray-50' : 'text-gray-700'
                                            } rounded-lg duration-200 hover:bg-gray-100`
                                        }
                                    >
                                        Courses
                                    </NavLink>
                                </div>
                                <div className="mt-4">
                                    <NavLink
                                        to="/Assignment"
                                        className={({ isActive }) =>
                                            `block py-2 px-4 text-sm ${isActive ? 'text-orange-700 bg-gray-50' : 'text-gray-700'
                                            } rounded-lg duration-200 hover:bg-gray-100`
                                        }
                                    >
                                        Assignments
                                    </NavLink>
                                </div>

                                <div className="mt-4">
                                    {!loggedin ? (
                                        <NavLink
                                            to="/login"
                                            className={({ isActive }) =>
                                                `block py-2 px-4 text-sm ${isActive ? 'text-orange-700 bg-gray-50' : 'text-gray-700'
                                                } rounded-lg duration-200 hover:bg-gray-100`
                                            }
                                        >
                                            Log in
                                        </NavLink>
                                    ) : (
                                        <NavLink
                                            to="/logout"
                                            className={({ isActive }) =>
                                                `block py-2 px-4 text-sm ${isActive ? 'text-orange-700 bg-gray-50' : 'text-gray-700'
                                                } rounded-lg duration-200 hover:bg-gray-100`
                                            }
                                        >
                                            Log out
                                        </NavLink>
                                    )}
                                </div>
                            </div>
                        </div>
                    </nav>
                </aside>
            )}
        </>
    );
}
