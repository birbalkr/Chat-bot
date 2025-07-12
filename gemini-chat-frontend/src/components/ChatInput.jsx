import React, { useState } from "react";

const ChatInput = ({ onSubmit }) => {
    const [question, setQuestion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question.trim()) {
            onSubmit(question);
            setQuestion("");
        }
    };

    return (
        <div className="container mx-auto my-4 px-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="question"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Ask a Question
                    </label>
                    <input
                        type="text"
                        id="question"
                        placeholder="Enter your question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ChatInput;
