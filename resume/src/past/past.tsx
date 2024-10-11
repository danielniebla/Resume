import React from 'react';
import Gito from '../components/getInTouch.tsx';


const Past = () => 
<div className='p-4' >
    <div className="box-1 rounded-2xl p-4 flex">
        <div>
            <h2 className=" font-semibold">My past before IT</h2>
            <p>Some one told me that soft skills gained in other areas could be a great aport to my resume, so I will try to talk about my abilities for each work.</p>
        </div>
        <Gito  />
    </div>  
    <div className='p-8'> Working on it, I hope you are already interested... <Gito/></div>
</div>;

export default Past;