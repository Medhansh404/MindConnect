import React from "react";
import Navbar from "./Navbar";

const Profile = () => {
    return (
        <div className="min-h-screen bg-gray-100">
        <div className="relative p-16 bg-customYellow">
                <Navbar />
            </div>
            <div className="mx-auto pt-20">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Profile</h1>
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-customYellow">
                            <th className="border border-gray-300 p-4 text-left text-gray-800">Field</th>
                            <th className="border border-gray-300 p-4 text-left text-gray-800">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-4">Name</td>
                            <td className="border border-gray-300 p-4">John Doe</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">Email</td>
                            <td className="border border-gray-300 p-4">john.doe@example.com</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">Age</td>
                            <td className="border border-gray-300 p-4">25</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">Gender</td>
                            <td className="border border-gray-300 p-4">Male</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">Phone</td>
                            <td className="border border-gray-300 p-4">123-456-7890</td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex justify-between mt-6">
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                        Edit Profile
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                        Logout
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Profile;
