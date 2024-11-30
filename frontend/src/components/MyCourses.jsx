/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import '../css/MyCourses.css';
import LoginContext from '../contexts/LoginContext';
import i1 from '../assets/images/fullstack.jpg'
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

export default function MyCourses() {
    const [data, setData] = useState([]);
    const [coursesData, setCoursesData] = useState({});
    const { email } = useContext(LoginContext); // Get the logged-in user's email from context
    const [filteredCourses, setFilteredCourses] = useState([]); // State for filtered courses
    const [filter, setFilter] = useState('Enrolled'); // State to track the current filter
    const navigate = useNavigate(); // Hook to navigate to another page

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}users`);
                if (!response.ok) {
                    throw new Error('Network response was not okay!');
                }
                const result = await response.json();
                setData(result); // Set the fetched data to state
            } catch (error) {
                console.log('Error fetching the data:', error);
            }
        }
        fetchData();
    }, []);

    // Find the user object where the email matches the logged-in user's email
    const user = data.find((user) => user.email === email);

    // Fetch course details for each enrolled course using course.id
    useEffect(() => {
        async function fetchCourseDetails() {
            if (user && user.enrolled_courses.length > 0) {
                const courseDetailsPromises = user.enrolled_courses.map(async (course) => {
                    try {
                        const response = await fetch(`http://localhost:8000/api/Course/${course.course}`); // Fetch course data by ID
                        if (!response.ok) {
                            throw new Error('Failed to fetch course details!');
                        }
                        const courseData = await response.json();
                        return { id: course.course, data: courseData }; // Return course ID and its details
                    } catch (error) {
                        console.log('Error fetching course details:', error);
                        return null; // Return null if there's an error
                    }
                });

                const courses = await Promise.all(courseDetailsPromises);
                const coursesMap = courses.reduce((acc, course) => {
                    if (course) {
                        acc[course.id] = course.data; // Map course details by ID
                    }
                    return acc;
                }, {});

                setCoursesData(coursesMap); // Store course details in state
                setFilteredCourses(user.enrolled_courses); // Set initial filtered courses to all enrolled courses
            }
        }
        fetchCourseDetails();
    }, [user]);

    const handleCourseClick = (courseId) => {
        navigate(`/Mycourses/${courseId}`); // Navigate to course details
    }

    // Filter courses based on the selected filter
    const handleFilterChange = (filter) => {
        setFilter(filter);

        // Update the active button
        const buttons = document.querySelectorAll('.course-filter-buttons button');
        buttons.forEach(button => button.classList.remove('active'));

        if (filter === 'Enrolled') {
            setFilteredCourses(user.enrolled_courses);
            buttons[0].classList.add('active');
        } else if (filter === 'Active') {
            const activeCourses = user.enrolled_courses.filter(course => course.status === 'active');
            setFilteredCourses(activeCourses);
            buttons[1].classList.add('active');
        } else if (filter === 'Complete') {
            const completeCourses = user.enrolled_courses.filter(course => course.status === 'complete');
            setFilteredCourses(completeCourses);
            buttons[2].classList.add('active');
        }
    };


    return (


            <div className='bg-deep-teal min-h-screen'>
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

                <div className='my-courses-details bg-pastel-green'>

                    <section>
                        <h2>
                            <b> My Courses </b>
                        </h2>
                    </section>

                    <hr />

                    <section>
                        <div className="course-filter-buttons">
                            <button onClick={() => handleFilterChange('Enrolled')} >Enrolled Course</button>
                            <button onClick={() => handleFilterChange('Active')}>Active Course</button>
                            <button onClick={() => handleFilterChange('Complete')}>Complete Course</button>
                        </div>
                    </section>

                    <section>
                        <div className="col-12">
                            <div className="d-flex flex-wrap container dflex">
                                {/* Check if user is found and has enrolled courses */}
                                {user && filteredCourses.length > 0 ? (
                                    filteredCourses.map((course, index) => {
                                        const courseDetails = coursesData[course.course]; // Get course details from state
                                        return (
                                            <div key={index} className="course-card mx-3">
                                                {courseDetails ? (
                                                    <>
                                                        <div
                                                            key={index}
                                                            className="card"
                                                            style={{
                                                                width: '300px',
                                                                height: '350px',
                                                                marginBottom: '20px'
                                                            }}>
                                                            <img
                                                                src={i1}
                                                                className="card-img-top card-img"
                                                                alt="..."
                                                                onClick={() => handleCourseClick(course.course)} // Navigate on click
                                                                style={{ cursor: 'pointer', height: '170px', objectFit: 'cover' }}
                                                            />
                                                            <div className="card-body">
                                                                <i className="fa fa-book" aria-hidden="true"></i> {courseDetails.lessons} lessons
                                                                <div style={{ display: 'inline-block', width: '170px', textAlign: 'right' }}>
                                                                    <i className="fa fa-clock" aria-hidden="true"></i> 1 Year
                                                                </div>
                                                                <h5
                                                                    style={{ marginTop: '15px', cursor: 'pointer' }}
                                                                    onClick={() => handleCourseClick(course.course)} // Navigate on click
                                                                >
                                                                    {courseDetails.Course_name}
                                                                </h5>

                                                                <i
                                                                    className="fa fa-inr"
                                                                    aria-hidden="true"
                                                                    style={{ marginTop: '10px' }}
                                                                ></i>
                                                                <b>{courseDetails.price} </b>
                                                                <div style={{ width: '200px', display: 'inline-block', textAlign: 'right' }}>
                                                                    <p>
                                                                        <i className="fa fa-graduation-cap" aria-hidden="true"></i> Paid
                                                                    </p>
                                                                </div>

                                                                <div
                                                                    style={{
                                                                        border: '1px solid lightgray',
                                                                    }}
                                                                ></div>
                                                                <span>{courseDetails.instructor_name}</span>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <p>Loading course details...</p>
                                                )}
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p>No courses found for this filter.</p>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    );
}
