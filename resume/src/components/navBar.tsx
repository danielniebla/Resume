import NavElement from './navElement.tsx';
import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { TbArrowBack } from "react-icons/tb";
import { SiCoursera } from "react-icons/si";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Usar Link de react-router-dom

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [state, setState] = useState({
    introduction: true,
    experiences: false,
    skills: false,
    past: false,
    courses: false,
  });

  const handleStateUpdate = (dynamicKey: string) => {
    setState({
      introduction: false,
      experiences: false,
      skills: false,
      past: false,
      courses: false,
      [dynamicKey]: true, // Actualiza solo la propiedad seleccionada a true
    });
  };

  // UseEffect para verificar que el estado se actualiza correctamente
  useEffect(() => {
    console.log("Estado actualizado:", state);
  }, [state]);

  return (
    <div className="flex bg-db justify-around w-full">
      {/* Usar Link en lugar de a para evitar recarga de página */}
      <Link to="/" onClick={() => handleStateUpdate("introduction")}>
        <NavElement 
          description="introduction" 
          imagen={<FaHouseChimneyUser className="w-8 h-8" />} 
          init={state.introduction} 
        />
      </Link>
      <Link to="/experiences" onClick={() => handleStateUpdate("experiences")}>
        <NavElement 
          description="experiences" 
          imagen={<FaPersonArrowUpFromLine className="w-8 h-8" />} 
          init={state.experiences} 
        />
      </Link>
      <Link to="/skills" onClick={() => handleStateUpdate("skills")}>
        <NavElement 
          description="skills" 
          imagen={<GiSkills className="w-8 h-8" />} 
          init={state.skills} 
        />
      </Link>
      <Link to="/past" onClick={() => handleStateUpdate("past")}>
        <NavElement 
          description="past" 
          imagen={<TbArrowBack className="w-8 h-8" />} 
          init={state.past} 
        />
      </Link>
      <Link to="/courses" onClick={() => handleStateUpdate("courses")}>
        <NavElement 
          description="courses" 
          imagen={<SiCoursera className="w-8 h-8" />} 
          init={state.courses} 
        />
      </Link>
    </div>
  );
};

export default NavBar;
