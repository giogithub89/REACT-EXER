import { Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import React from 'react';
import Counter from './Counter';
import { ShowGithubUser } from './ShowGithubUser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome name={'Giovanni'}/>} />
      <Route path='/counter' element= {<Counter/> }/>
      <Route path="users/:username" element={<ShowGithubUser/>} />

    </Routes>
  );
}

export default App;
