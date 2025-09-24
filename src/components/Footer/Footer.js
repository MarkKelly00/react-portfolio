import React from "react";

function Footer() {
    return (
        <footer className="w-full p-3 bg-gray-800 text-center text-gray-300">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm md:text-base">
                    © Copyright {new Date().getFullYear()}
                    <a
                        className="text-sky-400 font-semibold hover:text-sky-300 transition-colors duration-300 ml-1"
                        href="https://github.com/MarkKelly00"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mark Kelly
                    </a>
                </p>
                <div className="flex gap-6">
                    <a
                        href="https://github.com/MarkKelly00"
                        className="hover:text-gray-600 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mark-kelly-9a1436160/"
                        className="hover:text-gray-600 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin fa-lg"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
