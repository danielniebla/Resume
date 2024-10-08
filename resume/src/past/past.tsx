import React from 'react';
import Intro from '../components/introduction.tsx';
import perfil from '../assets/perfil.jpg';
import colage from '../assets/colage.png';
import wil from '../assets/whatILike.png';
import wal from '../assets/whatIAspire.png';

const Past = () => 
<div className='p-4' >
    <div className="box-1 rounded-2xl p-4 rounded-bl-none rounded-tl-none">
        <h2 className=" font-semibold">My past before IT</h2>
        <p>Some one told me that soft skills gained in other areas could be a great aport to my resume, so I will try to talk about my abilities for each work </p>
    </div>
    <Intro 
        title='Who am I?' 
        text='this is a pruve of what can i do' 
        img={perfil}
        horientation={true}
        ></Intro>
    <Intro
        title='What do I do?' 
        text='this is a pruve of what can i do' 
        img={colage}
        horientation={false}
        ></Intro>
    <Intro 
        title='What do I like?' 
        text='this is a pruve of what can i do' 
        img={wil}
        horientation={true}
        ></Intro>
    <Intro
        title='What do I aspire?' 
        text='this is a pruve of what can i do' 
        img={wal}
        horientation={false}
        ></Intro>
</div>;

export default Past;