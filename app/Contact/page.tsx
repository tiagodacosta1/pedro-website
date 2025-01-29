"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="flex flex-col md:flex-row  min-h-screen bg-black text-white pt-64 pb-32 px-10 md:px-20">
            {/* Left Section */}
            <div className="md:w-1/2 space-y-6">
                <h2 className="text-lg uppercase tracking-wide">Get in Touch</h2>
                <h1 className="text-4xl md:text-5xl font-serif">Interested in working together?</h1>
                <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt />
                    <p>Based in London, available in Europe.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <FaEnvelope />
                    <p>pedro@gmail.com</p>
                </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="md:w-1/2 mt-10 md:mt-16">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="flex space-x-4">
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-1/2 p-2 bg-transparent border-b border-gray-600 focus:outline-none" required />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-1/2 p-2 bg-transparent border-b border-gray-600 focus:outline-none" required />
                    </div>
                    <select name="subject" value={formData.subject} onChange={handleChange} className="w-full p-2 bg-transparent border-b border-gray-600 focus:outline-none" required>
                        <option value="">Subject</option>
                        <option value="project">Project Inquiry</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="other">Other</option>
                    </select>
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 bg-transparent border-b border-gray-600 focus:outline-none min-h-40 resize-y"
                        required
                    />
                    <button type="submit" className="border border-white px-6 py-2 hover:bg-white hover:text-black transition">Send Message</button>
                </form>
            </div>
        </div>
    );
}