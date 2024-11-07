import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../service/api';

const QuizPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState({});
    const [answers, setAnswers] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const getQuizById = async () => {
        try {
            const data = await api.listQuizById(id);
            console.log("By id :=", data);
            setQuiz(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getQuizById();
        // eslint-disable-next-line
    }, [id]);

    const handleAnswerChange = (e) => {
        setAnswers({
            ...answers,
            [currentQuestion]: e.target.value,
        });
    };

    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    const submitQuiz = async () => {
        try {
            const data = await api.submitQuiz({ quizId: id, answers });
            console.log("submit", data);
            toast.success('Quiz Submitted Successfully!');
            navigate(`/score/${data.data.score}`);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(quiz);
    if (!quiz.questions) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-5">
            <h2 className="text-3xl font-bold text-center mb-8 text-teal-600">{quiz.title}</h2>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                {currentQuestion < quiz.questions.length ? (
                    <div>
                        <p className="text-xl mb-4 text-gray-800">{quiz.questions[currentQuestion].question}</p>
                        <div className="space-y-4">
                            <div className="flex flex-col">
                                {quiz.questions[currentQuestion].options.map((option, index) => (
                                    <label key={index} className="flex items-center">
                                        <input
                                            type="radio"
                                            name={`question-${currentQuestion}`}
                                            value={option}
                                            onChange={handleAnswerChange}
                                            className="mr-2"
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <p className="text-sm text-gray-500">
                                Question {currentQuestion + 1} of {quiz.questions.length}
                            </p>
                            <button
                                onClick={currentQuestion < quiz.questions.length - 1 ? nextQuestion : submitQuiz}
                                className="px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg hover:from-teal-600 hover:to-teal-800 transition duration-200"
                            >
                                {currentQuestion < quiz.questions.length - 1 ? 'Next' : 'Submit'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <button onClick={submitQuiz} className="mt-6 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg hover:from-teal-600 hover:to-teal-800 transition duration-200">
                        Submit Quiz
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizPage;
