import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ScoreSummary = () => {
  const { score } = useParams();
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold">Quiz Completed</h1>
        <p className="text-2xl mt-4">Your Score: <span className="text-indigo-600">{score}</span></p>
        <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg" onClick={() => navigate("/")}>Go Home</button>
      </div>
    </div>
  );
};

export default ScoreSummary;
