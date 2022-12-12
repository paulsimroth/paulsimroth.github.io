import React from 'react';
import "animate.css";
import {Routes, Route} from "react-router-dom";

import Home from './components/Home';
import Info from './components/Info';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Data from './components/Data';
import Imprint from './components/Imprint';

function App() {
  return (
    <>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path="/about" element = {<Info/>} />
        <Route path="/education" element = {<Education/>} />
        <Route path="/projects" element = {<Projects/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/data" element = {<Data/>} />
        <Route path="/imprint" element = {<Imprint/>} />
      </Routes>
    </>
  );
}

export default App;
