import React from 'react';
import "animate.css";
import {Routes, Route} from "react-router-dom";

import Home from './components/Home';
import Info from './components/Info';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path="/about" element = {<Info/>} />
        <Route path="/projects" element = {<Projects/>} />
        <Route path="/contact" element = {<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
