import React, { useState } from 'react';

interface Exp {
  title: string,
  titulo: string,
  textOne: string,
  textoUno: string,
  textTwo: string,
  textoDos: string,
  language:boolean,
  link: string,
}

const Exp1: React.FC<Exp> = ({title,titulo, textOne, textoUno, textTwo,textoDos, link, language}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => { 
    setOpen(!open);
  };
  return (
      <div className="box-1 rounded-2xl p-4 ">
        <h2 className=" font-semibold ">{language?title:titulo}</h2>
        <p className="bb py-4">{language?textOne:textoUno}</p>
        <div >
        {open ? (<div><p className="py-4">{language?textTwo:textoDos}</p> <a href={link} target="_blank" rel="noopener noreferrer"><p className='lmb py-2'>I wana know more</p></a><p className='lmb py-4' onClick={handleClick}>Less..</p></div>)
        : (<p className="py-4 lmb" onClick={handleClick}>More...</p>)}
        </div>

      </div>
  );
};

export default Exp1;