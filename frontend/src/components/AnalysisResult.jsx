import React from 'react';

const AnalysisResult = ({ analysis }) => {
  return (
    <div className="w-full max-w-3xl bg-green-100 p-6 mt-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Analysis Result</h2>
      <p className="text-lg text-black font-medium">
        Time Complexity: <span className="font-bold">{analysis.time_complexity}</span>
      </p>
      <p className="text-lg text-black font-medium">
        Space Complexity: <span className="font-bold">{analysis.space_complexity}</span>
      </p>
    </div>
  );
};

export default AnalysisResult;
