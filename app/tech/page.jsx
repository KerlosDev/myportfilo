"use client";
import { useState, useEffect } from 'react';

export default function TechPage() {
    const [lectures, setLectures] = useState([]);
    const [selectedLecture, setSelectedLecture] = useState(null);
    const [quizType, setQuizType] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleLectureSelect = (lectureName) => {
        setSelectedLecture(lectureName);
        setQuizType(null);
        setQuestions([]);
        setUserAnswers({});
        setShowResults(false);
    };

    const handleQuizTypeSelect = (type) => {
        setQuizType(type);
        // Here we would load questions based on the lecture and quiz type
        // For now using dummy data
        const dummyMCQ = [
            {
                id: 1,
                question: "What is the capital of France?",
                options: ["London", "Paris", "Berlin", "Madrid"],
                correctAnswer: "Paris"
            }
        ];

        const dummyTF = [
            {
                id: 1,
                question: "Paris is the capital of France",
                options: ["True", "False"],
                correctAnswer: "True"
            }
        ];

        setQuestions(type === 'mcq' ? dummyMCQ : dummyTF);
        setUserAnswers({});
        setShowResults(false);
    };

    const handleAnswerSelect = (questionId, answer) => {
        setUserAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const handleSubmit = () => {
        setShowResults(true);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Lecture Quizzes</h1>

                {!selectedLecture ? (
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold mb-4">Select a Lecture:</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <button
                                onClick={() => handleLectureSelect("المحاضرة الاولي")}
                                className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                المحاضرة الاولي
                            </button>
                            {/* Add more lecture buttons as needed */}
                        </div>
                    </div>
                ) : !quizType ? (
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold mb-4">
                            Selected Lecture: {selectedLecture}
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => handleQuizTypeSelect('mcq')}
                                className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                            >
                                Multiple Choice Questions
                            </button>
                            <button
                                onClick={() => handleQuizTypeSelect('tf')}
                                className="p-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                            >
                                True/False Questions
                            </button>
                        </div>
                        <button
                            onClick={() => setSelectedLecture(null)}
                            className="mt-4 p-2 text-gray-600 hover:text-gray-800"
                        >
                            ← Back to Lectures
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">
                                {quizType === 'mcq' ? 'Multiple Choice Questions' : 'True/False Questions'}
                            </h2>
                            <button
                                onClick={() => setQuizType(null)}
                                className="text-gray-600 hover:text-gray-800"
                            >
                                ← Back to Quiz Selection
                            </button>
                        </div>

                        {questions.map((q) => (
                            <div key={q.id} className="border p-4 rounded-lg">
                                <p className="font-semibold mb-3">{q.question}</p>
                                <div className="space-y-2">
                                    {q.options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleAnswerSelect(q.id, option)}
                                            className={`w-full p-2 text-left rounded ${userAnswers[q.id] === option
                                                    ? 'bg-blue-100 border-blue-500'
                                                    : 'bg-gray-50 hover:bg-gray-100'
                                                } ${showResults
                                                    ? option === q.correctAnswer
                                                        ? 'bg-green-100 border-green-500'
                                                        : userAnswers[q.id] === option
                                                            ? 'bg-red-100 border-red-500'
                                                            : ''
                                                    : ''
                                                }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                                {showResults && (
                                    <p className="mt-2 text-sm">
                                        {userAnswers[q.id] === q.correctAnswer ? (
                                            <span className="text-green-600">Correct!</span>
                                        ) : (
                                            <span className="text-red-600">
                                                Incorrect. The correct answer is: {q.correctAnswer}
                                            </span>
                                        )}
                                    </p>
                                )}
                            </div>
                        ))}

                        {questions.length > 0 && !showResults && (
                            <button
                                onClick={handleSubmit}
                                className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Submit Answers
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}