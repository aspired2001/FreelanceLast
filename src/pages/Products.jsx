import React from "react";
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`text-yellow-400 ${i < rating ? 'fill-current' : 'fill-transparent'} text-xl`}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className=" h-[450px]    flex flex-col items-center justify-center bg-transparent border-2  p-6 rounded-md shadow-md">
            {/* Wrapping div with flex for the image */}
            <div className="flex h-44 mb-12">
                <div className="w-[160px] h-[200px] bg-cover bg-center rounded-[15px] relative overflow-hidden">
                    <img className="object-cover w-full h-full transition duration-300 transform hover:scale-105 cursor-pointer" src={product.image} alt="Product" />
                    {/* Additional content if needed */}
                </div>
            </div>
            <h2 className="text-xl text-white font-semibold mb-2 text-center">{product.name}</h2>
            <div className="flex mb-2">{renderStars(product.rating)}</div>
            <Link
                to="/our-products" // Replace with your actual link
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600  transition duration-300 font-serif"
            >
                More Details
            </Link>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

const Products = ({ animate }) => {
    const products = [
        { id: 1, name: 'KAKA STEAM SONAM', image: 'assets/kakasteam.jpeg', rating: 4 },
        { id: 2, name: 'LAJAWAB PREMIUM RICE', image: 'assets/lajawab.jpeg', rating: 3 },
        { id: 3, name: 'RAJABABU PREMIUM RICE', image: 'assets/Rajababu.webp', rating: 5 },
        { id: 4, name: 'MINIKET RICE', image: 'assets/miniket.jpeg', rating: 4 },
        // Add more products as needed
    ];

    return (
        <div className={`transition-all duration-1000 pt-8 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5),rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('assets/Rice.png')` }} className="bg-cover bg-center py-16 rounded-sm">
            <div className=' text-center mb-7 ' >
                <span className='text-white text-[40px] font-bold font-serif '>Our Brands</span>
            </div>
           
            <div className="container px-[60px] space-x-4  ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

Products.propTypes = {
    animate: PropTypes.bool.isRequired,
};

export default Products;
