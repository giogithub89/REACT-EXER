import { Routes, Route, Link, Outlet} from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import React from 'react';
import Counter from './Counter';
import ShowGithubUser  from './ShowGithubUser';
import NoPage from './NoPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name={"Giovanni"} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <ul>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="users/:username">ShowGithubUser</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
