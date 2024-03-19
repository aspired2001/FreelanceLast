
import React from "react";
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const ContactCarreer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: '',
        file:File,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Use your EmailJS service details
        const serviceId = 'service_xec3opo';
        const templateId = 'template_0q2ondv';
        const userId = 'wajhoor2001@gmail.com';

        emailjs.sendForm(serviceId, templateId, formData, userId)
            .then((result) => {
                console.log(result.text);
                // Handle success, e.g., show a success message to the user
            }, (error) => {
                console.log(error.text);
                // Handle error, e.g., show an error message to the user
            });

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            mobile: '',
            subject: '',
            message: '',
        });
    };



    return (
        <div className="container mx-auto max-w-md mt-8 p-4 bg-gray-100 rounded-md">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-600">Mobile Number</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-600">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        rows="4"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-600">Upload File</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>


                <button
                    type="submit"

                    className="bg-blue-500 text-white py-2 px-4 
                    
                    rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>

                <FloatingWhatsApp
                    phoneNumber="+919820908809" // Replace with your WhatsApp number
                    accountName="Ritika" // Name displayed in the WhatsApp widget
                    avatar="https://example.com/avatar.jpg" // URL of the avatar image
                    chatMessage="Hello, How can I Help you ?" // Predefined message
                    allowClickAway={true}
                />

            </form>
        </div>
    );
};

export default ContactCarreer;
