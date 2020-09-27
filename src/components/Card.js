import React from "react";
import Notes from "../features/note_keeper.png";
import Birthday from "../features/birthdayAPI.PNG";
import Burger from "../features/burgerApp.png";
import Alertify from "../features/alertify_sample.png";

function CardBody() {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h3 className="leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-10 lg:text-center">
                        About Me
                    </h3>
                    <p className="mt-4 max-w-4xl text-lg leading-7 text-gray-500 lg:mx-auto">
                        My professional activities include working for United
                        Natural Foods Inc in Ridgefield, WA as a reach lift
                        operator (2011-2020). Before that, I served for the
                        United States Air Force as a Missile and Space Systems
                        Maintenaner (2M0X2). This involved direct missile
                        maintenance on MinuteManIII ICBM, space lift booster and
                        payload processing and R&D activities. More about the
                        accomplishments earned while enlisted are to the right.
                    </p>

                    <p className="mt-4 max-w-4xl text-lg leading-7 text-gray-500 lg:mx-auto">
                        My greatest achievement is my family. We're a family of
                        four; my wife - Alyssandra, daughter - Adaline, and Son
                        - Dean. Oct 1st 2020 will be our 5 year anniversary,
                        looking to celebrate it then Covid free. My daughter
                        just turned 4 years old in March, and my son Dean will
                        be 2 in August.
                    </p>
                    <p className="mt-4 max-w-4xl text-lg leading-7 text-gray-500 lg:mx-auto">
                        Please browse my Portfolio for current and completed
                        work as a full stack programmer student, my LinkedIn,
                        GitHub, and resume can be viewed there as well. If you
                        have any questions please contact me via Contact form.
                    </p>
                </div>

                <div className="mt-10">
                    <h3 className="leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-10 lg:text-center">
                        My Portfolio
                    </h3>
                    <br />
                    <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <li>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-48 w-40 rounded-lg bg-teal-500 overflow-hidden">
                                        <a href="https://alertifyproject.herokuapp.com/">
                                            <img
                                                className="h-40 w-full object-cover"
                                                src={Alertify}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                                        <a href="https://alertifyproject.herokuapp.com/">
                                            Alertify App
                                        </a>
                                    </h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        Alertify is intended to make an impact
                                        on a more secure/safe future. I designed
                                        this with three other classmates while
                                        at the University of Oregon. Click the
                                        image to route to site.
                                    </p>
                                    <br />
                                    <hr />
                                    <p>
                                        <a href="https://github.com/MarkKelly00/Alertify">
                                            Click Here For GitHub Repo
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10 md:mt-0">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-48 w-40 rounded-lg bg-teal-500 overflow-hidden">
                                        <img
                                            className="h-48 w-full object-cover"
                                            src={Birthday}
                                        />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                                        Birthday API
                                    </h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        Since this was our first team
                                        assignment, and our first self directed
                                        project, our team quickly decided that
                                        the project must be something fun and
                                        entertaining. It didn't take much time
                                        to focus on a topic that everyone could
                                        relate to; Birthdays! Click the image to
                                        route to site.
                                    </p>
                                    <br />
                                    <hr />
                                    <p>
                                        <a href="https://github.com/MarkKelly00/About-Your-Birthday">
                                            Click Here For GitHub Repo
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10 md:mt-0">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-48 w-40 rounded-lg bg-teal-500 overflow-hidden">
                                        <a href="https://burgerl0gger.herokuapp.com/burgers">
                                            <img
                                                className="h-48 w-full object-cover"
                                                src={Burger}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                                        <a href="https://burgerl0gger.herokuapp.com/burgers">
                                            Burger App
                                        </a>
                                    </h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        Eat-Da-Burger! An app that lets users
                                        input the names of burgers that they
                                        like to eat. Whenever a user submits a
                                        burger name, it will display on the left
                                        side of the page, waiting to be
                                        devoured. Each burger in the waiting
                                        area also has a Devour it! button. When
                                        the user clicks it, the burger will move
                                        to the right side of the page. Every
                                        burger is stored in a database, whether
                                        devoured or not. Click the image to
                                        route to site.
                                    </p>
                                    <br />
                                    <hr />
                                    <p>
                                        <a href="https://github.com/MarkKelly00/burger">
                                            Click Here For GitHub Repo
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10 md:mt-0">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-48 w-40 rounded-lg bg-teal-500 overflow-hidden">
                                        <a href="https://notekeeping00.herokuapp.com/">
                                            <img
                                                className="h-32 w-full object-cover"
                                                src={Notes}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                                        <a href="https://notekeeping00.herokuapp.com/">
                                            Note Taker
                                        </a>
                                    </h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        An application that can be used to
                                        write, save, and delete notes. This
                                        application uses an express backend to
                                        save and retrieve note data from a JSON
                                        file. Click the image to route to site.
                                    </p>
                                    <br />
                                    <hr />
                                    <p>
                                        <a href="https://github.com/MarkKelly00/noteKeeper">
                                            Click Here For GitHub Repo
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardBody;
