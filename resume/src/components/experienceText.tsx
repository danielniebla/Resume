import React, { useState } from 'react';

interface Exp {
  title: string,
  textOne: string,
  textTwo: string,
  link: string,
}

const Exp1: React.FC<Exp> = ({title, textOne, textTwo, link}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
      <div className="box-1 rounded-2xl p-4 ">
        <h2 className=" font-semibold ">{title}</h2>
        <p className="bb py-4">{textOne}</p>
        <div >
        {open ? (<div><p className="py-4">{textTwo}</p> <a href={link} target="_blank"><p className='lmb py-2'>I wana know more</p></a><p className='lmb py-4' onClick={handleClick}>Less..</p></div>)
        : (<p className="py-4 lmb" onClick={handleClick}>More...</p>)}
        </div>

      </div>
  );
};

export default Exp1;