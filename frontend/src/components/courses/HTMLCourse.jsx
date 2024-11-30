/* eslint-disable no-unused-vars */
import React, { useContext } from "react"
import i1 from '../../assets/images/blog_8.webp'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import i2 from '../../assets/images/instructor-1.jpg'
import { Accordion } from "react-bootstrap";
import { FaVideo, FaEye } from "react-icons/fa"; // Icons for Video and Preview
import { AiFillLock } from "react-icons/ai"; // Lock icon
import { Modal, Button, Form } from "react-bootstrap";
import LoginContext from "../../contexts/LoginContext";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import './HtmlCourse.css'



function HTMLCourse() {

    const [overview, setoverview] = useState(<>
        <h3>Course Description</h3>
        <div style={{ width: '100px', border: '2px solid lightgreen', marginTop: '10px' }}></div>
        <p style={{ marginTop: '10px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, at veniam corrupti delectus quidem quasi esse optio, voluptate, nostrum inventore omnis consectetur doloribus! Odio laudantium eum, dignissimos facere fuga sapiente</p>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis eum beatae libero maxime magni rem non aut quis id dolorem laboriosam provident vel ipsum, doloribus nemo iure aspernatur aliquam dignissimos cum voluptas? Culpa soluta velit pariatur voluptatem quia dignissimos, vero molestias sed aliquam rem eveniet magnam quaerat sequi nostrum consectetur iste porro fugiat mollitia minima eum ducimus deleniti quam, fugit repellat. Minima voluptates, velit reprehenderit voluptate laboriosam, repellat natus maxime fugiat ullam inventore atque id ipsam nulla eius tempore incidunt dolor odio optio nihil fugit! Nemo dolor, sapiente voluptas temporibus aliquam amet sint eaque suscipit iste assumenda eos repellendus.</p>
    </>)
    const [Curriculum, setCurriculum] = useState("")
    const [instructor, setInstructor] = useState("")
    const [Reviews, setReviews] = useState("")
    const [coursesData, setCoursesData] = useState([]);
    const [showModal, setShowModal] = useState(false); // To control modal visibility
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { email, loggedin } = useContext(LoginContext)
    const [userId, setUserId] = useState(null); // To store the user ID
    const [enrolledCourse, setEnrolledCourse] = useState([])
    const { courseId } = useParams()
    const [courseDetails, setCourseDetails] = useState([])



    const navigate = useNavigate();  // Initialize navigate for redirection


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}Course`);
                if (!response.ok) {
                    throw new Error("Network response was not okay!");
                }
                const result = await response.json();
                setCoursesData(result); // Set the fetched data to state

                const courseDetails = result.find(course => course.id === Number(courseId));

                if (courseDetails) {
                    setCourseDetails(courseDetails); // Set the matched course details
                } else {
                    console.log("Course not found");
                }

                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        async function fetchUserId() {
            try {
                const response = await fetch('http://localhost:8000/api/users/');
                if (!response.ok) {
                    throw new Error("Network response was not okay!");
                }
                const users = await response.json();
                const user = users.find(user => user.email === email);
                if (user) {
                    setUserId(user.id);
                    const courseIds = user.enrolled_courses.map(course => course.course);
                    console.log(courseIds)
                    console.log(courseId)
                    setEnrolledCourse(courseIds)
                } else {
                    console.log('User not found');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        fetchData();
        if (email) {
            fetchUserId(); // Fetch user ID if email is available
        }
    }, [email, courseId]);

    const handleEnrollClick = () => {
        if (loggedin) {
            if (enrolledCourse.includes(Number(courseId))) {
                alert("You are already enrolled in this course.");
                navigate(`/Mycourses/${Number(courseId)}`)
            } else {
                setShowModal(true);  // Show the modal if user is not already enrolled
            }
        } else {
            navigate("/login");  // Redirect to login page if not logged in
        }
    };

    const handleClose = () => {
        setShowModal(false); // Close the modal
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        const enrollmentData = {
            user: userId, // Use actual user ID from context
            course: courseId, // Replace with the actual course ID (you can pass it dynamically)
            status: 'enrolled',
        };

        // Use axios to post the enrollment data to the backend
        axios.post('http://localhost:8000/api/EnrolledCourse/', enrollmentData)
            .then((response) => {
                if (response.status === 201) {
                    alert("Enrollment successful!");
                    setShowModal(false); // Close modal after successful enrollment
                } else {
                    alert("Enrollment failed. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error enrolling in course:", error);
                alert("An error occurred. Please try again later.");
            });
    };

    // Helper function to render videos
    const renderVideos = (videos) => {
        return videos.map((video) => (
            <div key={video.id} className="video-item" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <FaVideo style={{ marginRight: "10px" }} /> {/* Video Icon */}
                <div style={{ flex: 1 }}>
                    <strong>Video :</strong> {video.title}
                </div>
                <div style={{ marginRight: "15px" }}>
                    <span>⏰ {video.duration}</span>
                </div>

                <AiFillLock size={20} color="gray" />
            </div>
        ));
    }
    // Render loading or error messages
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Filter to find the specific course by ID
    const specificCourse = coursesData.find((course) => course.id === Number(courseId));
    console.log(specificCourse)
    console.log(courseId)

    if (!specificCourse) {
        return <div>No course found with ID {courseId}</div>;
    }


    const c = () => {
        return (
            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className="accordion-item">
                        <Accordion.Header>
                            Intro Course Content
                            <div
                                style={{
                                    width: "100px",
                                    marginLeft: "10px",
                                    border: "1px solid black",
                                    borderRadius: "10px",
                                    textAlign: "center",
                                }}
                            >
                                02hr 35min
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            {specificCourse.intro_contents && renderVideos(specificCourse.intro_contents)}
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                        <Accordion.Header>
                            Course Fundamentals
                            <div
                                style={{
                                    width: "100px",
                                    marginLeft: "10px",
                                    border: "1px solid black",
                                    borderRadius: "10px",
                                    textAlign: "center",
                                }}
                            >
                                02hr 35min
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            {specificCourse.fundamentals && renderVideos(specificCourse.fundamentals)}
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                        <Accordion.Header>
                            Course Core Concept
                            <div
                                style={{
                                    width: "100px",
                                    marginLeft: "10px",
                                    border: "1px solid black",
                                    borderRadius: "10px",
                                    textAlign: "center",
                                }}
                            >
                                02hr 35min
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            {specificCourse.core_concepts && renderVideos(specificCourse.core_concepts)}
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                        <Accordion.Header>
                            Course Key Features
                            <div
                                style={{
                                    width: "100px",
                                    marginLeft: "10px",
                                    border: "1px solid black",
                                    borderRadius: "10px",
                                    textAlign: "center",
                                }}
                            >
                                02hr 35min
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            {specificCourse.key_features && renderVideos(specificCourse.key_features)}
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="accordion-item">
                        <Accordion.Header>
                            Course Conclusion
                            <div
                                style={{
                                    width: "100px",
                                    marginLeft: "10px",
                                    border: "1px solid black",
                                    borderRadius: "10px",
                                    textAlign: "center",
                                }}
                            >
                                02hr 35min
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            {specificCourse.conclusions && renderVideos(specificCourse.conclusions)}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );


    }

    const i = () => {
        return (
            <>
                <div>
                    <h3>Course Instructor </h3>
                    <div style={{ width: '150px', border: '2px solid lightgreen' }}></div>
                    <div style={{ marginTop: '20px' }}>
                        <img src={i2} alt="..." className="instructor-img" />
                        <div className="instructor">
                            <h6>Mark Shadow</h6>
                            <p >Senior Lecturer</p>

                            <p style={{ marginTop: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsa doloremque quas mollitia ut blanditiis odio nulla! Quas dolor sequi voluptatibus dolorum amet dolore. Aliquam pariatur eaque earum reprehenderit. Repellendus.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const handleOverview = () => {
        setoverview(<>

            <h3>Course Description</h3>
            <div style={{ width: '100px', border: '2px solid lightgreen', marginTop: '10px' }}></div>
            <p style={{ marginTop: '10px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, at veniam corrupti delectus quidem quasi esse optio, voluptate, nostrum inventore omnis consectetur doloribus! Odio laudantium eum, dignissimos facere fuga sapiente</p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis eum beatae libero maxime magni rem non aut quis id dolorem laboriosam provident vel ipsum, doloribus nemo iure aspernatur aliquam dignissimos cum voluptas? Culpa soluta velit pariatur voluptatem quia dignissimos, vero molestias sed aliquam rem eveniet magnam quaerat sequi nostrum consectetur iste porro fugiat mollitia minima eum ducimus deleniti quam, fugit repellat. Minima voluptates, velit reprehenderit voluptate laboriosam, repellat natus maxime fugiat ullam inventore atque id ipsam nulla eius tempore incidunt dolor odio optio nihil fugit! Nemo dolor, sapiente voluptas temporibus aliquam amet sint eaque suscipit iste assumenda eos repellendus.</p>
        </>
        )
        setCurriculum("")
        setInstructor("")
        setReviews("")
    }

    const handleCurriculum = () => {
        setoverview("")
        setCurriculum(c)
        setInstructor("")
        setReviews("")

    }

    const handleInstructor = () => {
        setoverview("")
        setCurriculum("")
        setInstructor(i)
        setReviews("")
    }

    const handleReviews = () => {
        setoverview("")
        setCurriculum("")
        setInstructor("")
        setReviews("Review page")
    }


    return (
        <>
            <div className="content-container" style={{ '--loggedin-margin': loggedin ? '15%' : '0%' }}>
                <div className="row">
                    <div className="col-8">
                        <h1>{courseDetails.Course_name}</h1> <br />

                        <div className="info-item">
                            <b>Author</b>
                            <p>Name</p>
                        </div>
                        <div className="separator"></div>
                        <div className="info-item">
                            <b>CATEGORY</b>
                            <p>Web</p>
                        </div>
                        <div className="separator"></div>
                        <div className="info-item">
                            <b>RATING</b>
                            <p>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </p>
                        </div>
                        <div className="separator"></div>
                        <div className="info-item">
                            <b>PRICE</b>
                            <p>
                                <i className="fa fa-inr" aria-hidden="true"></i> 1000
                            </p>
                        </div>

                        <div className="course-image">
                            <img src={i1} alt="Course" />
                        </div>

                        <div className="course-page">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet ipsam accusantium id blanditiis unde reprehenderit quod debitis, sit corporis excepturi illo veniam ea laboriosam molestiae ducimus inventore porro enim.</p>
                        </div>

                        <div>
                            <button className="course-btns" onClick={handleOverview}>Overview</button>
                            <button className="course-btns" onClick={handleCurriculum}>Curriculum</button>
                            <button className="course-btns" onClick={handleInstructor}>Instructor</button>
                        </div>

                        <div>
                            {overview} {Curriculum} {instructor} {Reviews}
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="course-details">
                            Course Details
                            <div className="separators" style={{ borderColor: 'green' }}></div>

                            <div>
                                <div>
                                    <i className="fa fa-calendar" aria-hidden="true"></i>
                                    <span>Starting date:</span>
                                    <div className="info-value">Aug 21, 2020</div>
                                </div>
                                <div className="separators"></div>
                                <div>
                                    <i className="fa fa-clock" aria-hidden="true"></i>
                                    <span>Duration:</span>
                                    <div className="info-value">1 Year</div>
                                </div>
                                <div className="separators"></div>
                                <div>
                                    <i className="fa fa-language" aria-hidden="true"></i>
                                    <span>Language:</span>
                                    <div className="info-value">English</div>
                                </div>
                                <div className="separators"></div>
                                <div>
                                    <i className="fa fa-level-up" aria-hidden="true"></i>
                                    <span>Level:</span>
                                    <div className="info-value">Beginner</div>
                                </div>
                                <div className="separators"></div>
                                <div>
                                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                                    <span>Subject:</span>
                                    <div className="info-value">Web</div>
                                </div>
                                <div className="separators"></div>
                                <div>
                                    <i className="fa fa-book" aria-hidden="true"></i>
                                    <span>Lectures:</span>
                                    <div className="info-value">51</div>
                                </div>
                                <div className="separators"></div>
                                <div>
                                    <i className="fa fa-bookmark" aria-hidden="true"></i>
                                    <span>Enrolled:</span>
                                    <div className="info-value">236</div>
                                </div>
                                <div className="separators"></div>
                                <div>
                                    <i className="fa fa-certificate" aria-hidden="true"></i>
                                    <span>Certificate:</span>
                                    <div className="info-value">Yes</div>
                                </div>

                                <button className="enroll" onClick={handleEnrollClick}>
                                    Enroll Now
                                </button>

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
            </div>

        </>
    )
}

export default HTMLCourse