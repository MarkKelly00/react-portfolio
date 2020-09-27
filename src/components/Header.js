import React, { useState } from "react";
import { Transition } from "@tailwindui/react";
import Logo from "../features/MyLogo.png";
import { Link } from 'react-router-dom';
import { Router, Route } from "react-router";


function Header() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <Router>
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="lg:w-0 lg:flex-1">
                        <a href="#" className="flex">
                            <img src={Logo} alt="MK-Logo"
                            />
                        </a>
                    </div>
                    
                    <nav className="hidden md:flex space-x-10">
                        <a
                            href="/"
                            className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                        >
                            <Link to="/">About</Link>
                        </a>
                        <a
                            href="#"
                            className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                        >
                            <Link to="/portfolio">Portfolio</Link>
                        </a>

                        <div className="relative">
                            <button
                                type="button"
                                className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                }}
                            >
                                <span>More</span>
                                <svg
                                    className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <Transition
                                show={isOpen}
                                enter="transition ease-out duration-100 transform"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="transition ease-in duration-75 transform"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                {(ref) => (
                                    <div
                                        ref={ref}
                                        className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                                    >
                                        <div className="rounded-lg shadow-lg">
                                            <div className="rounded-lg shadow-xs overflow-hidden">
                                                <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    <a
                                                        href="#"
                                                        className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                                                    >
                                                        <svg
                                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                                            />
                                                        </svg>
                                                        <div className="space-y-1">
                                                            <p className="text-base leading-6 font-medium text-gray-900">
                                                                My Resume
                                                            </p>
                                                            <p className="text-sm leading-5 text-gray-500">
                                                                View My Resume.pdf
                                                            </p>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                                                    >
                                                        <svg
                                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                            />
                                                        </svg>
                                                        <div className="space-y-1">
                                                            <p className="text-base leading-6 font-medium text-gray-900">
                                                                GitHub
                                                            </p>
                                                            <p className="text-sm leading-5 text-gray-500">
                                                                View My GitHub Repo
                                                            </p>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                                                    >
                                                        <svg
                                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                            />
                                                        </svg>
                                                        <div className="space-y-1">
                                                            <p className="text-base leading-6 font-medium text-gray-900">
                                                                LinkedIn
                                                            </p>
                                                            <p className="text-sm leading-5 text-gray-500">
                                                                View My LinkedIn
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Transition>
                        </div>
                    </nav>

                    <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                        <span className="inline-flex rounded-md shadow-sm">
                            <a href="#" className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <Link to="/contact">Contact Me</Link>
                            </a>
                            
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </Router>
    );
}

export default Header;
