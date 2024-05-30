import React from "react";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { FaInstagramSquare } from "react-icons/fa";
import MapComponent from "./MapComponent";

const ContactUs = () => {
   return (
      <div className="mt-[101px]">
         <div className="relative overflow-hidden">
            {/* Background image */}
            <img
               src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww"
               alt=""
               className="w-full h-[400px] shadow-lg"
            />

            {/* Overlay text */}
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[140px] text-white font-semibold text-xl bg-opacity-70 p-2 cursor-pointer font-serif whitespace-nowrap">
               Home &middot; <span className="max-sm:text-2xl text-blue-500 hover:text-blue-300 whitespace-nowrap">Contact Us</span>
            </span>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-36 pt-20">
            <div className="bg-slate-300 shadow-inner rounded-xl pb-8">
               <h1 className="text-3xl font-serif font-semibold text-center pt-4 text-blue-700">CONTACT US</h1>
               <ContactForm />
            </div>

            {/* Second column */}
            <div className="hidden md:block bg-gray-200 rounded-xl pb-8">
               <h1 className="text-center mt-4 text-3xl font-serif font-bold text-blue-700">ADDRESS</h1>

               <div className="font-serif mt-8 ml-8">
                  <p className="text-lg font-semibold text-gray-700">Balaji AgroTech Industries</p>
                  <p className="text-md font-semibold text-gray-600 mt-2">Tikratoli, Nagri, Ranchi 835303, Jharkhand, India</p>
                  <p className="text-md font-semibold text-gray-600 mt-2">Nagri, Ranchi, Jharkhand, India</p>
                  <p className="text-md font-semibold text-gray-600 mt-2 cursor-pointer hover:text-blue-700">
                     Mill: <a href="tel:+919608086621">9608086621</a>
                  </p>
                  <p className="text-md font-semibold text-gray-600 mt-2 cursor-pointer hover:text-blue-700">
                     Desk: <a href="tel:+919835078799">9835078799</a>
                  </p>
                  <p className="text-md font-semibold text-gray-600 mt-2 cursor-pointer hover:text-blue-700">
                     Order: <a href="mailto:sales@balajiagrotech.co.in">balajiagrotechindustries01@gmail.com</a>
                  </p>
                  <p className="text-md font-semibold text-gray-600 mt-2 cursor-pointer hover:text-blue-700">
                     Career: <a href="mailto:hr@balajiagrotech.co.in">balajiagrotechindustries01@gmail.com</a>
                  </p>
                  <p>
                      {/* <FaInstagramSquare size={ */}
                  </p>
               </div>
            </div>

         </div>

         <div className="">
            <MapComponent/>
         </div>

         <div className="mt-[60px] w-[100%]">
            <Footer />
         </div>
      </div>
   );
}

export default ContactUs;
