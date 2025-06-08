import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormPage from './components/FormPage';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<FormPage />} />
      <Route path='/result' element={<ResultPage />} />
    </Routes>
  );
}

export default App;
