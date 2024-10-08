import React from 'react';
import Intro from '../components/introduction.tsx';
import perfil from '../assets/perfil.jpg';
import colage from '../assets/colage.png';
import wil from '../assets/whatILike.png';
import wal from '../assets/whatIAspire.png';

const Wid = () => {
    return (
      <div>
        <p>I always think about the user and how to do all tasks intuitive and in less time because that is how the software can improve the final user experience, sometimes to make it I can do so many things back-end, front-end, data analysis, or investigation, like an engineer, I can define this as optimization and it can be played on every process in a system from front-end to data analysis or even back-end, I can participate in every area if necessary even if I like the front-end I'm not closed to doing anything.</p>
        <p>I have worked in the backend recently on projects with nest.js, and Django at another time, and I studied php Laravel to know how it works.</p>
        <p>Front-end work is easier to show up so I will do it here in the next sections.</p>
      </div>
    );
};


const Home = () => 
<div className='p-4' >
    <Intro 
        title='Who am I?' 
        text="Software engineer with extensive experience, passionate about developing intuitive applications and data analysis. 
            Self-taught and in constant search for improvement, I strive to create solutions that users enjoy and to transform data into valuable information, which together communicate correctly for decision making. 
            I am looking for a position where I can apply my skills in application development, optimization, and data management, contributing to the company's growth while developing my career as a software engineer." 
        img={perfil}
        horientation={true}
        ></Intro>
    <Intro
        title='What do I do?' 
        text=<Wid/>
        img={colage}
        horientation={false}
        ></Intro>
    <Intro 
        title='What do I like?' 
        text="Most of the time, I enjoy working on front-end development because it is one of the most effective ways to improve the user experience by creating intuitive and enjoyable interfaces. However, I also have a strong interest in exploring other areas, such as data analysis, back-end development, and even artificial intelligence. These fields allow me to expand my knowledge and apply creative solutions in different contexts. This curiosity drives me to constantly learn and adapt, which is why I remain open to working on any topic that piques my interest or is necessary for a project." 
        img={wil}
        horientation={true}
        ></Intro>
    <Intro
        title='What do I aspire?' 
        text="I aspire to become a T-shaped engineer, a concept I recently learned about in a course. This means being proficient in the fundamental skills of a full-stack engineer, while also having deep expertise in front-end development and UX/UI. My goal is to excel as a front-end engineer who can work independently and deliver high-quality solutions with a strong focus on user experience."
        img={wal}
        horientation={false}
        ></Intro>
</div>;

export default Home;