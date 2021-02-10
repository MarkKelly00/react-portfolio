import React, { useEffect } from "react";
import Aos from 'aos';
import Projects from "../Projects/Projects";
import 'aos/dist/aos.css';

function CardBody() {
    useEffect(() => {
        Aos.init({offset: 300, duration: 2000});
      }, [])

    return (
        <div className="py-6">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h3 id="about" data-aos="fade-left" className="leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-10 lg:text-center">
                        About Me
                    </h3>
                    <p data-aos="fade-right" className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto">
                        Hello World! My name is Mark Kelly, I am a Full Stack Developer. I graduated from the{" "}
                        <a href="https://bootcamp.uoregon.edu/">
                            University of Oregon{" "}
                        </a>{" "}
                        where I received my certification. I have always enjoyed
                        technology, it is something I am very passionate about and love how much impact it has in our daily lives. My ultimate goal is to use this certification towards a job that plays a
                        role in the advancement of technology and innovation.
                    </p>
                    <p data-aos="fade-left" className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto">
                        As for other hobbies, anything that has to do with
                        sports <b>&quot;especially football&quot;</b> I enjoy.
                        Fantasy Football is basically a tradition, every
                        football season; I have my designated leagues that I
                        partake in. When I have time, video games is usually a go
                        to. My favorite games include{" "}
                        <i>
                        &quot;Call of Duty&quot;, &quot;OverWatch&quot;, &quot;RainbowSix&quot;, &quot;Halo&quot;,
                            &quot;Madden&quot;, &quot;Forza&quot;, and &quot;Apex Legends&quot;.
                        </i>
                    </p>

                    <p data-aos="fade-right" className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto">
                        My professional activities include working for United
                        Natural Foods Inc in Ridgefield, WA as a reach lift
                        operator (2011-2020). Before that, I served for the
                        United States Air Force as a Missile and Space Systems
                        Technician (2M0X2). This involved direct missile
                        maintenance on MinuteManIII ICBM, space lift booster,
                        payload processing and R&D activities. More about the
                        accomplishments earned are listed below.
                    </p>

                    <p data-aos="fade-left" className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto">
                        My greatest achievement is my family. We're a family of
                        four; my wife - Alyssandra, daughter - Adaline, and Son
                        - Dean. We just celebrated our 5 year anniversary Oct 1st 2020. My daughter
                        will be 5 in March, and my son Dean just turned 2 in August.
                    </p>
                    <p data-aos="fade-right" className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto">
                        Please browse my projects below, CodeLocker is the most recent project created with a team from UofO using MERN stack. Also view my LinkedIn,
                        GitHub, and resume from the more tab at the top of this page. If you
                        have any questions please contact me via Contact form below.
                    </p>
                </div>
                <div className="mt-8 p-8 border-t-4 border-b-4 border-gray-400">
                    <h2 data-aos="fade-up" className="leading-8 font-extrabold text-gray-900 sm:text-xl sm:leading-10 lg:text-center">
                        <i className="fas fa-medal" />
                        <strong> Accomplishments (USAF)</strong>
                    </h2>
                    <br />
                    <ul className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto list-disc">
                        <li>
                            <p data-aos="fade-up" className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto">
                                Top Secret Clearance - USAF, 2009 I received my
                                Top Secret Clearance in the United States Air
                                Force on this date. It&apos;s a qualification for the
                                career I was currently in.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p data-aos="fade-up" className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto">
                                Iraqi Campaign Medal/GWOTEM - USAF, 2010 After
                                my deployment in Iraq, I was rewarded with the
                                Iraqi Campaign Medal in Honor of my service
                                along with the Global War on Terrorism
                                Expeditionary Medal.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p data-aos="fade-up" className="mt-4 max-w-4xl text-lg leading-7 text-white lg:mx-auto">
                                Expert Marksman - USAF, 2010 While in the Air
                                Force I received a bronze star on my Expert
                                Marksman ribbon to show that I am a qualified on
                                both the M16 and M9.
                            </p>
                        </li>
                    </ul>
                </div>
                <Projects />
            </div>
        </div>
    );
}

export default CardBody;
