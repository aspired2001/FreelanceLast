import React from "react";

const Footer = () => {
    return (
        <footer className=" relative bg-white dark:bg-blue-700 mt-8">

            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 font-serif">
                    {/* Company */}
                    <div>
                        <h2 className="mb-6 text-2xl font-semibold text-gray-900 uppercase dark:text-white ">Balaji Agro Tech.</h2>
                         
                         <img src="/assets/Logo.png"
                                className="w-[100px] h-[100px] ml-[71px]"
                         />

                    </div>
                    {/* Logo */}
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">COMPANY</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="/bod" className="hover:underline">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="/carreer" className="hover:underline">Careers</a>
                            </li>
                            <li className="mb-4">
                                <a href="/our-products" className="hover:underline">Products</a>
                            </li>

                        </ul>
                    </div>

                    {/* Help Center */}
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">

                            <li className="mb-4">
                                <a href="#" className="hover:underline">Instagram</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="/contact-us" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">CONTACTS</h2>
                         
                        <p className="text-md  text-gray-400 mt-2 cursor-pointer hover:text-blue-700">
                            Desk: <a href="tel:+918885416559">08885416559</a>
                        </p>
                        <p className="text-md  text-gray-400 mt-2 cursor-pointer hover:text-blue-700">
                            Mill: <a href="tel:+916502507840">0650-2507840</a>
                        </p>
                        <p className="text-md  text-gray-400 mt-2 cursor-pointer hover:text-blue-700">
                            Order: <a href="mailto:sales@balajiagrotech.co.in">sales@balajiagrotech.co.in</a>
                        </p>
                    </div>


               
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;
