import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';

const ProductCard = ({ bgColor, imageSrc, name }) => (
    <div className={` w-[18rem] h-[25rem] flex-shrink-0 m-6 relative overflow-hidden ${bgColor} rounded-lg max-w-xs shadow-lg group`}>
        <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
        >
            <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
            />
            <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
            />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                    background: 'radial-gradient(black, transparent 60%)',
                    transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                    opacity: 0.2,
                }}
            ></div>
            <img className="relative w-[14rem] h-[18rem]" src={imageSrc} alt={name} />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
            <div className="flex justify-center items-center">
                <span className="block font-serif text-xl ">{name}</span>
            </div>
        </div>
    </div>
);

ProductCard.propTypes = {
    bgColor: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

const OurProducts = () => (
    <div className='pt-40'>
        <h1 className='text-blue-500 font-semibold text-center text-2xl  md:text-xl lg:text-2xl xl:text-[2rem] font-serif'>Our Products</h1>
        <div className="pt-10 flex flex-wrap items-center justify-center">

            <ProductCard
                bgColor="bg-blue-800"
                imageSrc="assets/image.png"
                name="Raja Babu"
            />
            <ProductCard
                bgColor="bg-teal-500"
                imageSrc="assets/image1.png"
                name="Miniket"
            />
            <ProductCard
                bgColor="bg-orange-500"
                imageSrc="assets/image2.png"
                name="Kaka Basmati"
            />
            <ProductCard
                bgColor="bg-orange-500"
                imageSrc="assets/image3.png"
                name="Steam Sonam"
            />
            <ProductCard
                bgColor="bg-orange-500"
                imageSrc="assets/image4.png"
                name="Sella Katarni"
            />
            <ProductCard
                bgColor="bg-orange-500"
                imageSrc="assets/image5.png"
                name="Special Sonachur"
            />
            <ProductCard
                bgColor="bg-orange-500"
                imageSrc="assets/image6.png"
                name="Special Jeerakati"
            />
            <ProductCard
                bgColor="bg-orange-500"
                imageSrc="assets/image7.png"
                name="Special Steam Katarni"
            />
            <ProductCard
                bgColor="bg-orange-500"
                imageSrc="assets/image8.png"
                name="Lajawab Special Rice"
            />
        </div>

        <div>
            <Footer />
        </div>

    </div>
);

export default OurProducts;
