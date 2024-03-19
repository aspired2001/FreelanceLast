import React ,  { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './stylesheets/Brands.css';

const Navbar = () => {
    const [aboutUsDropdown, setAboutUsDropdown] = useState(false);
    const [productsDropdown, setProductsDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownTimeoutRef = useRef(null);

    const handleMouseEnterAboutUs = () => {
        clearTimeout(dropdownTimeoutRef.current);
        setAboutUsDropdown(true);
    };

    const handleMouseLeaveAboutUs = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setAboutUsDropdown(false);
        }, 60); // 1 second delay
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

    return (
        <nav className="flex items-center justify-around h-[100px] w-full bg-white space-x-8 px-8 pb-14 border-b-2 text-lg whitespace-nowrap fixed z-[1000] top-0">
            <div className="h-[95%] pt-[5px] md:pl-0 md:pr-5 pl-5 ">
                <Link to="/" className="text-blue-700 font-serif font-semibold text-lg animate-navbar">
                    <img src="assets/Logo.png" className="h-[85px] min-[300px]:-translate-x-24 min-[300px]:pl-4   " />
                </Link>
            </div>


            <div className="hidden md:flex h-full pt-7 space-x-6 font-serif">
                <Link to="/" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">HOME</Link>

                <div className="relative" onMouseEnter={handleMouseEnterAboutUs} onMouseLeave={handleMouseLeaveAboutUs}>
                    <span className="nav-link cursor-pointer hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">ABOUT US</span>
                    {aboutUsDropdown && (
                        <div className="flex flex-col bg-white translate-y-14 -translate-x-24 absolute top-full h-[150px] w-[250px] space-y-5 rounded-xl items-center ">
                            <Link to="/corporate-profile" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50 pt-8">CORPORATE PROFILE</Link>
                            <Link to="/bod" className="nav-link ml-4 hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50 pt-8">BOD</Link>
                        </div>
                    )}
                </div>

               

                <div className="relative" onMouseEnter={handleMouseEnterProducts} onMouseLeave={handleMouseLeaveProducts}>
                    <Link
                    className="nav-link cursor-pointer hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">OUR BRANDS</Link>
                    {productsDropdown && (
                        <div className="absolute left-0 right-0 top-full bg-white border border-gray-200 z-[1000] w-[600px] -translate-x-48 translate-y-14 rounded-lg ">
                            <div className="flex flex-row items-center justify-center h-[145px] space-x-20 px-14 pb-4 pt-8">
                                <div className="brand-item ">
                                    <img src="assets/lajawab.jpeg" alt="brand" className="brand-image" />
                                    <span className="brand-name">Lajawab</span>
                                </div>
                                <div className="brand-item ">
                                    <img src="assets/Rajababu.webp" alt="Brand 2" className="brand-image" />
                                    <span className="brand-name">Raja Babu</span>
                                </div>
                                <div className="brand-item ">
                                    <img src="assets/kakasteam.jpeg" alt="brand" className="brand-image" />
                                    <span className="brand-name">Kaka Steam</span>
                                </div>
                                <div className="brand-item ">
                                    <img src="assets/miniket.jpeg" alt="Brand 4" className="brand-image" />
                                    <span className="brand-name">Miniket</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <Link to="/our-products" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">OUR PRODUCTS</Link>


                <Link to="/gallery-page" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">GALLERY</Link>
                <Link to="/carreer" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">CARREER</Link>
                <Link to="/contact-us" className="nav-link hover:text-blue-800 hover:font-semibold hover:transition-all hover:ease-in-out hover:delay-50">CONTACT US</Link>
            </div>

            <div className="md:hidden cursor-pointer pt-14 " onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <FaTimes className="text-blue-700 text-xl " /> : <FaBars className="text-blue-700 text-xl " />}
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden   inset-0 overflow-hidden z-50 ">
                    <div className="flex justify-center items-center h-full">
                        <div className="absolute top-[100px] left-0 w-full max-w-sm p-6 bg-white rounded-xl shadow-md translate-x-12 ">
                            <div className="flex flex-col space-y-4">
                                <Link to="/" className="mobile-nav-link">HOME</Link>
                                <Link to="/corporate-profile" className="mobile-nav-link">CORPORATE PROFILE</Link>
                                <Link to="/our-products" className="mobile-nav-link">OUR PRODUCTS</Link>
                                <Link to="/bod" className="mobile-nav-link">BOD</Link>
                                <Link to="/gallery-page" className="mobile-nav-link">GALLERY</Link>
                                <Link to="/contact-us" className="mobile-nav-link">CONTACT US</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
