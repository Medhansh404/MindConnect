import React, { useState } from 'react';
import axios from "../Api/axios";

const DiaryPage = () => {
  const [topic, setTopic] = useState('career stress');
  const [title, setTitle] = useState('');
  const [entry, setEntry] = useState('');
  const topics = ['career stress', 'financial', 'addiction', 'happy', 'relationships', 'health', 'other'];

  const DIARY_URL= '/diary'
  const handleSubmit = async (e) => {
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

      if (response.ok) {
        console.log('Diary entry saved successfully!');
        setTitle('');
        setEntry('');
        setTopic('career stress');
      } else {
        console.error('Failed to save diary entry.');
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Create a Diary Entry</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Dropdown for selecting the topic */}
          <div className="mb-4">
            <label htmlFor="topic" className="block text-yellow-700 font-semibold mb-2">Select Topic</label>
            <select
              id="topic"
              className="block w-full border border-yellow-400 rounded-lg py-2 px-3 text-yellow-900"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Input for the title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-yellow-700 font-semibold mb-2">Enter a Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter a title"
              className="w-full border border-yellow-400 rounded-lg py-2 px-3 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Text area for writing the diary entry */}
          <div>
            <label htmlFor="entry" className="block text-yellow-700 font-semibold mb-2">Write Your Entry</label>
            <textarea
              id="entry"
              rows="10"
              placeholder="Write your diary entry here..."
              className="w-full border border-yellow-400 rounded-lg py-2 px-3 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800"
            >
              Save Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DiaryPage;
