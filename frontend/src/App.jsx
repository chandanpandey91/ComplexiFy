import React, { useState } from 'react';
import CodeInput from './components/CodeInput';
import AnalysisResult from './components/AnalysisResult';

function App() {
  const [code, setCode] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null); // Reset previous errors

    try {
      const response = await fetch('http://localhost:10000/anal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze code');
      }

      const data = await response.json();
      setAnalysis(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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

     {/* Main Content */}
<main className="bg-black text-white flex-grow flex flex-col items-center py-10">
  <CodeInput 
    code={code} 
    setCode={setCode} 
    onAnalyze={handleAnalyze} 
  />
  
  {loading && <p className="text-white">Analyzing...</p>}

  {error && <p className="text-red-500">{error}</p>}

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