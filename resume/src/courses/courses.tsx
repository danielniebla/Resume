import React from 'react';
import Gito from '../components/getInTouch.tsx'

const Courses = () => <div>
    <div className="box-1 rounded-2xl p-4 flex">
        <div>
            <h2 className=" font-semibold">My courses</h2>
            <p>Here, I will outline the courses I have completed to enhance my software engineering skills.</p>
        </div>
        <Gito  />
    </div>  
    <div className='p-8'> Working on it, I hope you are already interested... <Gito/></div>
</div>;

export default Courses;