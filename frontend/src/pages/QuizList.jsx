import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import api from '../service/api';
import { GlobleContext } from '../context/globleContext';

const QuizList = () => {
    const { getQuiz , quizzes } = useContext(GlobleContext);

    useEffect(() => {
        getQuiz();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-5">
            <h1 className="text-4xl font-bold text-center mb-10 text-teal-600">Available Quizzes</h1>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {quizzes.map(quiz => (
                    <Link to={`/quiz/${quiz._id}`} key={quiz._id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform transition duration-300 hover:-translate-y-1">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800">{quiz.title}</h2>
                            <p className="text-gray-600 mt-2">{quiz.description}</p>
                            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full shadow-lg hover:from-teal-600 hover:to-teal-800 transition duration-200">
                                Start Quiz
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default QuizList;
