import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const ContactCareer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // Clear errors when user starts typing again
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple form validation
        const validationErrors = {};
        if (!formData.name.trim()) {
            validationErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Email is invalid';
        }
        if (!formData.mobile.trim()) {
            validationErrors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            validationErrors.mobile = 'Mobile number is invalid';
        }
        if (!formData.subject.trim()) {
            validationErrors.subject = 'Subject is required';
        }
        if (!formData.message.trim()) {
            validationErrors.message = 'Message is required';
        }

        if (Object.keys(validationErrors).length > 0) {
            // If there are validation errors, update state and prevent submission
            setErrors(validationErrors);
            return;
        }

        try {
            // Use your EmailJS service details
            const serviceId = 'service_zz0skre'; // Replace with your EmailJS service ID
            const templateId = 'template_wbil7sc'; // Replace with your EmailJS template ID
            const userId = 'FNsSM1CPsJCPS3oHl'; // Replace with your EmailJS user ID;

            // Send form data to EmailJS
            const templateParams = {
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                subject: formData.subject,
                message: formData.message,
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then((result) => {
                    console.log(result.text);
                    // Show success notification
                    toast.success('Form submitted successfully!');
                    // Reset form after successful submission
                    setFormData({
                        name: '',
                        email: '',
                        mobile: '',
                        subject: '',
                        message: '',
                    });
                }, (error) => {
                    console.log(error.text);
                    // Handle error, e.g., show an error message to the user
                    toast.error('Failed to submit form. Please try again later.');
                });
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, e.g., show an error message to the user
            toast.error('Failed to submit form. Please try again later.');
        }
    };

    return (
        <div className="container mx-auto max-w-md mt-8 p-4 bg-gray-100 rounded-md">
            <ToastContainer />
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
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                    {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
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
                    {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
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
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
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

export default ContactCareer;
