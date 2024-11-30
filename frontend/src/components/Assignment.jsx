import React, { useEffect, useState, useContext } from 'react';
import '../css/Assignment.css';
import LoginContext from '../contexts/LoginContext';

export default function MyCourses() {
    const [data, setData] = useState([]);  // Stores user data
    const [coursesData, setCoursesData] = useState({});  // Stores course details
    const { email } = useContext(LoginContext);  // Get the logged-in user's email from context

    useEffect(() => {
        // Fetch user data
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}users`);
                console.log('User data response:', response);
                const result = await response.json();
                console.log('User data result:', result);
                setData(result);
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
                        const response = await fetch(`http://localhost:8000/api/Course/${course.course}`);
                        console.log(`Course details response for ${course.course}:`, response);
                        const courseData = await response.json();
                        console.log(`Course details data for ${course.course}:`, courseData);
                        return { id: course.course, data: courseData };
                    } catch (error) {
                        console.log('Error fetching course details:', error);
                        return null;
                    }
                });

                const courses = await Promise.all(courseDetailsPromises);
                console.log('Courses data:', courses);
                const coursesMap = courses.reduce((acc, course) => {
                    if (course) {
                        acc[course.id] = course.data;
                    }
                    return acc;
                }, {});

                setCoursesData(coursesMap);
            }
        }
        fetchCourseDetails();
    }, [user]);

    return (

        <div className='my-courses  bg-deep-teal min-h-screen'>

        <div className='assignment'>
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

            <div className='assignment-details bg-pastel-green'>

                <section>
                    <h2>
                        <b> Assignments </b>
                    </h2>
                </section>

                <hr />

                <section>
                    <div className="container">
                        <div className="row">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Course Name & Assignment Title</th>
                                        <th>Total Marks</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user && user.enrolled_courses.length > 0 ? (
                                        user.enrolled_courses.map((course, index) => {
                                            const courseDetails = coursesData[course.course];  // Get course details from state

                                            return (
                                                courseDetails && courseDetails.assignments && courseDetails.assignments.length > 0 && (
                                                    <React.Fragment key={index}>
                                                        {courseDetails.assignments.map((assignment, aIndex) => (
                                                            <tr key={aIndex}>
                                                                {aIndex === 0 ? (
                                                                    <td style={{ padding: '20px 10px' }}>
                                                                        <div>
                                                                            <b> Course : </b> {courseDetails.Course_name} <br />
                                                                            <b>Assignment : </b> {assignment.title}
                                                                        </div>
                                                                    </td>
                                                                ) : (
                                                                    <td>{assignment.title}</td>
                                                                )}
                                                                <td style={{ padding: '40px 10px' }}>{assignment.marks}</td>
                                                                <td>
                                                                    <a
                                                                        href='assignments/HTMLAssignment.pdf' // Path to the file in public folder
                                                                        className="btn btn-danger"
                                                                        download={assignment.title} // Suggested filename for download
                                                                    >
                                                                        Download
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </React.Fragment>
                                                )
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan="3">No enrolled courses found for this user.</td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>
                        </div>
                    </div>

                </section>
            </div>
            </div>
        </div >
    );
}
