/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import '../../css/CourseDetail.css';
import axios from 'axios';

export default function CourseDetails() {
    const { courseId } = useParams();
    const [courseDetails, setCourseDetails] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null); // State for selected video
    const [quiz, setQuiz] = useState([]); // State for quiz questions
    const [selectedAnswers, setSelectedAnswers] = useState({}); // State for selected answers
    const [showResults, setShowResults] = useState(false); // State for showing quiz results

    useEffect(() => {
        async function fetchCourseDetails() {
            try {
                const response = await fetch(`http://localhost:8000/api/Course/${courseId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch course details');
                }
                const data = await response.json();
                setCourseDetails(data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchCourseDetails();
    }, []);

    if (!courseDetails) {
        return <p>Loading course details...</p>;
    }

    // Function to render video list
    const renderVideoList = (content) => (
        <ul className="video-list">
            {content.map((item) => (
                <li key={item.id} className="video-item">
                    <div className="video-info">
                        <strong>{item.title}</strong>
                        <span>{item.duration}</span>
                    </div>
                    <button className="preview-button" onClick={() => setSelectedVideo(item)}>Preview</button>
                </li>
            ))}
        </ul>
    );

    const createUrl = (videoname) => {
        const url = `../../../public/${courseId}/${videoname}`
        return url
    }

    // Function to render selected video
    const renderSelectedVideo = () => (
        selectedVideo && (
            <div className="video-preview">
                <h3>{selectedVideo.title}</h3>


                <iframe
                    src={selectedVideo.url}
                    title={selectedVideo.title}
                    allowFullScreen
                ></iframe>
                <button className="close-button" onClick={() => setSelectedVideo(null)}>Close</button>
            </div>
        )
    );

    // Render course sections
    const renderSection = (title, content, index) => (
        content && content.length > 0 && (
            <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    {renderVideoList(content)}
                </Accordion.Body>
            </Accordion.Item>
        )
    );

    // Function to handle answer selection
    const handleAnswerSelect = (questionId, choiceId) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: choiceId  // Store selected choice by ID
        });
    };

    // Function to handle quiz submission
    const handleSubmitQuiz = () => {
        setShowResults(true);  // Show quiz results after submission
    };

    // Render the quiz section
    const renderQuiz = () => {
        if (!courseDetails.quiz || courseDetails.quiz.length === 0) return null; // If there's no quiz, don't render anything

        return courseDetails.quiz.map((quiz) => (
            <div key={quiz.id} className="quiz-section">
                <h3>{quiz.title}</h3>
                {quiz.questions.map((question) => (
                    <div key={question.id} className="quiz-question">
                        <h4>{question.question_text}</h4>
                        <ul>
                            {question.choices.map((choice) => (
                                <li key={choice.id}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedAnswers[question.id] === choice.id}  // Check if this choice is selected
                                            onChange={() => handleAnswerSelect(question.id, choice.id)}  // Handle answer selection by choice ID
                                            disabled={showResults}  // Disable selection after submission
                                        />
                                        {choice.choice_text}
                                    </label>
                                </li>
                            ))}
                        </ul>

                        {/* Show if the answer is correct or wrong after submission */}
                        {showResults && (
                            <p className={selectedAnswers[question.id] === question.choices.find(c => c.is_correct)?.id ? 'correct' : 'incorrect'}>
                                {selectedAnswers[question.id] === question.choices.find(c => c.is_correct)?.id ? 'Correct' : 'Wrong'}
                            </p>
                        )}
                    </div>
                ))}

                {/* Submit button for the quiz */}
                {!showResults && (
                    <button className="submit-quiz-button" onClick={handleSubmitQuiz}>
                        Submit Quiz
                    </button>
                )}
            </div>
        ));
    };


    return (

        <div className='bg-deep-teal min-h-screen pt-11'>
            <div className="course-details-container bg-pastel-green">
                <h2>{courseDetails.Course_name}</h2>
                <p>Instructor: {courseDetails.instructor_name}</p>

                <div className="video-section">
                    <div className="accordion-container">
                        <Accordion defaultActiveKey="0">
                            {renderSection('Introduction', courseDetails.intro_contents, 0)}
                            {renderSection('Key Features', courseDetails.key_features, 1)}
                            {renderSection('Fundamentals', courseDetails.fundamentals, 2)}
                            {renderSection('Core Concepts', courseDetails.core_concepts, 3)}
                            {renderSection('Conclusions', courseDetails.conclusions, 4)}
                        </Accordion>
                    </div>
                    <div className="video-preview-container">
                        {renderSelectedVideo()}
                    </div>
                </div>

                {/* Render Quiz Section after videos */}
                {renderQuiz()}
            </div>

        </div>
    );
}
