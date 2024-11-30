import { useNavigate } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import LoginContext from '../contexts/LoginContext'
import '../css/Courses.css'

const c_id = createContext()

function Course() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const { loggedin } = useContext(LoginContext)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}Course`);
                if (!response.ok) {
                    throw new Error("Network response was not ok!");
                }
                const result = await response.json();
                setData(result);
                setFilteredCourses(result); // Initially display all courses
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        }

        fetchData();
    }, []);

    const handleCourseClick = (courseId) => {
        navigate(`/course/${courseId}`);
    };

    const handleCategoryClick = (category) => {
        const filtered = category === 'all' ? data : data.filter((course) => course.Categories === category);
        setFilteredCourses(filtered);
    };

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = data.filter((course) =>
            course.Course_name.toLowerCase().includes(value)
        );

        setFilteredCourses(filtered);
    };

    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])
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

            <div className="flex justify-center items-center min-h-screen bg-deep-teal">
                <div className="row bg-deep-teal" style={{ marginTop: '100px', width: 'calc(100% - 100px)', marginLeft: loggedin ? '15%' : '0%', overflowX: 'hidden' }}>
                    <div className="col-3">
                        <div className="search bg-pastel-green" data-aos="fade-right" >
                            <h5 className="text-dark-teal text-xl font-nunito"><b>Search Here</b></h5>
                            <input
                                type="text"
                                placeholder="Search here"
                                style={{ width: '250px', marginTop: '10px', border: '1px solid black', borderRadius: '5px' }}
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>

                        <div>
                            <div className="categories bg-pastel-green" data-aos="fade-right">
                                <h5 className="text-dark-teal text-xl font-nunito"><b>Categories</b></h5>

                                <button className='cat-btn' onClick={() => handleCategoryClick('web development')}>
                                    Web Development <div style={{ display: 'inline-block', width: '80px', textAlign: 'right' }}> 03</div>
                                </button>

                                <button className='cat-btn' onClick={() => handleCategoryClick('data science')}>
                                    Data Science <div style={{ display: 'inline-block', width: '120px', textAlign: 'right' }}> 03</div>
                                </button>

                                <button className='cat-btn' onClick={() => handleCategoryClick('App development')}>
                                    App Development<div style={{ display: 'inline-block', width: '90px', textAlign: 'right' }}> 03</div>
                                </button>

                                <button className='cat-btn' onClick={() => handleCategoryClick('art & design')}>
                                    Art & Design <div style={{ display: 'inline-block', width: '125px', textAlign: 'right' }}> 03</div>
                                </button>

                                <button className='cat-btn' onClick={() => handleCategoryClick('all')}>
                                    All
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-9">
                            <div className="d-flex flex-wrap container" style={{ paddingRight: 0, paddingLeft: '0px' }}>
                                {
                                    filteredCourses.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="card mx-2"
                                                style={{
                                                    width: '330px',
                                                    height: '350px',
                                                    marginBottom: '20px'
                                                }}>
                                                <img
                                                    src={item.image}
                                                    className="card-img-top bg-pastel-green card-img"
                                                    alt="..."
                                                    onClick={() => handleCourseClick(item.id)}
                                                    style={{ cursor: 'pointer', height: '170px', objectFit: 'cover' }}
                                                />
                                                <div className="card-body bg-pastel-green">
                                                    <i className="fa fa-book" aria-hidden="true"></i> {item.lessons} lessons
                                                    <div style={{ display: 'inline-block', width: '180px', textAlign: 'right' }}>
                                                        <i className="fa fa-clock" aria-hidden="true"></i> 1 Year
                                                    </div>
                                                    <h5
                                                        style={{ marginTop: '15px', cursor: 'pointer' }}
                                                        onClick={() => handleCourseClick(item.id)}
                                                    >
                                                        {item.Course_name}
                                                    </h5>

                                                    <i
                                                        className="fa fa-inr"
                                                        aria-hidden="true"
                                                        style={{ marginTop: '10px' }}
                                                    ></i>
                                                    <b>{item.price} </b>
                                                    <div style={{ width: '220px', display: 'inline-block', textAlign: 'right' }}>
                                                        <p>
                                                            <i className="fa fa-graduation-cap" aria-hidden="true"></i> Paid
                                                        </p>
                                                    </div>

                                                    <div
                                                        style={{
                                                            border: '1px solid lightgray',
                                                        }}
                                                    ></div>
                                                    <span>{item.instructor_name}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Course;
