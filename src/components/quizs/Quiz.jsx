// src/components/Quiz/Quiz.js
import { useState, useEffect } from 'react';
import Question from './Question';
import Results from './Results';
import fetchQuizData from '../../utils/api';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const loadQuizData = async () => {
        try {
            const data = await fetchQuizData();
            setQuestions(data);
        } catch (error) {
            console.error("Failed to fetch quiz data:", error);
        }
    };

    useEffect(() => {
        loadQuizData();
    }, []);

    const handleAnswerSelect = (index) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestion] = index;
        setSelectedAnswers(newSelectedAnswers);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleSubmit = () => {
        let score = 0;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].answers[selectedAnswers[i]] === questions[i].correct_answer) {
                score++;
            }
        }
        setScore(score);
        setShowResults(true);
    };

    const handleTryAgain = async () => {
        setCurrentQuestion(0);
        setSelectedAnswers([]);
        setShowResults(false);
        setScore(0);
        await loadQuizData(); // Fetch new quiz data
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background">
            <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-card">
                <h1 className="mb-6 text-3xl font-bold text-center">Quiz</h1>
                {!showResults ? (
                    <Question
                        questionData={questions[currentQuestion]}
                        currentQuestion={currentQuestion}
                        selectedAnswer={selectedAnswers[currentQuestion]}
                        handleAnswerSelect={handleAnswerSelect}
                        handleSubmit={handleSubmit}
                        totalQuestions={questions.length}
                        setCurrentQuestion={setCurrentQuestion}
                    />
                ) : (
                    <Results score={score} totalQuestions={questions.length} handleTryAgain={handleTryAgain} />
                )}
            </div>
        </div>
    );
};

export default Quiz;
