import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './components/navBar.tsx';
import './App.css';
import Home from './home/home.tsx';
import About from './past/past.tsx';
import Experience from './experience/experience.tsx';
import Skills from './skills/skills.tsx';
import Courses from './courses/courses.tsx';


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header w-full ">
          <NavBar ></NavBar>
        </header>
        <div className='pt-24'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/past" element={<About />} />
            <Route path="/experiences" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
