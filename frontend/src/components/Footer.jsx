
import React from 'react';
import '../css/Footer.css'; // Assuming you want to add some styles

const Footer = () => {
    return (
        <footer className="bg-dark-teal text-pastel-green py-4">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h5 className="font-bold">Connect with Us</h5>
                    <div className="social-icons">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className="mb-2">
                    <p>© 2024 Your Company. All rights reserved.</p>
                </div>
                <div>
                    <p>
                        <a href="#" className="text-pastel-green">Privacy Policy</a> | 
                        <a href="#" className="text-pastel-green"> Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
