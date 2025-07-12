import React from 'react';
import ReactMarkdown from 'react-markdown';

const ChatResponse = ({ response }) => {
    if (!response) return null;

    const { candidates, usageMetadata } = response;

    return (
        <div className="w-full px-6 py-8 bg-gray-50">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">💬 Chat Response</h3>

            <div className="flex flex-col gap-6">
                {candidates.map((candidate, index) => {
                    const text = candidate?.content?.parts?.[0]?.text;
                    const citations = candidate?.citationMetadata?.citationSources;

                    return (
                        <div
                            key={index}
                            className="w-full bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
                        >
                            <div className="mb-4">
                                <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 text-sm font-semibold rounded-full">
                                    Candidate {index + 1}
                                </span>
                            </div>

                            <div className="prose prose-sm prose-blue max-w-none text-gray-800 mb-6 overflow-x-auto">
                                <ReactMarkdown>{text || 'No content available.'}</ReactMarkdown>
                            </div>

                            <div>
                                <h6 className="text-sm font-semibold text-gray-600 mb-2">🔗 Citations:</h6>
                                {citations && citations.length > 0 ? (
                                    <ul className="space-y-1">
                                        {citations.map((source, idx) => (
                                            <li key={idx} className="text-sm text-blue-600">
                                                <a
                                                    href={source.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline break-words"
                                                >
                                                    {source.url}
                                                </a>
                                                <span className="text-gray-500 text-xs ml-1">
                                                    (Indexes: {source.startIndex}–{source.endIndex})
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm text-gray-500 italic">No citations available.</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {usageMetadata && (
                <div className="mt-10 text-sm text-gray-500 text-right">
                    Tokens Used: {usageMetadata.totalTokenCount ?? 'N/A'}
                </div>
            )}
        </div>
    );
};

export default ChatResponse;
