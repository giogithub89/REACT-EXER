import { Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import React from 'react';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome name={'Giovanni'}/>} />
      
    </Routes> 
  );
}

export default App;
