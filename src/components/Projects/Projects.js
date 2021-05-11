import React, { useEffect, useState } from "react";
import Aos from "aos";
import { Transition } from "@tailwindui/react";
import CodeLocker from "../../features/codelocker.png";
import Birthday from "../../features/birthdayAPI.PNG";
import Burger from "../../features/burgerApp.png";
import Alertify from "../../features/alertify_sample.png";
import OMDB from "../../features/OMDB.png";
import Alyssandra from "../../features/alyssandrak.png";
import "./styles.css";
import "aos/dist/aos.css";

function Projects() {
    const [loadMore, setloadMore] = useState(false);

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
                <li>
                    <div className="flex" data-aos="fade-right">
                        <div className="flex-shrink-0 card-container">
                            <div className="flex items-center justify-center h-48 w-48 rounded-lg bg-teal-500 overflow-hidden">
                                <a
                                    href="https://alertifynow.herokuapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="h-40 w-full object-cover"
                                        src={Alertify}
                                        alt="Alertify"
                                        title="Used: HTML5, Materialize CSS, JavaScript, jQuery, Node, MongoDB, and Google Maps API"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg leading-6 font-medium text-gray-900">
                                <a
                                    className="hover:text-white"
                                    href="https://alertifynow.herokuapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Alertify App
                                </a>
                            </h4>
                            <p className="mt-2 text-base leading-6 text-white">
                                Alertify is intended to make an impact on a more
                                secure/safe future. It was designed by myself
                                and three other classmates while at the
                                University of Oregon. Alertify is great for
                                emergency situations to send your specific
                                contacts an SOS text with current location.{" "}
                                <i>Click the image to route to site.</i>
                            </p>
                            <br />
                            <hr />
                            <p className="mt-1">
                                <a
                                    className="hover:text-white"
                                    href="https://github.com/MarkKelly00/Alertify"
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
                        </div>
                    </div>
                </li>
                <li className="mt-10 md:mt-0">
                    <div className="flex" data-aos="fade-left">
                        <div className="flex-shrink-0 card-container">
                            <div className="flex items-center justify-center h-48 w-48 rounded-lg bg-teal-500 overflow-hidden">
                                <a
                                    className="hover:text-white"
                                    href="https://MarkKelly00.github.io/About-Your-Birthday/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="h-48 w-full object-cover"
                                        src={Birthday}
                                        alt="Birthday App"
                                        title="Used: HTML5, Tailwind CSS, JavaScript, jQuery, Node"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg leading-6 font-medium text-gray-900">
                                <a
                                    className="hover:text-white"
                                    href="https://MarkKelly00.github.io/About-Your-Birthday/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Birthday API
                                </a>
                            </h4>
                            <p className="mt-2 text-base leading-6 text-white">
                                Birthday API allows users to find fun facts
                                about their birthday. It&apos;s very simple and
                                modular. Just enter your DD/MM/YYYY and let the
                                app do the work, generating your horoscope, top
                                movie of your birth year, which celebrities you
                                share a birthday with and more.{" "}
                                <i>Click the image to route to site.</i>
                            </p>
                            <br />
                            <hr />
                            <p className="mt-1">
                                <a
                                    className="hover:text-white"
                                    href="https://github.com/MarkKelly00/About-Your-Birthday"
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
                        </div>
                    </div>
                </li>
                <li className="mt-10 md:mt-0">
                    <div className="flex" data-aos="fade-right">
                        <div className="flex-shrink-0 card-container">
                            <div className="flex items-center justify-center h-48 w-48 rounded-lg bg-teal-500 overflow-hidden">
                                <a
                                    className="hover:text-white"
                                    href="https://codel0cker.herokuapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="h-48 w-full object-cover"
                                        src={CodeLocker}
                                        alt="Note Taker"
                                        title="Used: MongoDB, Express, React, Node.JS, Auth0, HTML5, TailwindCSS, and Javascript
                                                "
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg leading-6 font-medium text-gray-900">
                                <a
                                    className="hover:text-white"
                                    href="https://codel0cker.herokuapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    CodeLocker
                                </a>
                            </h4>
                            <p className="mt-2 text-base leading-6 text-white">
                                An application that can be used to execute,
                                save, and delete Code in your own CodeLocker. We
                                used a MERN stack for our technologies;
                                including Auth0 and AceEditor.{" "}
                                <i>Click the image to route to site.</i>
                            </p>
                            <br />
                            <hr />
                            <p className="mt-1">
                                <a
                                    className="hover:text-white"
                                    href="https://github.com/MarkKelly00/codeLocker"
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
                        </div>
                    </div>
                </li>
                <li className="mt-10 md:mt-0">
                    <div className="flex" data-aos="fade-left">
                        <div className="flex-shrink-0 card-container">
                            <div className="flex items-center justify-center h-48 w-48 rounded-lg bg-teal-500 overflow-hidden">
                                <a
                                    className="hover:text-white"
                                    href="https://MarkKelly00.github.io/About-Your-Birthday/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="h-48 w-full object-cover"
                                        src={Alyssandra}
                                        alt="AlyssandraK"
                                        title="Used: HTML5, Tailwind CSS, JavaScript, jQuery, Node"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg leading-6 font-medium text-gray-900">
                                <a
                                    className="hover:text-white"
                                    href="https://www.alyssandrak.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Alyssandrak.com
                                </a>
                            </h4>
                            <p className="mt-2 text-base leading-6 text-white">
                                Designed & currently maintaining website for
                                high functionality, easy navigation, and
                                responsiveness. Used HTML5, Material-UI, React,
                                SASS, and Firebase. This website is for a client
                                running a beauty salon.{" "}
                                <i>Click the image to route to site.</i>
                            </p>
                            <br />
                            <hr />
                            <p className="mt-1">
                                <a
                                    className="hover:text-white"
                                    href="https://github.com/MarkKelly00/beauty.Alyssandrak"
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
                        </div>
                    </div>
                </li>
            </ul>
            <br />
            <div className="flex justify-center">
                {!loadMore ? (
                    <button
                        type="button"
                        className="text-white inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-600"
                        onClick={() => {
                            setloadMore(!loadMore);
                        }}
                    >
                        <span>See More </span>
                        <i className="fas fa-caret-down" />
                    </button>
                ) : (
                    <button
                        type="button"
                        className="text-white inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-600"
                        onClick={() => {
                            setloadMore(!loadMore);
                        }}
                    >
                        <span>See Less </span>
                        <i className="fas fa-caret-up" />
                    </button>
                )}
            </div>
            <br />
            <Transition
                show={loadMore}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div ref={ref} className="flex justify-center">
                        <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <li>
                                <div className="flex" data-aos="fade-right">
                                    <div className="flex-shrink-0 card-container">
                                        <div className="flex items-center justify-center h-48 w-48 rounded-lg bg-teal-500 overflow-hidden">
                                            <a
                                                href="https://markkelly00.github.io/OMDB/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    className="h-40 w-full object-cover"
                                                    src={OMDB}
                                                    alt="OMDB"
                                                    title="Used: HTML5, Bootstrap CSS, JavaScript, React, and OMDB API"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg leading-6 font-medium text-gray-900">
                                            <a
                                                className="hover:text-white"
                                                href="https://alertifynow.herokuapp.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                OMDB App
                                            </a>
                                        </h4>
                                        <p className="mt-2 text-base leading-6 text-white">
                                            Used React, Boostrap CSS, and OMDB
                                            API to design an application to
                                            search movies. User can nominate up
                                            to 5 movies, if they try to add more
                                            than 5, the user will be asked if
                                            they wish to remove a title or
                                            cancel.{" "}
                                            <i>
                                                Click the image to route to
                                                site.
                                            </i>
                                        </p>
                                        <br />
                                        <hr />
                                        <p className="mt-1">
                                            <a
                                                className="hover:text-white"
                                                href="https://github.com/MarkKelly00/OMDB"
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
                                    </div>
                                </div>
                            </li>
                            <li className="mt-10 md:mt-0">
                                <div className="flex" data-aos="fade-left">
                                    <div className="flex-shrink-0 card-container">
                                        <div className="flex items-center justify-center h-48 w-48 rounded-lg bg-teal-500 overflow-hidden">
                                            <a
                                                href="https://burgerl0gger.herokuapp.com/burgers"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    className="h-48 w-full object-cover"
                                                    src={Burger}
                                                    alt="Burger App"
                                                    title="Used: MySQL, Node, Javascript, Express, Handlebars, HTML5, BootStrap CSS"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg leading-6 font-medium text-gray-900">
                                            <a
                                                className="hover:text-white"
                                                href="https://burgerl0gger.herokuapp.com/burgers"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Burger App
                                            </a>
                                        </h4>
                                        <p className="mt-2 text-base leading-6 text-white">
                                            Eat-Da-Burger! An app that lets
                                            users input the names of burgers
                                            that they like to eat. Every burger
                                            is stored in a database, whether
                                            devoured or not.{" "}
                                            <i>
                                                Click the image to route to
                                                site.
                                            </i>
                                        </p>
                                        <br />
                                        <hr />
                                        <p className="mt-1">
                                            <a
                                                className="hover:text-white"
                                                href="https://github.com/MarkKelly00/burger"
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
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </Transition>
        </div>
    );
}

export default Projects;
