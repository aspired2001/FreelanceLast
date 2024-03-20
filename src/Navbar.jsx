import React, { useState, useRef } from 'react';

import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './stylesheets/Brands.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [productsDropdown, setProductsDropdown] = useState(false);
    const [nav, setNav] = useState(false);
    const dropdownTimeoutRef = useRef(null);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnterProducts = () => {
        clearTimeout(dropdownTimeoutRef.current);
        setProductsDropdown(true);
    };

    const handleMouseLeaveProducts = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setProductsDropdown(false);
        }, 60); // 1 second delay
    };


    const navItems = [
        { id: 1, text: 'HOME', link: '/' },
        { id: 2, text: 'CORPORATE PROFILE', link: '/corporate-profile' },
        { id: 3, text: 'OUR PRODUCTS', link: '/our-products' },
        { id: 4, text: 'BOD', link: '/bod' },
        { id: 5, text: 'GALLERY', link: '/gallery-page' },
        { id: 5, text: 'CONTACT US', link: '/contact-us' },
        { id: 5, text: 'CARREER', link: '/carreer' },
    ];

    return (
        <nav className="flex items-center justify-between h-[100px] w-full bg-white space-x-8 px-8 pb-14 border-b-2 text-lg whitespace-nowrap fixed z-[1000] top-0">
            <div className="flex items-center">
                <Link to="/" className="text-blue-700 font-serif font-semibold text-lg animate-navbar">
                    <img src="assets/Logo.png" className="h-[85px] min-[300px]:-translate-x-8 min-[300px]:translate-y-8 min-[300px]:pl-2 min-[300px]:pb-2" alt="Logo" />
                </Link>
            </div>

            <div className="hidden md:flex h-full pt-7 space-x-6 font-serif">
                <Link to="/" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">HOME</Link>

                <div className="relative inline-block">
                    <button
                        type="button"
                        className="inline-flex justify-center gap-x-1.5 rounded-md bg-white text-lg font-medium font-serif text-gray-900 hover:text-blue-700 hover:font-semibold border-none"
                        id="menu-button"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={toggleMenu}
                    >
                        ABOUT US
                    </button>
                    {isOpen && (
                        <div className="absolute top-full right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none space-y-2 translate-y-12 translate-x-14" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                            <Link to="/corporate-profile" className="font-serif hover:bg-blue-600 hover:text-white block px-4 py-2 text-lg" role="menuitem">CORPORATE PROFILE</Link>
                            <Link to="/bod" className="font-serif hover:bg-blue-600 hover:text-white block px-4 py-2 text-lg" role="menuitem">BOD</Link>
                        </div>
                    )}
                </div>

                <div className="relative" onMouseEnter={handleMouseEnterProducts} onMouseLeave={handleMouseLeaveProducts}>
                    <Link className="nav-link cursor-pointer hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">OUR BRANDS</Link>
                    {productsDropdown && (
                        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 z-[1000] w-[600px] rounded-lg translate-y-14">
                            <div className="flex flex-row items-center justify-center h-[145px] space-x-20 px-14 pb-4 pt-8">
                                <div className="brand-item">
                                    <img src="assets/lajawab.jpeg" alt="Lajawab" className="brand-image" />
                                    <span className="brand-name">Lajawab</span>
                                </div>
                                <div className="brand-item">
                                    <img src="assets/Rajababu.webp" alt="Raja Babu" className="brand-image" />
                                    <span className="brand-name">Raja Babu</span>
                                </div>
                                <div className="brand-item">
                                    <img src="assets/kakasteam.jpeg" alt="Kaka Steam" className="brand-image" />
                                    <span className="brand-name">Kaka Steam</span>
                                </div>
                                <div className="brand-item">
                                    <img src="assets/miniket.jpeg" alt="Miniket" className="brand-image" />
                                    <span className="brand-name">Miniket</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <Link to="/our-products" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">OUR PRODUCTS</Link>
                <Link to="/gallery-page" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">GALLERY</Link>
                <Link to="/carreer" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">CAREER</Link>
                <Link to="/contact-us" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">CONTACT US</Link>
            </div>


            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden pt-12 text-blue-700 cursor-pointer '>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-[430px] translate-y-28 translate-x-16 border-gray-900 bg-gray-300 ease-in-out duration-500 font-serif rounded-md'
                        : 'ease-in-out w-[65%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}
                

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        onClick={() => setNav(false)}
                        className='p-4 border-b rounded-xl hover:bg-blue-600 duration-300 hover:text-white cursor-pointer border-gray-600 font-semibold '
                    >
                        <Link to={item.link}>{item.text}</Link>
                    </li>
                ))}
            </ul>
           
        </nav>
    );
};

export default Navbar;
