// src/utils/api.js
import axios from 'axios';

const fetchQuizData = async () => {
    try {
        const response = await axios.get("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple");
        return response.data.results.map((question) => ({
            ...question,
            answers: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5)
        }));
    } catch (error) {
        console.error("Error fetching quiz data:", error);
        throw error;
    }
};

export default fetchQuizData;
