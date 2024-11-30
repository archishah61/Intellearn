/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Profile.css';
import LoginContext from '../contexts/LoginContext';

export default function Profile() {
    const [data, setData] = useState([]);
    const { email } = useContext(LoginContext); // Getting the email from the context
    const [user, setUser] = useState(null); // State to store the matching user's data
    const [isEditing, setIsEditing] = useState(false); // State to toggle form visibility
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        Phone_no: '',
        password: '',
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}users`);
                setData(response.data);
            } catch (error) {
                console.log("Error fetching the data:", error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (data.length > 0 && email) {
            const matchingUser = data.find((user) => user.email === email);
            setUser(matchingUser);
            if (matchingUser) {
                setFormData({
                    fname: matchingUser.fname,
                    lname: matchingUser.lname,
                    email: matchingUser.email,
                    Phone_no: matchingUser.Phone_no,
                    password: matchingUser.password,
                });
            }
        }
    }, [data, email]);

    const handleClick = () => {
        setIsEditing(!isEditing); // Toggle form visibility
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return;

        try {
            console.log(user.id)
            console.log(formData)
            // Update user data on the backend
            const response = await axios.put(`http://localhost:8000/api/users/1/`, {
                fname: formData.fname,
                lname: formData.lname,
                email: formData.email,
                Phone_no: formData.Phone_no,
                password: formData.password
            });

            // Update state with the response data
            setUser(response.data);
            setIsEditing(false); // Hide the form after successful update
        } catch (error) {
            console.log("Error updating the data:", error);
        }
    };


    return (



        <div className='flex justify-center items-center bg-deep-teal min-h-screen'>
            <div className='profile bg-pastel-green'>
                <section>
                    <div className='my_profile'>
                        <h2><b className='font-nunito'>My Profile</b></h2>
                    </div>

                    <br />

                    <hr />

                    {user ? (
                        <div className='student-data'>
                            {isEditing ? (
                                <form className="profile-edit-form" onSubmit={handleSubmit}>
                                    <label className="profile-label">
                                        First Name:
                                        <input
                                            className="profile-input"
                                            type='text'
                                            name='fname'
                                            value={formData.fname}
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label className="profile-label">
                                        Last Name:
                                        <input
                                            className="profile-input"
                                            type='text'
                                            name='lname'
                                            value={formData.lname}
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label className="profile-label">
                                        Email:
                                        <input
                                            className="profile-input"
                                            type='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label className="profile-label">
                                        Phone Number:
                                        <input
                                            className="profile-input"
                                            type='number'
                                            name='Phone_no'
                                            value={formData.Phone_no}
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label className="profile-label">
                                        Password:
                                        <input
                                            className="profile-input"
                                            type='text'
                                            name='password'
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <button className="profile-button" type="submit">Save</button>
                                    <button className="profile-cancel-button" type="button" onClick={handleClick}>Cancel</button>
                                </form>
                            ) : (
                                <>
                                    <table className='profile-table'>
                                        <tbody>
                                            <tr>
                                                <td>Registration Date</td>
                                                <td>{user.reg_date}</td>
                                            </tr>
                                            <tr>
                                                <td>First Name</td>
                                                <td>{user.fname}</td>
                                            </tr>
                                            <tr>
                                                <td>Last Name</td>
                                                <td>{user.lname}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{user.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Phone Number</td>
                                                <td>{user.Phone_no}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="profile-edit-button" onClick={handleClick}>Edit Profile</button>
                                </>
                            )}
                        </div>
                    ) : (
                        <p>No user data found for the email: {email}</p>
                    )}
                </section>
            </div>

        </div>
    );
}
