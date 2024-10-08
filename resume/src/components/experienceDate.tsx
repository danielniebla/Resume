import React from "react";

interface Exp {
  date: string,
  img: string,
  horientation:boolean,
}

const Exp2: React.FC<Exp> = ({date, img, horientation}) => {
  return (
    <div className="h-full">
        {horientation ?
        (
            <div className="grid-cols-3 grid items-center justify-items-center h-full">
                <div
                  className="col-start-1 col-end-3 h-full w-full bg-contain bg-no-repeat bg-center none "
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <h2 className="col-start-3">{date}</h2>
            </div>
        ):(
            <div className="grid-cols-3 grid items-center justify-items-center h-full">
                <h2 className="col-start-1">{date}</h2>
                <div
                  className="col-start-2 col-end-4 h-full w-full bg-contain bg-no-repeat bg-center none"
                  style={{ backgroundImage: `url(${img})`  }}
                ></div>
            </div>
        )}
    </div>
    
  );
};

export default Exp2;