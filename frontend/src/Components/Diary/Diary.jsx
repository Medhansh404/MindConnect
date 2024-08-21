import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from "../../Api/axios";
import Modal from './Modal'; 

const Diary = () => {
  const [diaries, setDiaries] = useState([]);
  const [isCreating, setIsCreating] = useState(false); 
  const [isEditing, setIsEditing] = useState(null); 
  const [editDiary, setEditDiary] = useState({ title: '', entry: '', topic: 'career stress' }); 
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');
  const [entry, setEntry] = useState('');
  const [expandedDiary, setExpandedDiary] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const topics = ['Select Topic', 'career stress', 'financial', 'addiction', 'happy', 'relationships', 'health', 'other'];

  const DIARY_URL = '/diary';

  const handleAddDiary = () => {
    setIsCreating(true);
  };

  const handleSaveEntry = async (e) => {
    e.preventDefault();

    const diaryEntry = {
      topic,
      title,
      entry,
    };

    try {
      const response = await axios.post(DIARY_URL, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(diaryEntry),
      });

      if (true) {
        setDiaries([...diaries, diaryEntry]);
        setTitle('');
        setEntry('');
        setTopic('career stress');
        setIsCreating(false);
      } else {
        console.error('Failed to save diary entry.');
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  const handleEditDiary = (index) => {
    setIsEditing(index);
    setEditDiary(diaries[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedDiaries = [...diaries];
    updatedDiaries[index] = editDiary;
    setDiaries(updatedDiaries);
    setIsEditing(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(null);
  };

  const handleDeleteDiary = (index) => {
    const updatedDiaries = diaries.filter((_, i) => i !== index);
    setDiaries(updatedDiaries);
  };

  const handleToggleModal = (index) => {
    setExpandedDiary(index);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative p-16 bg-customYellow text-white">
        <Navbar />
      </div>
      
      <div className="container mx-auto p-6">
        {isCreating && (
          <div className="min-h-screen py-8 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 shadow-black">
              <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Create a New Diary</h1>
              
              <form onSubmit={handleSaveEntry}>
                <div className="mb-4">
                  <select
                    id="topic"
                    className="block w-full border border-yellow-400 rounded-lg py-2 px-3 text-yellow-900"
                    value={topic}
                    placeholder = "Select Topic"
                    onChange={(e) => setTopic(e.target.value)}
                  >
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="title"
                    placeholder="Enter a title"
                    className="w-full border border-yellow-400 rounded-lg py-2 px-3 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <textarea
                    id="entry"
                    rows="10"
                    placeholder="Take a deep breath and JUST SCRIBBLE..."
                    className="w-full border border-yellow-400 rounded-lg py-2 px-3 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                  ></textarea>
                </div>

                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800"
                  >
                    Let It Out
                  </button>
                </div>
            </form>
            </div>
          </div>
        )}

        {!isCreating && (
          <div className="py-16">
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-4xl font-bold text-blue-900">My Thoughts</h1>
              <button 
                className="bg-blue-900 text-xl text-white font-semibold py-2 px-4 rounded-full hover:bg-customYellow hover:text-black" 
                onClick={handleAddDiary}
              >
                Scribble New +
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16">
              {diaries.map((diary, index) => (
                <div 
                  key={index} 
                  className="border border-customBlue bg-blue-100 p-5 pl-4 pr-4 rounded-3xl overflow-hidden"
                >
                  {isEditing === index ? (
                    <>
                      <div className="mb-4">
                        <select
                          id="topic"
                          className="block w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-900"
                          value={editDiary.topic}
                          onChange={(e) => setEditDiary({ ...editDiary, topic: e.target.value })}
                        >
                          {topics.map((t) => (
                            <option key={t} value={t}>
                              {t.charAt(0).toUpperCase() + t.slice(1)}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-4">
                        <input
                          type="text"
                          id="title"
                          className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={editDiary.title}
                          onChange={(e) => setEditDiary({ ...editDiary, title: e.target.value })}
                        />
                      </div>

                      <div>
                        <textarea
                          id="entry"
                          className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows="5"
                          value={editDiary.entry}
                          onChange={(e) => setEditDiary({ ...editDiary, entry: e.target.value })}
                        />
                      </div>

                      <div className="mt-4 flex justify-end space-x-2">
                        <button 
                          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                          onClick={() => handleSaveEdit(index)}
                        >
                          Save
                        </button>
                        <button 
                          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col space-y-2">
                        <h2 className="text-lg font-bold text-blue-900 text-center">{diary.title}</h2>
                        <p className="text-gray-700 text-center"><strong>Topic:</strong> {diary.topic.charAt(0).toUpperCase() + diary.topic.slice(1)}</p>
                      </div>
                      <div className="mt-4 flex justify-center space-x-4">
                        <button 
                          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
                          onClick={() => handleEditDiary(index)}
                        >
                          Edit
                        </button>
                        <button 
                          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                          onClick={() => handleDeleteDiary(index)}
                        >
                          Delete
                        </button>
                        <button 
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                          onClick={() => handleToggleModal(index)}
                        >
                          Read
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{diaries[expandedDiary]?.title}</h2>
            <p className="text-gray-700 mb-2"><strong>Topic:</strong> {diaries[expandedDiary]?.topic.charAt(0).toUpperCase() + diaries[expandedDiary]?.topic.slice(1)}</p>
            <p className="text-gray-800 whitespace-pre-wrap break-words">{diaries[expandedDiary]?.entry}</p>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Diary;
