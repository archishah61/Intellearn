import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import LoginContext from '../contexts/LoginContext';
import '../css/Navbar.css'
import logo from '../assets/images/intellogo.jpeg'
export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavMenu = () => setIsNavOpen(prev => !prev);

    let { loggedin } = useContext(LoginContext)


    return (
        <nav className={`${loggedin ? 'vertical' : 'horizontal'} bg-dark-teal text-beige shadow-md fixed w-full top-0 left-0 z-50`}>

            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleNavMenu}
                            className="inline-flex items-center justify-center p-2 text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none"
                            aria-label="Toggle navigation"
                            aria-expanded={isNavOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Logo */}
                    <img src={logo} height={50} width={50} alt="" />
                    <div className="flex-shrink-0 font-protest">
                        <span className="text-2xl font-bold">IntelLearn</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex sm:items-center sm:justify-center w-full font-nunito ">
                        <div className="flex space-x-4">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
                                }
                            >
                                About Us
                            </NavLink>
                            <NavLink
                                to="/courses"
                                className={({ isActive }) =>
                                    `text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
                                }
                            >
                                Courses
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
                                }
                            >
                                Contact Us
                            </NavLink>
                            {!loggedin &&
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        `text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
                                    }
                                >
                                    Log in
                                </NavLink>
                            }{loggedin &&
                                <NavLink
                                    to="/logout"
                                    className={({ isActive }) =>
                                        `text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
                                    }
                                >
                                    Log out
                                </NavLink>
                            }
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`sm:hidden ${isNavOpen ? 'block' : 'hidden'}`}>
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `block px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white rounded-md ${isActive ? 'bg-gray-700 text-white' : ''}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `block px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white rounded-md ${isActive ? 'bg-gray-700 text-white' : ''}`
                            }
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/courses"
                            className={({ isActive }) =>
                                `block px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white rounded-md ${isActive ? 'bg-gray-700 text-white' : ''}`
                            }
                        >
                            Courses
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `block px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white rounded-md ${isActive ? 'bg-gray-700 text-white' : ''}`
                            }
                        >
                            Contact Us
                        </NavLink>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `block px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white rounded-md ${isActive ? 'bg-gray-700 text-white' : ''}`
                            }
                        >
                            Log in
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
