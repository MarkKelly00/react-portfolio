import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import "../../App.css";

// Reusable component for technology icons
const TechnologyIcon = ({ src, alt }) => (
    <img
        className="h-16 w-16 m-4 transition-transform duration-300 transform hover:scale-110"
        src={src}
        alt={alt}
    />
);

function Contact() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = window.innerHeight * 0.2;

            if (scrollPosition > threshold) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const technologies = [
        {
            src:
                "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
            alt: "html5",
        },
        {
            src:
                "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
            alt: "css3",
        },
        {
            src:
                "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png",
            alt: "tailwind",
        },
        {
            src:
                "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
            alt: "JS",
        },
        {
            src:
                "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
            alt: "node",
        },
        {
            src:
                "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
            alt: "react",
        },
        {
            src:
                "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png",
            alt: "express",
        },
        {
            src:
                "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png",
            alt: "MySQL",
        },
        {
            src:
                "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png",
            alt: "MongoDB",
        },
        {
            src:
                "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",
            alt: "Py",
        },
    ];

    return (
        <div className="py-8 mx-auto bg-gray-900 text-gray-100 border-t-8 border-sky-500">
            <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h3
                            id="contact"
                            className="text-4xl font-extrabold text-sky-400 sm:text-5xl"
                        >
                            Contact Me
                        </h3>
                        <p className="mt-4 text-lg leading-7 text-gray-300 max-w-2xl">
                            I'm currently available for work and would love to
                            connect. Feel free to reach out via email or check
                            out my social profiles below!
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 justify-center">
                            {/* GitHub Personal */}
                            <a
                                href="https://github.com/MarkKelly00"
                                className="flex items-center space-x-2 text-base font-medium hover:text-gray-600 hover:no-underline transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github fa-2x text-sky-400"></i>
                                <span>GitHub (Personal)</span>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/mark-kelly-9a1436160/"
                                className="flex items-center space-x-2 text-base font-medium hover:text-gray-600 hover:no-underline transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin fa-2x text-sky-400"></i>
                                <span>LinkedIn</span>
                            </a>

                            {/* GitHub Work */}
                            <a
                                href="https://github.com/orgs/HydroJug/people/MKHydroJ"
                                className="flex items-center space-x-2 text-base font-medium hover:text-gray-600 hover:no-underline transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github fa-2x text-sky-400"></i>
                                <span>GitHub (Work)</span>
                            </a>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            className="h-64 w-64 rounded-full border-4 border-sky-500 shadow-lg object-cover"
                            src="https://ca.slack-edge.com/T010U5GV2LT-U011RAC9CSK-f42f5d183d7d-512?text=First"
                            alt="Mark Kelly"
                        />
                    </div>
                </div>

                {/* Scroll to top button */}
                <div
                    className={`scrollChev ${
                        showScrollButton ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <button
                        className="bg-sky-500 text-white p-3 rounded-full shadow-md hover:bg-sky-400 active:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-300"
                        onClick={() => scroll.scrollToTop()}
                        title="Top Of Page"
                    >
                        <i className="fas fa-chevron-up fa-lg" />
                    </button>
                </div>

                {/* Technologies Known */}
                <div className="mt-16">
                    <h4 className="text-2xl font-semibold text-center text-sky-400 mb-8">
                        Technologies I'm Proficient In
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 w-56 lg:w-auto max-w-2xl mx-auto">
                        {technologies.map((tech, index) => (
                            <TechnologyIcon
                                key={index}
                                src={tech.src}
                                alt={tech.alt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
