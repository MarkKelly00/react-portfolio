import React, { useEffect } from "react";
import Aos from "aos";
import Projects from "../Projects/Projects";
import "aos/dist/aos.css";

// Accomplishment Component
const Accomplishment = ({ title, year, description }) => (
    <li
        data-aos="fade-up"
        className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto"
    >
        <strong>{title}</strong> - {year}. {description}
    </li>
);

function CardBody() {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    // Array of accomplishments
    const accomplishments = [
        {
            title: "Top Secret Clearance",
            year: "2009",
            description:
                "Received in the United States Air Force as a qualification for a critical and confidential role.",
        },
        {
            title: "Iraqi Campaign Medal/GWOTEM",
            year: "2010",
            description:
                "Awarded for service in Iraq, honoring contributions to global security and mission completion.",
        },
        {
            title: "Expert Marksman",
            year: "2010",
            description:
                "Earned a bronze star on my Expert Marksman ribbon, qualifying on both the M16 and M9 in the Air Force.",
        },
    ];

    return (
        <div className="py-6">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h3
                        id="about"
                        data-aos="fade-left"
                        className="leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-10 lg:text-center"
                    >
                        About Me
                    </h3>
                    <p
                        data-aos="fade-right"
                        className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto"
                    >
                        Hello! I'm Mark Kelly, a Full Stack Developer with
                        expertise in e-commerce and web development. Currently,
                        I lead development for{" "}
                        <a href="https://thehydrojug.com/">HydroJug</a> and{" "}
                        <a href="https://actawear.com/">ActaWear</a>, where I
                        focus on crafting functional, high-performance websites.
                        I design, build, and optimize e-commerce experiences,
                        from custom product configurators to advanced bundling
                        and navigation improvements.
                    </p>
                    <p
                        data-aos="fade-left"
                        className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto"
                    >
                        With a keen eye for optimization, I've led initiatives
                        that significantly improved loading times and conversion
                        rates. Collaborating closely with cross-functional
                        teams, I help enhance our sites’ impact on user
                        engagement and sales growth. From laser etching software
                        to custom bundling, I build solutions that streamline
                        processes and scale effectively.
                    </p>
                    <p
                        data-aos="fade-right"
                        className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto"
                    >
                        Outside of work, I’m a dedicated Father of two. I enjoy
                        football, both playing and analyzing it through Fantasy
                        Football, and I’m a passionate gamer with favorites like
                        "Call of Duty" and "Halo." Other hobbies include Golf,
                        Skiing, and Pickleball.
                    </p>
                    <p
                        data-aos="fade-left"
                        className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto"
                    >
                        Feel free to browse my projects below, including
                        CodeLocker, a team-based project developed at the
                        University of Oregon using the MERN stack. Visit my
                        LinkedIn, GitHub, or resume through the "More" tab.
                        Reach out if you'd like to connect!
                    </p>
                </div>

                <div className="mt-8 p-8 border-t-4 border-b-4 border-gray-400">
                    <h2
                        data-aos="fade-up"
                        className="leading-8 font-extrabold text-gray-900 sm:text-xl sm:leading-10 lg:text-center"
                    >
                        <i className="fas fa-medal" />
                        <strong> Accomplishments (USAF)</strong>
                    </h2>
                    <ul className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto list-disc">
                        {accomplishments.map((accomplishment, index) => (
                            <Accomplishment
                                key={index}
                                title={accomplishment.title}
                                year={accomplishment.year}
                                description={accomplishment.description}
                            />
                        ))}
                    </ul>
                </div>

                <Projects />
            </div>
        </div>
    );
}

export default CardBody;
