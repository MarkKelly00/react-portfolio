import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Transition } from "@tailwindui/react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../../features/MyLogo.png";
import Resume from "../../features/Resume.pdf";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Router>
            <div
                id="top"
                className="relative p-2 bg-gray-800 h-52 border-t-2 border-b-2 border-blue-800 shadow-lg"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
                        
                        <div className="lg:w-full lg:flex-1">
                            <img
                                href="https://markkelly.dev"
                                src={Logo}
                                alt="MK-Logo"
                            />
                        </div>

                        <nav className="hidden md:flex space-x-10">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={700}
                                className="text-base leading-6 font-medium text-white hover:text-gray-600"
                            >
                                About
                            </Link>
                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={700}
                                className="text-base leading-6 font-medium text-white hover:text-gray-600"
                            >
                                Portfolio
                            </Link>

                            <div className="relative">
                            {!isOpen ? (
                                <button
                                    type="button"
                                    className="text-white inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-600"
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                >
                                    <span>More </span>
                                    <i className="fas fa-caret-down" />
                                </button>
                                ) : (
                                    <button
                                    type="button"
                                    className="text-white inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-600"
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                >
                                    <span>More </span>
                                    <i className="fas fa-caret-up" />
                                </button>
                                )}
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
                                                            href={Resume}
                                                            className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <img
                                                                width="36"
                                                                src="https://www.flaticon.com/svg/static/icons/svg/58/58600.svg"
                                                                alt="resume"
                                                            />
                                                            <div className="space-y-1">
                                                                <p className="text-base leading-6 font-medium text-gray-900">
                                                                    My Resume
                                                                </p>
                                                                <p className="text-sm leading-5 text-gray-500">
                                                                    View My
                                                                    Resume.pdf
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="https://github.com/MarkKelly00"
                                                            className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <img
                                                                width="32"
                                                                src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"
                                                                alt="GitHub"
                                                            />
                                                            <div className="space-y-1">
                                                                <p className="text-base leading-6 font-medium text-gray-900">
                                                                    GitHub
                                                                </p>
                                                                <p className="text-sm leading-5 text-gray-500">
                                                                    View My
                                                                    GitHub Repo
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="https://www.linkedin.com/in/mark-kelly-9a1436160/"
                                                            className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <img
                                                                width="32"
                                                                src="https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png"
                                                                alt="LinkedIn"
                                                            />
                                                            <div className="space-y-1">
                                                                <p className="text-base leading-6 font-medium text-gray-900">
                                                                    LinkedIn
                                                                </p>
                                                                <p className="text-sm leading-5 text-gray-500">
                                                                    View My
                                                                    LinkedIn
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
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={600}
                                    className="bg-blue-700 hover:bg-teal-300 active:bg-blue-800 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded border-solid border-2 border-teal-500"
                                >
                                    Contact Me
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Header;
