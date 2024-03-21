import React from "react";
import Footer from "./Footer";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
        original: 'assets/Gal1.JPG',
        thumbnail: 'assets/Gal1.JPG',
        originalAlt: 'Image 1',
        thumbnailAlt: 'Image 1 Thumbnail'
    },
    {
        original: 'assets/Gal2.JPG',
        thumbnail: 'assets/Gal2.JPG',
        originalAlt: 'Image 2', 
        thumbnailAlt: 'Image 2 Thumbnail'
    },
    {
        original: 'assets/Gal3.JPG',
        thumbnail: 'assets/Gal3.JPG',
        originalAlt: 'Image 3',
        thumbnailAlt: 'Image 3 Thumbnail'
    },
    {
        original: 'assets/Gal4.JPG',
        thumbnail: 'assets/Gal4.JPG',
        originalAlt: 'Image 4',
        thumbnailAlt: 'Image 4 Thumbnail'
    },
    {
        original: 'assets/Gal5.JPG',
        thumbnail: 'assets/Gal5.JPG',
        originalAlt: 'Image 5',
        thumbnailAlt: 'Image 5 Thumbnail'
    },
    {
        original: 'assets/Gal6.JPG',
        thumbnail: 'assets/Gal6.JPG',
        originalAlt: 'Image 6',
        thumbnailAlt: 'Image 6 Thumbnail'
    },
    {
        original: 'assets/Gal7.JPG',
        thumbnail: 'assets/Gal7.JPG',
        originalAlt: 'Image 7',
        thumbnailAlt: 'Image 7 Thumbnail'
    },
    {
        original: 'assets/Gal8.JPG',
        thumbnail: 'assets/Gal8.JPG',
        originalAlt: 'Image 8',
        thumbnailAlt: 'Image 8 Thumbnail'
    },
    {
        original: 'assets/Gal9.JPG',
        thumbnail: 'assets/Gal9.JPG',
        originalAlt: 'Image 9',
        thumbnailAlt: 'Image 9 Thumbnail'
    },
    {
        original: 'assets/Gal10.JPG',
        thumbnail: 'assets/Gal10.JPG',
        originalAlt: 'Image 10',
        thumbnailAlt: 'Image 10 Thumbnail'
    },
    {
        original: 'assets/Gal11.JPG',
        thumbnail: 'assets/Gal11.JPG',
        originalAlt: 'Image 11',
        thumbnailAlt: 'Image 11 Thumbnail'
    },
    {
        original: 'assets/Gal12.JPG',
        thumbnail: 'assets/Gal12.JPG',
        originalAlt: 'Image 12',
        thumbnailAlt: 'Image 12 Thumbnail'
    },
    {
        original: 'assets/Gal13.JPG',
        thumbnail: 'assets/Gal13.JPG',
        originalAlt: 'Image 13',
        thumbnailAlt: 'Image 13 Thumbnail'
    },
    {
        original: 'assets/Gal14.JPG',
        thumbnail: 'assets/Gal14.JPG',
        originalAlt: 'Image 14',
        thumbnailAlt: 'Image 14 Thumbnail'
    },
    // Add more images here
];


const GalleryPage = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                {/* Background image */}
                <img
                    src="https://images.pexels.com/photos/1838552/pexels-photo-1838552.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt=""
                    className="w-full h-[400px] shadow-lg"
                />

                {/* Overlay text */}
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[140px] text-white font-semibold text-xl bg-opacity-70 p-2 cursor-pointer font-serif">
                    Home &middot; <span className="text-blue-500 hover:text-blue-300">Gallery</span>
                </span>
            </div>


            <div className="max-w-6xl mx-auto mt-8">
                <ImageGallery
                    items={images}
                    lazyLoad={true}
                    showBullets={true}
                    showThumbnails={true}
                    showNav={false} // Remove side buttons
                    showPlayButton={false}
                    showFullscreenButton={false}
                    autoPlay={true}
                    slideInterval={1500}
                    slideDuration={550}
                />
            </div>
           
           
            <div className="mt-[60px]">
                <Footer />
            </div>
        </>
    );
}

export default GalleryPage;
