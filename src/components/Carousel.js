import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './index.css';

function Carousels() {
    return (
        <div className="flex content-start flex-wrap h-48">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block h-48 center"
      src="https://ca.slack-edge.com/T010U5GV2LT-U011RAC9CSK-f42f5d183d7d-512?text=First slide&bg=373940"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-48"
      src="https://live.staticflickr.com/65535/49873322087_2105a3c4f2_b.jpg?text=Second slide&bg=282c34"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-48"
      src="https://live.staticflickr.com/65535/49873321972_7e9d4833b6_c.jpg?text=Third slide&bg=20232a"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>
</div>

    )
};

export default Carousels;