import React, { useState } from 'react';

interface NavElementProps {
    description: string;
    imagen: React.ReactNode;
    init: boolean;
}

const NavElement: React.FC<NavElementProps> = ({ description, imagen, init }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return ( 
        <div className={` flex flex-col-reverse justify-center items-center h-24 ${init || hovered ? 'rounded-br-none rounded-bl-none w-20 mb-0 bg-b p-2 rounded-full align-bottom ' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {(hovered || init) && (
                    <p className="m-0 p-0 text-center text-bg text-sm ">{description}</p>
            )}
            <div
                className={`w-16 h-16 m-auto bg-mbb rounded-full flex flex-col justify-center items-center p-4 `}
                
            >
                <div className={` w-full h-full rounded-full flex justify-center items-center`}>
                    {imagen}
                </div>
            </div>
            
        </div>
    );
};

export default NavElement;
