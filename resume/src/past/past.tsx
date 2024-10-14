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
    <div className='p-8'> Images are in progress. Thank you for your patience!
        <Intro
        title='Pizza seller' 
        text='My most recent job, aside from my experience in software, was as a pizza seller at a stadium. This was an occasional role that helped me further improve my communication skills and ability to sell products effectively.'
        img={wal}
        horientation={true}
        ></Intro>
        <Intro
        title='grocery clerk' 
        text='During the COVID pandemic, my cousin opened a store, and I started helping him on weekends. This experience not only enhanced my customer service skills but also strengthened my sense of responsibility, managing 14-hour shifts.'
        img={wal}
        horientation={false}
        ></Intro>
        <div className='box-1 p-4 rounded-2xl'><p>After this, I began my university studies in Software Engineering at Universidad Autónoma de Sinaloa. While I had always prioritized my education, I started to devote even more attention to gaining experience and knowledge in software development, which led to less frequent work engagements. </p></div>
        <Intro
        title='Lifeguard' 
        text='Then in 2019, someone asked me to cover for them as a lifeguard at a pool. Since people appreciated my work and knew me, I took several lifeguard courses and ended up working there for months until the pandemic. During this time, I honed my communication skills, developed a friendly and professional demeanor, and learned how to manage people while maintaining a calm and safe environment.'
        img={wal}
        horientation={true}
        ></Intro>
         <Intro
        title='Electrician' 
        text='I finished my Technical High School in Mechatronics Engineering and started working as an Electrician. This job helped me improve my ability to follow instructions, manage tasks, and work efficiently on daily assignments. I worked from 2017 until 2019, when my boss lost clients due to the restrictions.'
        img={wal}
        horientation={false}
        ></Intro>
        <Intro
        title='Water Station Attendant' 
        text='My second job, from 2015 to 2017, was as a Water Station Attendant. In this role, I improved my soft skills by interacting with different types of people, who in this case were clients. This experience helped me grow in customer service and further develop my communication skills.'
        img={wal}
        horientation={true}
        ></Intro>
        <Intro
        title='Event Furniture Delivery' 
        text='My first job, from 2012 to 2015 (when I was 12 to 16 years old), was as an Event Furniture Delivery person. During this time, I discovered my strength in engaging warmly with clients and developed a strong sense of responsibility. This role ended when my boss found another job and closed the business.'
        img={wal}
        horientation={false}
        ></Intro>
    </div>
</div>;

export default Past;