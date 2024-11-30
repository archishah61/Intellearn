
import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {
    useEffect(()=>{
        Aos.init({duration:1200});
    },[])
    return (
        <div className="min-h-screen bg-deep-teal">
            <header className="bg-pastel-green text-dark-teal py-6 shadow-md">
                <div className="container mx-auto px-6 flex justify-center" data-aos="fade-in">
                    <h1 className="text-4xl font-pt text-decoration-line: underline font-bold">IntelLearn</h1>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                <section className="bg-pastel-green rounded-lg shadow-lg p-8 mb-12" data-aos="fade-in">
                    <h2 className="text-4xl font-semibold mb-6 text-dark-teal font-nunito">Contact Us</h2>
                    <p className="text-xl font-nunito mb-6 text-dark-teal">
                        We'd love to hear from you! Whether you have questions, feedback, or inquiries, please fill out the form below or reach out to us directly.
                    </p>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-dark-teal mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-dark-teal mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-lg font-medium text-dark-teal mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-dark-teal text-pastel-green text-md py-3 px-6 rounded-lg shadow-md hover:text-dark-teal transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </section>

                <section className="bg-pastel-green rounded-lg shadow-lg p-8" data-aos="fade-in">
                    <h2 className="text-3xl font-semibold mb-6 text-dark-teal">Our Contact Information</h2>
                    <p className="text-xl mb-4 text-dark-teal">
                        Email: <a href="#" className="text-deep-teal text-lg hover:underline">intellearn@smarteducation.com</a>
                    </p>
                    <p className="text-xl text-dark-teal">
                        Phone: <a href="#" className="text-deep-teal text-lg hover:underline">+919876543210</a>
                    </p>
                </section>
            </main>

            <footer className="bg-dark-teal text-pastel-green py-4 mt-8">
                <div className="container text-lg mx-auto text-center">
                    <p>&copy; 2024 IntelLearn. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
