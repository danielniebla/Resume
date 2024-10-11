import React from "react";
import Gito from "./getInTouch.tsx";

interface imgLeft {
  title: string,
  text: React.ReactNode,
  img: string,
  horientation: boolean,
}

const Intro: React.FC<imgLeft> = ({title, text, img, horientation}) => {
  return (
    <div>
    { horientation ?
      (<div className="grid-1-5 py-4 justify-center items-center">
        <div className="br ">
          <img src={img} alt="descriptive" className="rounded-2xl none rounded-br-none rounded-tr-none " />
        </div>
        <div className="box-1 rounded-2xl p-4 rounded-bl-none rounded-tl-none">
          <div className="flex py-2">
            <h2 className=" font-semibold">{title}</h2>
            <Gito/>
          </div>
          <div>{text} </div>
        </div>
      </div>)
    :
      (<div className="grid-5-1 py-4  justify-center items-center">
        <div className="box-1 rounded-2xl p-4 rounded-br-none rounded-tr-none ">
          <div className="flex py-2">
            <h2 className=" font-semibold">{title}</h2>
            <Gito/>
          </div>
          <p>{text} </p>
        </div>
        <div className=" bl">
          <img src={img} alt="descriptive " className="rounded-2xl none rounded-bl-none rounded-tl-none" />
        </div>
      </div>)
    }
    </div>
  );
};

export default Intro;