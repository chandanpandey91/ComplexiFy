import React from 'react';

const CodeInput = ({ code, setCode, onAnalyze }) => {
  return (
    <div className="w-full bg-black max-w-3xl  p-6 rounded-lg shadow-lg">
      <textarea
        className="w-full bg-black h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <button
        onClick={onAnalyze}
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Analyze Complexity
      </button>
    </div>
  );
};

export default CodeInput;
