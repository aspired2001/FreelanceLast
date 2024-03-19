import React from "react";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './CustomGallery.css'; // Import custom CSS for styling

const useCustomGallery = (width, height, images) => {
    return (
        <div className={`max-w-${width} mx-auto mt-8`}>
            <ImageGallery
                items={images}
                lazyLoad={true}
                showBullets={false}
                showThumbnails={false}
                showNav={false} // Remove side buttons
                showPlayButton={false}
                showFullscreenButton={false}
                autoPlay={true}
                slideInterval={1500}
                slideDuration={550}
                additionalClass="custom-image-gallery "
            />
        </div>
    );
}

export default useCustomGallery;
