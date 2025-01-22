// App.jsx
import React, { useState } from 'react';
import CodeInput from './components/CodeInput';
import AnalysisResult from './components/AnalysisResult';

function App() {
  const [code, setCode] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = async () => {
    // Mocked analysis logic (replace with real API integration)
    const mockAnalysis = {
      timeComplexity: 'O(n^2)',
      spaceComplexity: 'O(n)',
    };
    setAnalysis(mockAnalysis);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold hover:text-blue-300 transition duration-300">CompLexify</h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-300 transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-300">Features</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section
      <header className="bg-slate-500-50 py-10 text-center">
        <h2 className="text-4xl font-bold text-blue-600">Welcome to CompLexify</h2>
        <p className="text-lg text-gray-700 mt-4">Analyze the time and space complexity of your code with ease.</p>
      </header> */}

      {/* Main Content */}
      <main className="bg-black flex-grow flex flex-col items-center py-10">
        <CodeInput code={code} setCode={setCode} onAnalyze={handleAnalyze} />
        {analysis && <AnalysisResult analysis={analysis} />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">Created by Chandan Pandey | © {new Date().getFullYear()} CompLexify</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
