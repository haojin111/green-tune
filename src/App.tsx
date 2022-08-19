import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Main from './layouts/Main';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </Main>
  );
}

export default App;
