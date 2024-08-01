// src/components/Quiz/Question.js
import AnswerButton from './AnswerButton';

const Question = ({ questionData, currentQuestion, selectedAnswer, handleAnswerSelect, handleSubmit, totalQuestions, setCurrentQuestion }) => {
    return (
        <>
            <div className="mb-6">
                <h2 className="mb-2 text-xl font-bold">{questionData.question}</h2>
                <div className="grid gap-2">
                    {questionData.answers.map((answer, index) => (
                        <AnswerButton
                            key={index}
                            answer={answer}
                            index={index}
                            isSelected={selectedAnswer === index}
                            handleAnswerSelect={handleAnswerSelect}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-between">
                {currentQuestion > 0 && (
                    <button
                        className="px-4 py-2 text-left transition-colors rounded-md bg-background hover:bg-primary hover:text-primary-foreground"
                        onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    >
                        Previous
                    </button>
                )}
                {currentQuestion < totalQuestions - 1 && (
                    <button
                        className="px-4 py-2 text-left transition-colors rounded-md bg-background hover:bg-primary hover:text-primary-foreground"
                        onClick={() => setCurrentQuestion(currentQuestion + 1)}
                    >
                        Next
                    </button>
                )}
                {currentQuestion === totalQuestions - 1 && (
                    <button
                        className="px-4 py-2 transition-colors rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                )}
            </div>
        </>
    );
};

export default Question;
