import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './components/navBar.tsx';
import './App.css';
import Home from './home/home.tsx';
import About from './past/past.tsx';
import Experience from './experience/experience.tsx';
import Skills from './skills/skills.tsx';
import Courses from './courses/courses.tsx';
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";


function App() {
  const [language, setLanguage] = useState(true);
  const handleCheckboxChange = () => {
    setLanguage(!language); 
  };
  return (
    <div className="App">
      <Router>
        <header className="App-header w-full ">
          <NavBar ></NavBar>
        </header>
        <div className='pt-24'>
          <div className="p-4 pb- 0 w-fit">
          <div className="box-1 p-4 m-auto items-center rounded-2xl flex" onClick={handleCheckboxChange}>
              <h2 className='px-4'>{language ?'¿Hablas español?' : 'Do you speak English?'}</h2>
              {language ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
          </div>
          </div>
          <Routes>
            <Route path="/" element={<Home Language={language}/>} />
            <Route path="/past" element={<About />} />
            <Route path="/experiences" element={<Experience Language={language} />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
