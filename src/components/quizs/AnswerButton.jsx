// src/components/Quiz/AnswerButton.js

const AnswerButton = ({ answer, index, isSelected, handleAnswerSelect }) => {
    return (
        <button
            className={`bg-background hover:bg-primary hover:text-primary-foreground rounded-md px-4 py-2 text-left transition-colors ${
                isSelected ? "bg-primary text-primary-foreground" : ""
            }`}
            onClick={() => handleAnswerSelect(index)}
        >
            {answer}
        </button>
    );
};

export default AnswerButton;
