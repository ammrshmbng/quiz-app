// src/components/Quiz/Results.js

const Results = ({ score, totalQuestions, handleTryAgain }) => {
    return (
        <div className="text-center">
            <h2 className="mb-4 text-xl font-bold">
                You scored {score}/{totalQuestions}
            </h2>
            <p className="mb-6 text-muted-foreground">You got {totalQuestions - score} questions wrong.</p>
            <button
                className="px-4 py-2 transition-colors rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleTryAgain}
            >
                Try Again
            </button>
        </div>
    );
};

export default Results;
