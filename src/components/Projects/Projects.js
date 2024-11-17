import React, { useEffect, useState } from "react";
import Aos from "aos";
import "./styles.css";
import "aos/dist/aos.css";

// Defining the project data array with images included directly
const projectData = [
    {
        title: "TheHydroJug.com",
        image: require("../../features/HJ-HP.png"),
        link: "https://www.thehydrojug.com/",
        description:
            "As the web developer for The HydroJug, I worked on various features, optimizations, and user experiences for their e-commerce platform, ensuring seamless integration and functionality.",
        technologies: "Used: Shopify, Liquid, JavaScript, Tailwind CSS, HTML5",
        github: null,
    },
    {
        title: "ActaWear.com",
        image: require("../../features/ACTA-HP.png"),
        link: "https://www.actawear.com/",
        description:
            "Worked as a web developer for Acta Wear, focusing on enhancing the user experience and developing custom Shopify components to improve the shopping experience.",
        technologies: "Used: Shopify, Liquid, JavaScript, Tailwind CSS, HTML5",
        github: null,
    },
    {
        title: "Purelyte.com (Coming Soon)",
        image: require("../../features/Purelyte-HP.png"),
        link: "https://www.purelyte.com/",
        description:
            "Developed and maintained the website for Purelyte, including building custom features, improving site performance, and ensuring responsive design for all devices.",
        technologies: "Used: Shopify, Hydrogen, React, Tailwind CSS, HTML5",
        github: null,
    },
    {
        title: "Alertify App",
        image: require("../../features/alertify_sample.png"),
        link: "https://alertifynow.herokuapp.com/",
        description:
            "Alertify is intended to make an impact on a more secure/safe future. It was designed by myself and three other classmates while at the University of Oregon. Alertify is great for emergency situations to send your specific contacts an SOS text with current location.",
        technologies:
            "Used: HTML5, Materialize CSS, JavaScript, jQuery, Node, MongoDB, and Google Maps API",
        github: "https://github.com/MarkKelly00/Alertify",
    },
    {
        title: "Birthday API",
        image: require("../../features/birthdayAPI.PNG"),
        link: "https://MarkKelly00.github.io/About-Your-Birthday/",
        description:
            "Birthday API allows users to find fun facts about their birthday. It's very simple and modular. Just enter your DD/MM/YYYY and let the app do the work, generating your horoscope, top movie of your birth year, which celebrities you share a birthday with and more.",
        technologies: "Used: HTML5, Tailwind CSS, JavaScript, jQuery, Node",
        github: "https://github.com/MarkKelly00/About-Your-Birthday",
    },
    {
        title: "CodeLocker",
        image: require("../../features/codelocker.png"),
        link: "https://codel0cker.herokuapp.com/",
        description:
            "An application that can be used to execute, save, and delete code in your own CodeLocker. We used a MERN stack for our technologies; including Auth0 and AceEditor.",
        technologies:
            "Used: MongoDB, Express, React, Node.JS, Auth0, HTML5, TailwindCSS, and Javascript",
        github: "https://github.com/MarkKelly00/codeLocker",
    },
    {
        title: "Alyssandrak.com",
        image: require("../../features/alyssandrak.png"),
        link: "https://www.alyssandrak.com/",
        description:
            "Designed & currently maintaining website for high functionality, easy navigation, and responsiveness. Used HTML5, Material-UI, React, SASS, and Firebase. This website is for a client running a beauty salon.",
        technologies: "Used: HTML5, Material-UI, React, SASS, and Firebase",
        github: "https://github.com/MarkKelly00/beauty.Alyssandrak",
    },
    {
        title: "OMDB App",
        image: require("../../features/OMDB.png"),
        link: "https://markkelly00.github.io/OMDB/",
        description:
            "Used React, Bootstrap CSS, and OMDB API to design an application to search movies. User can nominate up to 5 movies, if they try to add more than 5, the user will be asked if they wish to remove a title or cancel.",
        technologies:
            "Used: HTML5, Bootstrap CSS, JavaScript, React, and OMDB API",
        github: "https://github.com/MarkKelly00/OMDB",
    },
    {
        title: "Burger App",
        image: require("../../features/burgerApp.png"),
        link: "https://burgerl0gger.herokuapp.com/burgers",
        description:
            "Eat-Da-Burger! An app that lets users input the names of burgers that they like to eat. Every burger is stored in a database, whether devoured or not.",
        technologies:
            "Used: MySQL, Node, Javascript, Express, Handlebars, HTML5, BootStrap CSS",
        github: "https://github.com/MarkKelly00/burger",
    },
];

function Projects() {
    const [loadMore, setLoadMore] = useState(false);

    useEffect(() => {
        Aos.init({ offset: 300, duration: 2000 });
    }, []);

    return (
        <div className="mt-10 mb-3 bg-gray-900 text-gray-100 py-8">
            <div className="container max-w-screen-xl mx-auto px-6 md:px-12">
                <h3
                    data-aos="fade-down"
                    id="portfolio"
                    className="text-3xl font-extrabold text-sky-400 sm:text-4xl lg:text-center mb-12"
                >
                    My Portfolio
                </h3>
                <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projectData
                        .slice(0, loadMore ? projectData.length : 3)
                        .map((project, index) => (
                            <li key={index} data-aos="fade-up">
                                <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-3">
                                    <div className="flex items-center justify-center h-48 w-full rounded-lg overflow-hidden mb-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {project.image && (
                                                <img
                                                    className="h-40 w-full object-cover"
                                                    src={project.image}
                                                    alt={project.title}
                                                    title={project.technologies}
                                                />
                                            )}
                                        </a>
                                    </div>
                                    <h4 className="text-xl leading-6 font-semibold text-sky-400 mb-2">
                                        <a
                                            className="hover:text-sky-300"
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {project.title}
                                        </a>
                                    </h4>
                                    <p className="text-gray-300 mb-4">
                                        {project.description}
                                        <i className="block mt-1 text-sm">
                                            Click the image to visit the site.
                                        </i>
                                    </p>
                                    {project.github && (
                                        <a
                                            className="inline-flex items-center text-sky-400 hover:text-sky-300"
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                width="20"
                                                className="mr-2"
                                                src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"
                                                alt="GitHub"
                                            />
                                            GitHub Repo
                                        </a>
                                    )}
                                </div>
                            </li>
                        ))}
                </ul>
                <div className="flex justify-center mt-12">
                    <button
                        type="button"
                        className="text-white bg-sky-500 px-4 py-2 rounded-lg font-medium hover:bg-sky-400 transition-all duration-300"
                        onClick={() => setLoadMore(!loadMore)}
                    >
                        {loadMore ? "See Less" : "See More"}{" "}
                        <i
                            className={`fas fa-caret-${
                                loadMore ? "up" : "down"
                            } ml-2`}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Projects;
