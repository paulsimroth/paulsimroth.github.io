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
        <Route path="/portfolio" element = {<Home/>}/>
        <Route path="/portfolio/about" element = {<Info/>} />
        <Route path="/portfolio/projects" element = {<Projects/>} />
        <Route path="/portfolio/contact" element = {<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
