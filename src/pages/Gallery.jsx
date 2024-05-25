import React from "react";

import '../stylesheets/Gallery.css'; // Create this file for custom styles if needed

import PropTypes from 'prop-types';

const images = '/assets/slide.png';


const Gallery = ({ animate }) => {


    return (
        <div className={`transition-all duration-1000 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
      
            <img
               alt="slider"
               src={images}
               className="w-[100vw] max-sm:h-[40vh] md:h-[60vh] lg:h-[60vh] 2xl:h-[60vh] "
           />
      
        </div>
    );
};

Gallery.propTypes = {
    animate: PropTypes.bool.isRequired,
};

export default Gallery;
