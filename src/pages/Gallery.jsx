import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../stylesheets/Gallery.css'; // Create this file for custom styles if needed

import PropTypes from 'prop-types';

const images = [
    '/assets/Slide1.jpg',
    '/assets/Slide2.jpg',
    '/assets/Slide3.jpg',
    '/assets/Slide4.jpg',
    // Add more images as needed
];

const Gallery = ({ animate }) => {
    const settings = {
        dots: false, // Set to false to hide the progress dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        appendDots: (dots) => (
            <ul style={{ display: 'none' }}>
                {/* Set display to 'none' to hide the black dots */}
                {dots}
            </ul>
        ),
    };

    return (
        <div className={`transition-all duration-1000 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <div className="overlay"></div>
                        <img
                            src={image}
                            alt={`slide-${index + 1}`}
                        />
                    </div>
                ))}
            </Slider>
        </div>
        </div>
    );
};

Gallery.propTypes = {
    animate: PropTypes.bool.isRequired,
};

export default Gallery;
