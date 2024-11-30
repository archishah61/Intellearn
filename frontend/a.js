/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import i1 from "../../assets/images/blog_8.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HtmlCourse.css";
import { Modal, Button, Form } from "react-bootstrap";
import LoginContext from "../../contexts/LoginContext";


function HTMLCourse() {
    const [coursesData, setCoursesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false); // To control modal visibility
    const specificCourseId = 4;

    const {loggedin,email} = useContext(LoginContext)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}Course`);
                if (!response.ok) {
                    throw new Error("Network response was not okay!");
                }
                const result = await response.json();
                setCoursesData(result); // Set the fetched data to state
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleEnrollClick = () => {
        setShowModal(true); // Show the modal when "Enroll Now" is clicked
    };

    const handleClose = () => {
        setShowModal(false); // Close the modal
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        // Handle the payment submission logic here
        alert("Payment submitted successfully!");
        setShowModal(false); // Close the modal after submission
    };

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
                integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossOrigin="anonymous"
            />

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>

            <div>
                <div className="row" style={{ width: "100%" }}>
                    <div className="col-8" style={{ paddingTop: "50px", paddingLeft: "100px" }}>
                        <h4>HTML/CSS for Web Development</h4> <br />

                        <div style={{ height: "100px", display: "inline-block" }}>
                            <b>Author</b>
                            <p>Name</p>
                        </div>
                        <div style={{ height: "40px", border: "1px solid gray", width: "0px", display: "inline-block", margin: "0px 20px" }}></div>
                        <div style={{ height: "100px", display: "inline-block" }}>
                            <b>CATEGORY</b>
                            <p>Web</p>
                        </div>
                        <div style={{ height: "40px", border: "1px solid gray", width: "0px", display: "inline-block", margin: "0px 20px" }}></div>
                        <div style={{ height: "100px", display: "inline-block" }}>
                            <b>RATING</b>
                            <p>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </p>
                        </div>
                        <div style={{ height: "40px", border: "1px solid gray", width: "0px", display: "inline-block", margin: "0px 20px" }}></div>
                        <div style={{ height: "100px", display: "inline-block" }}>
                            <b>PRICE</b>
                            <p>
                                <i className="fa fa-inr" aria-hidden="true" style={{ marginTop: "10px" }}></i>1000
                            </p>
                        </div>

                        <div>
                            <img src={i1} alt="..." style={{ height: "400px" }} />
                        </div>

                        <div className="course-page">
                            <div style={{ marginTop: "50px" }}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet ipsam accusantium id blanditiis unde reprehenderit quod debitis, sit corporis excepturi illo veniam ea laboriosam molestiae ducimus inventore porro enim.
                            </div>
                        </div>
                    </div>

                    <div className="col-4" style={{ width: "300px" }}>
                        <div className="course-details">
                            Course Details
                            <div style={{ height: "1px", border: "1.5px solid green", width: "45px", marginTop: "10px" }}></div>

                            {/* Enroll Button */}
                            <div>
                                <button className="enroll" onClick={handleEnrollClick}>
                                    Enroll Now
                                </button>
                            </div>

                            {/* Modal for Payment Form */}
                            <Modal show={showModal} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Payment Details</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handlePaymentSubmit}>
                                        <Form.Group className="mb-3" controlId="formCardNumber">
                                            <Form.Label>Card Number</Form.Label>
                                            <Form.Control type="text" placeholder="Enter card number" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formCardHolder">
                                            <Form.Label>Cardholder Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter cardholder name" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formExpirationDate">
                                            <Form.Label>Expiration Date</Form.Label>
                                            <Form.Control type="text" placeholder="MM/YY" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formCVV">
                                            <Form.Label>CVV</Form.Label>
                                            <Form.Control type="text" placeholder="CVV" required />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Submit Payment
                                        </Button>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HTMLCourse;
