import React, { useEffect, useState } from "react";
import Aos from "aos";
// import { Transition } from "@tailwindui/react";
import "./styles.css";
import "aos/dist/aos.css";
import HJ from "../../features/HJ-HP.png";
import Acta from "../../features/ACTA-HP.png";
import Purelyte from "../../features/Purelyte-HP.png";
import CodeLocker from "../../features/codelocker.png";
import Birthday from "../../features/birthdayAPI.PNG";
import Burger from "../../features/burgerApp.png";
import Alertify from "../../features/alertify_sample.png";
import OMDB from "../../features/OMDB.png";
import Alyssandra from "../../features/alyssandrak.png";

const projectData = [
    {
        title: "TheHydroJug.com",
        image: HJ,
        link: "https://www.thehydrojug.com/",
        description:
            "As the web developer for The HydroJug, I worked on various features, optimizations, and user experiences for their e-commerce platform, ensuring seamless integration and functionality.",
        technologies: "Used: Shopify, Liquid, JavaScript, Tailwind CSS, HTML5",
        github: null,
    },
    {
        title: "ActaWear.com",
        image: Acta,
        link: "https://www.actawear.com/",
        description:
            "Worked as a web developer for Acta Wear, focusing on enhancing the user experience and developing custom Shopify components to improve the shopping experience.",
        technologies: "Used: Shopify, Liquid, JavaScript, Tailwind CSS, HTML5",
        github: null,
    },
    {
        title: "Purelyte.com (Coming Soon)",
        image: Purelyte,
        link: "https://www.purelyte.com/",
        description:
            "Developed and maintained the website for Purelyte, including building custom features, improving site performance, and ensuring responsive design for all devices.",
        technologies: "Used: Shopify, Hydrogen, React, Tailwind CSS, HTML5",
        github: null,
    },
    {
        title: "Alertify App",
        image: Alertify,
        link: "https://alertifynow.herokuapp.com/",
        description:
            "Alertify is intended to make an impact on a more secure/safe future. It was designed by myself and three other classmates while at the University of Oregon. Alertify is great for emergency situations to send your specific contacts an SOS text with current location.",
        technologies:
            "Used: HTML5, Materialize CSS, JavaScript, jQuery, Node, MongoDB, and Google Maps API",
        github: "https://github.com/MarkKelly00/Alertify",
    },
    {
        title: "Birthday API",
        image: Birthday,
        link: "https://MarkKelly00.github.io/About-Your-Birthday/",
        description:
            "Birthday API allows users to find fun facts about their birthday. It's very simple and modular. Just enter your DD/MM/YYYY and let the app do the work, generating your horoscope, top movie of your birth year, which celebrities you share a birthday with and more.",
        technologies: "Used: HTML5, Tailwind CSS, JavaScript, jQuery, Node",
        github: "https://github.com/MarkKelly00/About-Your-Birthday",
    },
    {
        title: "CodeLocker",
        image: CodeLocker,
        link: "https://codel0cker.herokuapp.com/",
        description:
            "An application that can be used to execute, save, and delete code in your own CodeLocker. We used a MERN stack for our technologies; including Auth0 and AceEditor.",
        technologies:
            "Used: MongoDB, Express, React, Node.JS, Auth0, HTML5, TailwindCSS, and Javascript",
        github: "https://github.com/MarkKelly00/codeLocker",
    },
    {
        title: "Alyssandrak.com",
        image: Alyssandra,
        link: "https://www.alyssandrak.com/",
        description:
            "Designed & currently maintaining website for high functionality, easy navigation, and responsiveness. Used HTML5, Material-UI, React, SASS, and Firebase. This website is for a client running a beauty salon.",
        technologies: "Used: HTML5, Material-UI, React, SASS, and Firebase",
        github: "https://github.com/MarkKelly00/beauty.Alyssandrak",
    },
    {
        title: "OMDB App",
        image: OMDB,
        link: "https://markkelly00.github.io/OMDB/",
        description:
            "Used React, Bootstrap CSS, and OMDB API to design an application to search movies. User can nominate up to 5 movies, if they try to add more than 5, the user will be asked if they wish to remove a title or cancel.",
        technologies:
            "Used: HTML5, Bootstrap CSS, JavaScript, React, and OMDB API",
        github: "https://github.com/MarkKelly00/OMDB",
    },
    {
        title: "Burger App",
        image: Burger,
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
        <div className="mt-10 mb-4">
            <h3
                data-aos="fade-down"
                id="portfolio"
                className="leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-10 lg:text-center"
            >
                My Portfolio
            </h3>
            <br />
            <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {projectData
                    .slice(0, loadMore ? projectData.length : 4)
                    .map((project, index) => (
                        <li key={index} className="mt-10 md:mt-0">
                            <div
                                className={`flex ${
                                    index % 2 === 0 ? "fade-right" : "fade-left"
                                }`}
                                data-aos={`fade-${
                                    index % 2 === 0 ? "right" : "left"
                                }`}
                            >
                                <div className="flex-shrink-0 card-container">
                                    <div className="flex items-center justify-center h-48 w-48 rounded-lg bg-teal-500 overflow-hidden">
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
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                                        <a
                                            className="hover:text-white"
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {project.title}
                                        </a>
                                    </h4>
                                    <p className="mt-2 text-base leading-6 text-white">
                                        {project.description}{" "}
                                        <i>Click the image to route to site.</i>
                                    </p>
                                    <br />
                                    <hr />
                                    {project.github && (
                                        <p className="mt-1">
                                            <a
                                                className="hover:text-white"
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                GitHub Repo
                                                <img
                                                    width="24"
                                                    className="float-left mr-1"
                                                    src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"
                                                    alt="GitHub"
                                                />
                                            </a>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
            <br />
            <div className="flex justify-center">
                <button
                    type="button"
                    className="text-white inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-600"
                    onClick={() => setLoadMore(!loadMore)}
                >
                    <span>{loadMore ? "See Less" : "See More"} </span>
                    <i className={`fas fa-caret-${loadMore ? "up" : "down"}`} />
                </button>
            </div>
            <br />
        </div>
    );
}

export default Projects;
