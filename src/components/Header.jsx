import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="relative w-full bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <span>
                        <img src="./icon.png" alt="alawa" className="w-4/5 h-10 rounded-lg shadow" />
                    </span>
                    {/* <span className="font-bold">DevUI</span> */}
                </div>
                <div className="hidden lg:block">
                    <ul className="inline-flex space-x-8">
                        <li>
                            <NavLink to={''}
                                className={({ isActive }) => `text-sm ${isActive ? 'text-orange-700' : 'text-gray-700'} font-semibold text-gray-800 hover:text-orange-700`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/quizhub'}
                                className={({ isActive }) => `text-sm ${isActive ? 'text-orange-700' : 'text-gray-700'} font-semibold text-gray-800 hover:text-orange-700`}
                            >
                                QuizHub
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'}
                                className={({ isActive }) => `text-sm ${isActive ? 'text-orange-700' : 'text-gray-700'} font-semibold text-gray-800 hover:text-orange-700`}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contect'}
                                className={({ isActive }) => `text-sm ${isActive ? 'text-orange-700' : 'text-gray-700'} font-semibold text-gray-800 hover:text-orange-700`}
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/github'}
                                className={({ isActive }) => `text-sm ${isActive ? 'text-orange-700' : 'text-gray-700'} font-semibold text-gray-800 hover:text-orange-700`}
                            >
                                GitHub
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/passwordgenerator'}
                                className={({ isActive }) => `text-sm ${isActive ? 'text-orange-700' : 'text-gray-700'} font-semibold text-gray-800 hover:text-orange-700`}
                            >PasswordGenerator</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:block">

                    <Link to={'/signin'}
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        Login
                    </Link>

                </div>
                <div className="lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 cursor-pointer"
                    >
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="6" x2="20" y2="6"></line>
                        <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Header