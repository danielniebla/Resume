import React,{ useState } from "react";
import Gito from "./getInTouch.tsx";

interface imgLeft {
  title: string,
  titles: string,
  text: string,
  rText: string,
  spanish: string,
  rSpanish: string,
  img: string,
  horientation: boolean,
  language: boolean,

}

const Intro: React.FC<imgLeft> = ({title,titles, text, img, horientation,language,spanish,rSpanish,rText}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => { 
    setOpen(!open);
  };
  return (
    <div>
    { horientation ?
      (<div className="grid-1-5 py-4 justify-center items-center">
        <div className="br ">
        <img 
          src={img} 
          alt="descriptive" 
          className="rounded-2xl rounded-br-none rounded-tr-none none" 
        />
        </div>
        <div className="box-1 rounded-2xl p-4 rounded-bl-none rounded-tl-none">
          <div className="flex py-2">
            <h2 className=" font-semibold">{language?title:titles}</h2>
            <Gito/>
          </div>
          <p className="text-justify">{language?rText:rSpanish} </p>
          {open ? (<div><p className="py-4 text-justify">{language?text:spanish}</p><p className='lmb py-4' onClick={handleClick}>{language?'Less...':'menos...'}</p></div>)
        : (<p className="py-4 lmb" onClick={handleClick}>{language?'More...':'Mas...'}</p>)}
        </div>
      </div>)
    :
      (<div className="grid-5-1 py-4  justify-center items-center">
        <div className="box-1 rounded-2xl p-4 rounded-br-none rounded-tr-none ">
          <div className="flex py-2">
            <h2 className=" font-semibold">{language?title:titles}</h2>
            <Gito/>
          </div>
          <p className="text-justify">{language?rText:rSpanish} </p>
          {open ? (<div><p className="py-4 text-justify">{language?text:spanish}</p><p className='lmb py-4' onClick={handleClick}>{language?'Less...':'menos...'}</p></div>)
        : (<p className="py-4 lmb" onClick={handleClick}>{language?'More...':'Mas...'}</p>)}
        </div>
        <div className=" bl">
          <img src={img} alt="descriptive " className="rounded-2xl none rounded-bl-none rounded-tl-none none" />
        </div>
      </div>)
    }
    </div>
  );
};

export default Intro;