import { Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome name={'Giovanni'}/>} />
      <Route path='/counter' element= {<Counter/> }/>
    </Routes>
  );
}

export default App;
