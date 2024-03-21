import React from "react";
import ContactCarreer from "./ContactCarrer";
import Footer from "./Footer";


const Carreer=()=>{
    return(
        <div>
             
            <div className="relative overflow-hidden">
                {/* Background image */}
                <img
                    src="https://images.pexels.com/photos/1838552/pexels-photo-1838552.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt=""
                    className="w-full h-[400px] shadow-lg"
                />

                {/* Overlay text */}
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[140px] text-white font-semibold text-xl bg-opacity-70 p-2 cursor-pointer font-serif  whitespace-nowrap">
                    Home &middot; <span className="text-blue-500 hover:text-blue-300 whitespace-nowrap ">Carreer</span>
                </span>
            </div>

            {/* ------------------------ */}
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-9 pt-20">
                <div className="bg-slate-300 shadow-inner rounded-xl pb-8">
                    <h1 className="text-3xl font-serif font-semibold text-center pt-4 text-blue-700">CONTACT US</h1>
                    <ContactCarreer />
                </div>

                {/* Second column */}
                <div className="hidden md:block  rounded-xl pb-8">
                    <h1 className="text-center mt-4 text-3xl font-serif font-bold text-blue-700">CARREERS</h1>

                    <div className="font-serif mt-8 mx-4 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya3xlbnwwfHwwfHx8MA%3D%3D "
                            alt="Image"
                            className="rounded-2xl shadow-transpar w-full h-auto md:w-100 lg:w-104 xl:w-260 2xl:w-300"
                        />
                        <p className="text-justify text-[16px] font-serif mt-4">
                            We are looking for young, energetic, result and target oriented professionals who can excel, think innovatively, and contribute in their respective field. Interested candidates may apply via email: babafoods.ranchi@gmail.com
                        </p>
                    </div>

                </div>

            </div>

            <div className="mt-8">
                <Footer/>
            </div>

        </div>
    )
}

export default Carreer;