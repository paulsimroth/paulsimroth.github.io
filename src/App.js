import React from 'react';
import "animate.css";
import {Routes, Route} from "react-router-dom";
import "./App.css";

import Home from './components/home/Home';
import Info from './components/info/Info';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Data from './components/data/Data';
import Imprint from './components/imprint/Imprint';

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
