import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "../index.css";

function Contact() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="py-12 mx-auto bg-gray-800 border-t-8 border-b-4 border-blue-800">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h3
                        id="contact"
                        className="leading-8 font-extrabold text-white sm:text-3xl sm:leading-10 lg:text-center"
                    >
                        Contact Me
                    </h3>
                </div>
                <div className="flex float-right">
                    <a className="hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:shadow-outline" onClick={scrollToTop} title="Top Of Page">
                <i className="fas fa-chevron-up fa-lg" style={{color: "#5091DD"}} />
                </a>
                </div>
                <br />
                <div className="float-left mr-12">
                    <img
                        className="flex-1 p-2 h-64 rounded-full flex items-center justify-center"
                        src="https://ca.slack-edge.com/T010U5GV2LT-U011RAC9CSK-f42f5d183d7d-512?text=First"
                        alt="Mark Kelly"
                    />
                </div>
                <div
                    className="mt-4 mb-12 max-w-4xl text-lg leading-7 text-white lg:mx-auto"
                    data-aos="fade-up"
                >
                    <p>
                    {`
  Hi~
`}
                        I am currently available for work</p>
                    <p>
                        Email: {" "}
                        <a className="hover:text-blue-400" href="mailto:kellymark0101@gmail.com">
                            kellymark0101@gmail.com
                        </a>
                    </p>
                    <p>
                        Phone Number:{" "}
                        <a className="hover:text-blue-400" href="tel:+1-360-721-9342">(360) 721-9342</a>
                    </p>
                    <br />
                    <p>Technologies Known:</p>
                    <br />
                    <div className="flex content-center flex-wrap h-18 w-full">
                        <img
                            className="flex-1 p-2 h-16"
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                            alt="html5"
                        />
                        <img
                            className="flex-1 p-2 h-16"
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                            alt="css3"
                        />
                        <img
                            className="flex-1 p-2 h-16"
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png"
                            alt="tailwind"
                        />
                        <img
                            className="flex-1 p-2 h-16"
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"
                            alt="bootstrap"
                        />
                        <img
                            className="flex-1 p-2 h-16"
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                            alt="JS"
                        />
                        <img
                            className="flex-1 p-2 h-16"
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                            alt="node"
                        />
                        <img
                            className="flex-1 p-2 h-16"
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                            alt="react"
                        />
                        <img
                            className="flex-1 p-2 h-16"
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
                            alt="express"
                        />
                        <img
                            className="flex-1 p-2 h-16"
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                            alt="MySQL"
                        />
                        <img
                            className="flex-1 p-2 h-16"
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                            alt="MongoDB"
                        />
                        <img
                            className="flex-1 p-2 h-16"
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"
                            alt="Py"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
