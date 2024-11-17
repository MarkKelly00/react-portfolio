import React, { useState } from "react";
import { Link } from "react-scroll";
import { Transition } from "@tailwindui/react";
import Logo from "../../features/MyLogo.png";
import GHLogo from "../../features/gh-logo.png";
import LinkedLogo from "../../features/Linkedin-logo.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-gray-100 shadow-lg sticky top-0 z-50 border-b-2 border-blue-800">
            <div className="relative max-w-screen-xl left-[3rem] mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <a href="https://markkelly.dev">
                        <img src={Logo} alt="MK-Logo" className="h-12 w-auto" />
                    </a>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <Link
                        activeClass="text-gray-600"
                        to="about"
                        spy
                        smooth
                        offset={-70}
                        duration={700}
                        className="text-base font-medium text-gray-300 hover:text-gray-600 cursor-pointer"
                    >
                        About
                    </Link>
                    <Link
                        activeClass="text-gray-600"
                        to="portfolio"
                        spy
                        smooth
                        offset={-70}
                        duration={700}
                        className="text-base font-medium text-gray-300 hover:text-gray-600 cursor-pointer"
                    >
                        Portfolio
                    </Link>
                    <div className="relative">
                        <button
                            type="button"
                            className="text-gray-300 inline-flex items-center space-x-2 text-base font-medium hover:text-gray-600"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span>More</span>
                            <i
                                className={`fas fa-caret-${
                                    isOpen ? "up" : "down"
                                }`}
                            />
                        </button>
                        <Transition
                            show={isOpen}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-4"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-4"
                        >
                            {(ref) => (
                                <div
                                    ref={ref}
                                    className="absolute right-0 mt-4 w-56 rounded-lg shadow-lg bg-gray-800 z-40 border border-gray-700"
                                >
                                    <div className="py-4">
                                        <a
                                            href="https://github.com/MarkKelly00"
                                            className="flex items-center px-4 py-2 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-600 rounded-md transition-colors duration-200"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                width="25"
                                                className="mr-3"
                                                src={GHLogo}
                                                alt="GitHub"
                                            />
                                            GitHub (Personal)
                                        </a>
                                        <a
                                            href="https://github.com/orgs/HydroJug/people/MKHydroJ"
                                            className="flex items-center px-4 py-2 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-600 rounded-md transition-colors duration-200"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                width="25"
                                                className="mr-3"
                                                src={GHLogo}
                                                alt="GitHub Logo"
                                            />
                                            GitHub (Work)
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/mark-kelly-9a1436160/"
                                            className="flex items-center px-4 py-2 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-600 rounded-md transition-colors duration-200"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                width="25"
                                                className="mr-3"
                                                src={LinkedLogo}
                                                alt="LinkedIn"
                                            />
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            )}
                        </Transition>
                    </div>
                </nav>
                <div className="hidden md:flex items-center space-x-4 hover:text-gray-600 hover:bg-gray-700">
                    <Link
                        activeClass="text-gray-600"
                        to="contact"
                        spy
                        smooth
                        offset={-70}
                        duration={600}
                        className="text-white font-bold py-2 px-6 rounded-lg hover:text-gray-600 transition-all duration-300 shadow-md border-2 border-white"
                    >
                        Contact Me
                    </Link>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    >
                        <i
                            className={`fas fa-${
                                isMobileMenuOpen ? "times" : "bars"
                            } fa-2x`}
                        ></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <Transition
                show={isMobileMenuOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-4"
            >
                <div className="md:hidden bg-gray-800 border-t border-gray-700">
                    <div className="px-4 pt-4 pb-3 space-y-1">
                        <Link
                            activeClass="text-gray-600"
                            to="about"
                            spy
                            smooth
                            offset={-70}
                            duration={700}
                            className="block text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-gray-600 rounded-md px-4 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            activeClass="text-gray-600"
                            to="portfolio"
                            spy
                            smooth
                            offset={-70}
                            duration={700}
                            className="block text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-gray-600 rounded-md px-4 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Portfolio
                        </Link>
                        <Link
                            activeClass="text-gray-600"
                            to="contact"
                            spy
                            smooth
                            offset={-70}
                            duration={600}
                            className="block text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-gray-600 rounded-md px-4 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </Transition>
        </header>
    );
}

export default Header;
