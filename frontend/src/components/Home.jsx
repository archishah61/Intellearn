/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import '../css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Scroll from './Scroll';
import Footer from './Footer';


import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])
    return (
        <div className='bg-deep-teal'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
            {/* Hero Section */}
            <section className="video-section" style={{ position: "relative" }}>
                <div className="video-wrapper container w-full mt-4">
                    <video className="video-fullscreen" autoPlay loop muted>
                        <source src="/student1.mp4" type="video/mp4" />
                    </video>
                    <div className="video-caption-one font-pt text-4xl text-pastel-green"><h1>Transform Your Learning Experience</h1></div>
                    <div className="video-caption-two font-pt text-pastel-green"><h4>Explore our innovative courses designed to help you succeed in today's world.</h4></div>
                    <a href="/signup" className="startbutton text-deep-teal font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-pastel-green transition ease-in-out duration-300">Get Started</a>
                </div>
            </section>
            {/* <!-- Overlapping Feature Section --> */}
            <div className="overlap-container" data-aos="fade-in">
                <div className="overlap-div bg-pastel-green">
                    <h5 className="overlap-div-h5">Popular Courses</h5>
                    <p className="overlap-div-p">Discover the most popular courses loved by our learners.</p>
                </div>
                <div className="overlap-div bg-pastel-green">
                    <h5 className="overlap-div-h5">Modern Library</h5>
                    <p className="overlap-div-p">Access a wide range of modern and relevant learning materials.</p>
                </div>
                <div className="overlap-div bg-pastel-green">
                    <h5 className="overlap-div-h5 ">Certified Teachers</h5>
                    <p className="overlap-div-p">Learn from industry experts with verified credentials.</p>
                </div>
            </div>

            {/* About Us Section */}
            <section className="about-us py-16">
                <div className="container mx-auto px-4 about">
                    <div className="row align-items-center">
                        <div data-aos='fade-left' className="col-md-6 mb-8 md:mb-0">
                            <h2 className="text-5xl font-bold mb-4 text-pastel-green font-pt">About Us</h2>
                            <p className="text-beige text-xl font-nunito">We are dedicated to offering high-quality education that empowers learners to achieve their goals...</p>
                            <a href="/about" className="text-beige text-2xl font-semibold py-3 px-6 hover:text-pastel-green transition">Read more</a>
                            <div className="d-flex align-items-center mb-4 contact">
                                <button className="about-button-hover1">
                                    <i className="fa fa-2x fa-phone-alt text-pastel-green"></i>
                                </button>
                                <div className="ps-4">
                                    <h5 className="mb-2 text-dark-teal text-3xl ">Call to ask any question</h5>
                                    <h4 className="text-pastel-green text-2xl">+919876543210</h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-right' className="col-md-6">
                            <img src="student.jpg" alt="About Us" className="img-fluid rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="courses py-16 bg-deep-teal">
                <div className="container mx-auto px-4 ">
                    <h2 className="text-5xl font-bold text-pastel-green text-center text-decoration-line: underline font-pt mb-8" data-aos='fade-in'>Our Courses</h2>
                    <div className="flex flex-wrap -mx-4">
                        {/* Repeat course cards for different courses */}
                        <div data-aos='fade-in' className="col-md-3" >
                            <div className="card rounded-lg shadow-lg overflow-hidden mr-4">
                                <img src="https://res.cloudinary.com/dslcius6l/image/upload/v1726504369/html_sqym9t.jpg" alt="Course 1" className="card-img-top" />
                                <div className="card-body p-6 bg-pastel-green">
                                    <h5 className="text-dark-teal card-title text-xl font-semibold mb-2">HTML and CSS</h5>
                                    <p className="card-text text-dark-teal mb-4">Brief description of the course.</p>
                                    <a href="/course/5" className="bg-dark-teal text-pastel-green font-semibold py-2 px-4 rounded-lg shadow-md hover:text-dark-teal transition ease-in-out duration-300">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-in' className="col-md-3">
                            <div className="card bg-white rounded-lg shadow-lg overflow-hidden mr-4">
                                <img src="https://res.cloudinary.com/dslcius6l/image/upload/v1726504363/ios_wmjwpb.jpg" alt="Course 2" className="card-img-top" />
                                <div className="card-body p-6 bg-pastel-green">
                                    <h5 className="text-dark-teal card-title text-xl font-semibold mb-2">IOS App Developent</h5>
                                    <p className="card-text text-dark-teal mb-4">Brief description of the course.</p>
                                    <a href="/course/11" className="bg-dark-teal text-pastel-green font-semibold py-2 px-4 rounded-lg shadow-md hover:text-dark-teal transition ease-in-out duration-300">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-in' className="col-md-3">
                            <div className="card bg-white rounded-lg shadow-lg overflow-hidden mr-4">
                                <img src="https://res.cloudinary.com/dslcius6l/image/upload/v1726504362/MLPython1_weh7k7.jpg" alt="Course 3" className="card-img-top" />
                                <div className="card-body p-6 bg-pastel-green">
                                    <h5 className="text-dark-teal card-title text-xl font-semibold mb-2">Machine Learning with python</h5>
                                    <p className="card-text text-dark-teal mb-4">Brief description of the course.</p>
                                    <a href="/course/9" className="bg-dark-teal text-pastel-green font-semibold py-2 px-4 rounded-lg shadow-md hover:text-dark-teal transition ease-in-out duration-300">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-in' className="col-md-3">
                            <div className="card bg-white rounded-lg shadow-lg overflow-hidden mr-4">
                                <img src="https://res.cloudinary.com/dslcius6l/image/upload/v1726504363/Graphic_jpez1k.jpg" alt="Course 3" className="card-img-top"/>
                                <div className="card-body p-6 bg-pastel-green">
                                    <h5 className="text-dark-teal card-title text-xl font-semibold mb-2">Draphic Design Basic</h5>
                                    <p className="card-text text-dark-teal mb-4">Brief description of the course.</p>
                                    <a href="/course/15" className="bg-dark-teal text-pastel-green font-semibold py-2 px-4 rounded-lg shadow-md hover:text-dark-teal transition ease-in-out duration-300">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features py-16">
                <div className="container">
                    <h2 className="text-5xl font-bold text-center text-pastel-green mb-8">Why choose us</h2>
                    <div className="row text-center">
                        <div className="col-md-4" data-aos='fade-right'>
                            <div className="feature-item bg-pastel-green p-4 shadow-md">
                                <h4>Innovative Learning</h4>
                                <p>Interactive and engaging course content.</p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos='fade-in'>
                            <div className="feature-item bg-pastel-green p-4 shadow-md">
                                <h4>Expert Instructors</h4>
                                <p>Learn from industry professionals.</p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos='fade-left'>
                            <div className="feature-item bg-pastel-green p-4 shadow-md">
                                <h4>Flexible Schedule</h4>
                                <p>Learn at your own pace, anytime, anywhere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Reviews Section */}
            <section className="reviews py-16 ">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold text-pastel-green text-center text-decoration-line: underline font-pt mb-8" data-aos='fade-in'>What our student says</h2>
                    <div className="flex flex-wrap -mx-4 text-center">
                        <div className="review-item bg-pastel-green text-dark-teal rounded-lg shadow-lg p-6 mx-4 mb-3 max-w-sm " data-aos='fade-right'>
                            <p className="text-xl font-nunito mb-4">"The courses were fantastic and the instructors were very knowledgeable. Highly recommend!"</p>
                            <p className="font-semibold">-Dhruvil Vyas</p>
                        </div>
                        <div className="review-item bg-pastel-green text-dark-teal rounded-lg shadow-lg p-6 mx-4 mb-3 max-w-sm " data-aos='fade-in'>
                            <p className="text-xl font-nunito mb-4">"A wonderful learning experience. The flexibility and resources provided were top-notch."</p>
                            <p className="font-semibold">-Jane Smith</p>
                        </div>
                        <div className="review-item bg-pastel-green text-dark-teal rounded-lg shadow-lg p-6 mx-4 mb-3 max-w-sm " data-aos='fade-left'>
                            <p className="text-xl font-nunito mb-4">"Teaching nd materials both are very very superb.. I suggest join the class. Highly recommended"</p>
                            <p className="font-semibold">-Aradhana Desai</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="cta bg-pastel-green text-dark-teal text-center py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4 font-pt" data-aos='fade-in'>Ready to Get Started?</h2>
                    <p className="text-xl mb-8 font-nunito">Join us today and take the first step towards achieving your goals.</p>
                    <a href="/signup" className="bg-dark-teal text-pastel-green font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-deep-teal transition ease-in-out duration-300" data-aos='fade-in'>Sign Up Now</a>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats py-16 bg-deep-teal">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-around text-center">
                        <div className="stat-item mb-6 w-full md:w-1/4 bg-pastel-green">
                            <h3 className="text-5xl font-bold mb-2 text-dark-teal">500+</h3>
                            <p className="text-dark-teal">Courses Available</p>
                        </div>
                        <div className="stat-item mb-6 w-full md:w-1/4 bg-pastel-green">
                            <h3 className="text-5xl font-bold mb-2 text-dark-teal">1000+</h3>
                            <p className="text-dark-teal">Happy Students</p>
                        </div>
                        <div className="stat-item mb-6 w-full md:w-1/4 bg-pastel-green">
                            <h3 className="text-5xl font-bold mb-2 text-dark-teal">50+</h3>
                            <p className="text-dark-teal">Expert Instructors</p>
                        </div>
                    </div>
                </div>
            </section>

            <section >
                <div>
                    <Scroll />
                </div>
            </section>
            <section>
            <Footer/>
            </section>
        </div>
    );
}
