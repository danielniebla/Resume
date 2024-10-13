import React from 'react';
import Gito from '../components/getInTouch.tsx';
import wal from '../assets/whatIAspire.png';
import Intro from '../components/introduction.tsx';


const Past = () => 
<div className='p-4' >
    <div className="box-1 rounded-2xl p-4 flex">
        <div>
            <h2 className=" font-semibold">My past before IT</h2>
            <p>Someone told me that the soft skills I’ve gained in other areas could be a great addition to my resume, so I’ll try to highlight my abilities for each job.</p>
        </div>
        <Gito  />
    </div>  
    <div className='p-8'> Working on it, I hope you are already interested... <Gito/>
    <Intro
        title='Event Furniture Delivery' 
        text='My first job, from 2012 to 2016 (when I was 12 to 16 years old), was as an Event Furniture Delivery person. During this time, I discovered my strength in engaging warmly with clients and developed a strong sense of responsibility. This role ended when my boss found another job and closed the business.'
        img={wal}
        horientation={false}
        ></Intro>
        <Intro
        title='Water Station Attendant' 
        text='My second job, from 2016 to 2018, was as a Water Station Attendant. In this role, I improved my soft skills by interacting with different types of people, who in this case were clients. This experience helped me grow in customer service and further develop my communication skills.'
        img={wal}
        horientation={true}
        ></Intro>
    </div>
</div>;

export default Past;