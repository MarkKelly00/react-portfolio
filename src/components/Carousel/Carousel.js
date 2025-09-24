import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import JSP_8684 from "../../features/JSP_8684.jpg";
import JSP_8934 from "../../features/JSP_8934.jpg";
import JSP_8587 from "../../features/JSP_8587.jpg";

function Carousels() {
    const settings = {
        dots: true, // Show dots for navigation
        infinite: true, // Infinite loop
        speed: 500, // Slide transition speed
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Auto-play carousel
        autoplaySpeed: 3000, // Speed of auto-play transition
        className: "carousel-container", // Add custom class for carousel styling
    };

    return (
        <div className="flex mx-auto content-start flex-wrap h-52 pt-3">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <Slider {...settings}>
                    <div className="carousel-item">
                        <img
                            className="w-full h-auto object-cover"
                            src="https://ca.slack-edge.com/T010U5GV2LT-U011RAC9CSK-f42f5d183d7d-512?text=First slide&bg=373940"
                            alt="First slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="w-full h-auto object-cover"
                            src={JSP_8684}
                            alt="Second slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="w-full h-auto object-cover"
                            src="https://live.staticflickr.com/65535/49873322087_2105a3c4f2_b.jpg?text=Second slide&bg=282c34"
                            alt="Third slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="w-full h-auto object-cover"
                            src={JSP_8934}
                            alt="Fourth slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="w-full h-auto object-cover"
                            src="https://live.staticflickr.com/65535/49873321972_7e9d4833b6_c.jpg?text=Third slide&bg=20232a"
                            alt="Fifth slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="w-full h-auto object-cover"
                            src={JSP_8587}
                            alt="Sixth slide"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Carousels;
