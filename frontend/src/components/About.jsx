import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=>{
        Aos.init({duration:1200});
    },[])
    return (
        <div className="min-h-screen bg-deep-teal ">
            <header className=" bg-pastel-green text-dark-teal py-4">
                <div className="container mx-auto text-4xl px-4" data-aos="fade-in">
                    <h1 className="font-bold text-decoration-line: underline font-pt">IntelLearn</h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <section className="bg-beige rounded-lg shadow-md p-6 mb-8" data-aos="fade-left">
                    <h2 className="text-3xl text-dark-teal font-semibold mb-4">About Us</h2>
                    <p className="text-lg mb-4 text-dark-teal font-nunito">
                        Welcome to the Smart Education System, where we leverage cutting-edge technology to enhance the learning experience. Our platform is designed to provide a personalized education experience for every student, making learning more engaging and effective.
                    </p>
                    <p className="text-lg mb-4 text-dark-teal font-nunito">
                        Our system integrates advanced analytics, artificial intelligence, and interactive content to adapt to the needs of each learner. We believe in making education accessible, efficient, and enjoyable for everyone.
                    </p>
                    <p className="text-lg mb-4 text-dark-teal font-nunito">
                        With a user-friendly interface and a variety of tools, we aim to support educators in delivering high-quality education and empower students to achieve their full potential.
                    </p>
                </section>

                <section className="bg-beige rounded-lg shadow-md p-6" data-aos="fade-right">
                    <h2 className="text-3xl text-dark-teal font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg text-dark-teal font-nunito">
                        Our mission is to revolutionize education by providing innovative solutions that cater to diverse learning needs. We strive to create an inclusive educational environment that promotes continuous learning and growth.
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
