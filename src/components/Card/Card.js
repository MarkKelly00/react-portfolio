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
        <>
            <div className="py-8 bg-gray-900 text-gray-100">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-12">
                        <h3
                            data-aos="fade-left"
                            className="text-3xl font-bold text-sky-400 sm:text-4xl"
                        >
                            About Me
                        </h3>
                        <p
                            data-aos="fade-right"
                            className="mt-6 text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto"
                        >
                            Hello! I'm Mark Kelly, a Full Stack Developer
                            specializing in e-commerce and web development. I
                            have extensive experience designing, building, and
                            optimizing websites to deliver top-tier user
                            experiences and drive business results.
                        </p>
                        <p
                            data-aos="fade-right"
                            className="mt-4 text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto"
                        >
                            In my role as a Web Developer at HydroJug and
                            ActaWear, I led web development projects, designing
                            and building TheHydroJug.com, TheHydroJug.co.uk, and
                            ActaWear.com. I spearheaded site speed optimization
                            efforts, improving loading times, and conducted A/B
                            testing using HotJar recordings to enhance user
                            engagement and conversions. My initiatives increased
                            Average Order Value (AOV) and conversion rates
                            through custom product features and segmented
                            collection pages.
                        </p>
                        <p
                            data-aos="fade-right"
                            className="mt-4 text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto"
                        >
                            I also developed and integrated product
                            customization software that automated laser etching
                            processes, reducing lead times and boosting
                            production capacity. Managing product launches,
                            coordinating cross-functional teams, and
                            collaborating with marketing for SEO and landing
                            page optimizations were key aspects of my role,
                            ensuring seamless feature implementation and
                            improved site performance.
                        </p>
                    </div>
                    <Projects />
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-sky-500 mt-6">
                        <h2
                            data-aos="fade-up"
                            className="text-2xl font-semibold mb-4 text-sky-300"
                        >
                            <i className="fas fa-medal mr-2" /> Accomplishments
                            (USAF)
                        </h2>
                        <ul className="list-disc list-inside space-y-3">
                            {accomplishments.map((accomplishment, index) => (
                                <Accomplishment
                                    key={index}
                                    {...accomplishment}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardBody;
