import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import useAuth from "../Hooks/useAuth";
import axios from "../Api/axios";
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const navigate = useNavigate();
    const { setAuth,auth } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const roles = auth.roles;
    const accessToken = auth.accessToken
    const pwd = auth.pwd
    const id = auth.id;
    const LOGOUT_URL = '/auth';
    const PROFILE = '/register';
    const errRef = useRef();
    const succRef = useRef();

    const [userName, setUserName] = useState(auth.userName);
    const [email, setEmail] = useState(auth.email);
    const [mobile, setMobile] = useState(auth.mobile); 
    const [gender, setGender] = useState(auth.gender);
    const [dob, setDob] = useState(auth.dob);
    const [errMssg, setErrMssg] = useState('');
    const [succMssg, setSuccMssg] = useState('');
    const [loading, setLoading] = useState(false);

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
    
        // Adjust age if the birth month hasn't occurred yet this year
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
    
        return age;
    };
    

    const handleLogout = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const response = await axios.get(LOGOUT_URL, 
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true // Ensures cookies are sent
                }
            );
            if (response.status === 204) {
                console.log("Logged Out Successfully");
                setAuth({});  // Clear auth context or user state 
                navigate('/');  // Redirect to login page
            } else {
                console.log("Problem Logging Out");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };
    
    

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.put(PROFILE,
              JSON.stringify({ userName, email, gender, dob, mobile, id }),
              {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
              }
            );
            if(response.status === 201) {
                setSuccMssg('Changes Saved Successfully');
            }
            
            setAuth({ userName, id, email, pwd, roles, accessToken, gender, dob, mobile });
            setIsEditing(false);
          }
          catch (error) {
            if (!error?.response) {
              setErrMssg('No Server Response');
            }
            else if (error.response?.status === 400) {
              setErrMssg('Missing Username or Password');
            }
            else if (error.response?.status === 401) {
              setErrMssg('Unauthorized, Contact administration or try again');
            }
            else {
              setErrMssg('Register Failed, Try again');
            }
          }
          finally{
            setLoading(false);
          }
          setErrMssg("");
    };

    useEffect(() => {
        if (succMssg) {
            const timer = setTimeout(() => {
                setSuccMssg(""); // Clears the message after 10 seconds
            }, 2000); // 10000 ms = 10 seconds

            return () => clearTimeout(timer); // Cleanup timer on component unmount
        }
    }, [succMssg]);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="relative p-16 bg-gradient-to-r from-customYellow via-yellow-200 to-customYellow">
                <Navbar />
            </div>
            <div className="mx-auto pt-20">
                <div className="relative max-w-4xl mx-auto bg-customBlue rounded-lg shadow-xl p-8 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    <h1 className="text-4xl font-extrabold text-center text-white mb-8 z-10 relative">
                        Profile Information
                    </h1>
                    {errMssg && <p ref={errRef} className="text-red-500 text-center">{errMssg}</p>}
                    {succMssg && <p ref={succRef} className="text-green-500 text-center">{succMssg}</p>}
                    <table className="min-w-full border-collapse relative z-10">
                        <tbody>
                            <tr className="hover:bg-teal-700/80">
                                <td className="border border-gray-400 p-4 text-customYellow font-semibold">Name</td>
                                <td className="border border-gray-400 p-4 text-white">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            className="p-2 text-customBlue"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                    ) : (
                                        userName
                                    )}
                                </td>
                            </tr>
                            <tr className="hover:bg-teal-700/80">
                                <td className="border border-gray-400 p-4 text-customYellow font-semibold">Email</td>
                                <td className="border border-gray-400 p-4 text-white">
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            className="p-2 text-customBlue"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    ) : (
                                        email
                                    )}
                                </td>
                            </tr>
                            <tr className="hover:bg-teal-700/80">
                                <td className="border border-gray-400 p-4 text-customYellow font-semibold">Role</td>
                                <td className="border border-gray-400 p-4 text-white">
                                    {roles == 1911 ? "Counselor" : "User"}
                                </td>
                            </tr>
                            <tr className="hover:bg-teal-700/80">
                                <td className="border border-gray-400 p-4 text-customYellow font-semibold">Gender</td>
                                <td className="border border-gray-400 p-4 text-white">
                                {isEditing ? (
                                        <input
                                            type="text"
                                            className="p-2 text-customBlue"
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                    ) : (
                                        gender
                                    )}
                                </td>
                            </tr>
                            <tr className="hover:bg-teal-700/80">
                                <td className="border border-gray-400 p-4 text-customYellow font-semibold">Age</td>
                                <td className="border border-gray-400 p-4 text-white">
                                    {dob ? calculateAge(dob) : "-"}
                                </td>
                            </tr>
                            <tr className="hover:bg-teal-700/80">
                                <td className="border border-gray-400 p-4 text-customYellow font-semibold">DOB</td>
                                <td className="border border-gray-400 p-4 text-white">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            className="p-2 text-customBlue"
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}
                                            placeholder="YYYY-MM-DD"
                                        />
                                    ) : (
                                        
                                        dob
                                    )}
                                </td>
                            </tr>

                            <tr className="hover:bg-teal-700/80">
                                <td className="border border-gray-400 p-4 text-customYellow font-semibold">Phone</td>
                                <td className="border border-gray-400 p-4 text-white">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            className="p-2 text-customBlue"
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                        />
                                    ) : (
                                        mobile
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="flex justify-between mt-8 relative z-10">
                        {isEditing ? (
                            <>
                                <button
                                    className="bg-green-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-green-600"
                                    onClick={handleSaveChanges}
                                >
                                    {loading ? (
                                        <div className="loader"></div> // Replace with a spinner or loading animation
                                    ) : (
                                        "Save Changes"
                                    )}
                                </button>
                                <button
                                    className="bg-gray-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button
                                className="bg-customYellow text-customBlue font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-teal-400"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit Profile
                            </button>
                        )}
                        <button 
                            className="bg-red-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-orange-500"
                            onClick = {handleLogout}
                            >
                            {loading ? (
                                <div className="loader"></div> // Replace with a spinner or loading animation
                            ) : (
                                "LOGOUT"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
