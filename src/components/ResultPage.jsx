import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center mt-10">
        <p>No data found!</p>
        <button onClick={() => navigate('/')} className="mt-4 bg-blue-500 text-white p-2 rounded">Go Back</button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Submitted Details</h2>
      {Object.entries(state).map(([key, value]) => (
        <p key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}</p>
      ))}
      <button
        onClick={() => navigate('/')}
        className="mt-6 bg-blue-500 text-white p-2 rounded"
      >
        Back to Form
      </button>
    </div>
  );
}

export default ResultPage;
