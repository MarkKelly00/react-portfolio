import React, { useState } from "react";
import { Transition } from "@tailwindui/react";
import Logo from "../features/MyLogo.png";
import { BrowserRouter as Router, Link } from 'react-router-dom';


function Header() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <Router>
        <div className="relative bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="lg:w-0 lg:flex-1">
                        <a href="https://markkelly.dev" className="flex">
                            <img src={Logo} alt="MK-Logo"
                            />
                        </a>
                    </div>
                    
                    <nav className="hidden md:flex space-x-10">
                        <Link className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150" to="/">About</Link>
                        
                        <Link className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150" to="/portfolio">Portfolio</Link>

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
                                                        href="https://markkelly00.github.io/about/assets/Resume.pdf"
                                                        className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150" target="_blank"
                                                    >
                                                        <img width="36" src="https://www.flaticon.com/svg/static/icons/svg/58/58600.svg" />
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
                                                        href="https://github.com/MarkKelly00"
                                                        className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150" target="_blank"
                                                    >
                                                        <img width="32" src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png" />
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
                                                        href="https://www.linkedin.com/in/mark-kelly-9a1436160/"
                                                        className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150" target="_blank"
                                                    >
                                                        <img width="32" src="https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png" />
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
                            <Link className="bg-teal-500 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded" to="/contact">Contact Me</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </Router>
    );
}

export default Header;
