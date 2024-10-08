import React from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";
import Exp1 from '../components/experienceText.tsx';
import Exp2 from '../components/experienceDate.tsx';
import colage from '../assets/colage.png';
import stat from '../assets/static.webp';
import trev from '../assets/trev.webp';
import cecsin from '../assets/cecsin.png';
import paint from '../assets/paint.png';
import uas from '../assets/uas.png';
import spiral from '../assets/spiral.webp';


const Experience = () => 
<div className='p-4'>
    <div className="box-1 rounded-2xl p-4 ">
            <h2 className=" font-semibold">My personal and profesional projects</h2>
            <p>These are projects I completed in both personal and professional environments, serving as proof of my knowledge and skills.</p>
    </div>    
    <div className='lifeLine py-4 items-center gap-4'>
        {/* proyecto web de generacion de paginas estaticas*/}
        <Exp1 title='Static web generator' 
            textOne='This is my own project, aimed at simplifying static web apps with complex layouts and other features. I created a component that allows users to generate a web page from a JSON file, which can be easily produced by an intuitive user interface. This system can be applied to create things like documents, restaurant menus, and more, making web development easier.' 
            textTwo="I developed this project with the goal of simplifying tasks I frequently encounter, making them more accessible not only for developers but also for all types of users. I'm still working on it, but I aim to create something that everyone can use." 
            link='https://brayhan.notion.site/Get-in-touch-4aea186bdcf74443b68542e417c46da0?pvs=4'/>
        <FaLongArrowAltUp className='h-14 p-0 m-auto none' />
        <Exp2 date='Today' img={stat} horientation={false}></Exp2>
         {/* Cecsin */}
         <Exp2 date='15/12/69' img={cecsin} horientation={true}></Exp2>
        <FaLongArrowAltUp className='h-14 p-0 m-auto none' />
        <Exp1 title='Cecsin a web for school' 
            textOne='This project involved developing a web-based program similar to Paint, using only JavaScript and no external libraries. I implemented the functionality by painting pixel by pixel on a canvas, calculating geometric shape logic for tasks such as moving, transforming, and rotating shapes, among other features.' 
            textTwo="This was a significant achievement, as I had to leverage all my programming knowledge to ensure the app's performance and efficiency."
            link='https://brayhan.notion.site/visual-portfolio-e22433c3f63c442eadfd593f9b59cfc7?pvs=4' />
        {/* trevber */}
        <Exp1 title='Tester and mobile developer trevber project' 
            textOne="I worked on testing this project to ensure it was ready for launch by identifying and fixing any bugs I found. I also completed specific tasks assigned by the manager. The project was built using Flutter with a client-server architecture." 
            textTwo='Someone asked me if I could help speed up the app’s launch, focusing on making sure it was ready on time. I dedicated all my efforts to learning Flutter and understanding the project in depth to meet the deadline.'
            link='https://brayhan.notion.site/visual-portfolio-e22433c3f63c442eadfd593f9b59cfc7?pvs=4'/>
        <FaLongArrowAltUp className='h-14 p-0 m-auto none' />
        <Exp2 date='December 2023 -> January 2024' img={trev} horientation={false}></Exp2>
        {/* paint */}
        <Exp2 date='15/12/69' img={paint} horientation={true}></Exp2>
        <FaLongArrowAltUp className='h-14 p-0 m-auto none' />
        <Exp1 title='Drawing web app' 
            textOne="This project involved developing a web-based program similar to Paint, using only JavaScript and no external libraries. I implemented the functionality by painting pixel by pixel on a canvas, calculating geometric shape logic for tasks such as moving, transforming, and rotating shapes, among other features." 
            textTwo="This was a significant achievement, as I had to leverage all my programming knowledge to ensure the app's performance and efficiency."
            link='https://ravenclaw.netlify.app/'/>
        {/* uas */}
        <Exp1 title='Universidad Autonoma de Sinaloa' 
            textOne='I participated in this project as the team lead and front-end manager. I developed the entire front-end project using Angular and was also responsible for most of the documentation.' 
            textTwo='This was my social service project, where the manager acted as the client, specifying the requirements for the project. He also requested the documentation to be written as a thesis, encouraging us to approach the project with the same rigor and depth.'
            link='https://brayhan.notion.site/UAS-recommendations-119e9b1c6cc9804892e9faf4bb2c0737?pvs=4' />
        <FaLongArrowAltUp className='h-14 p-0 m-auto none' />
        <Exp2 date='08/23 - 03/24' img={uas} horientation={false}></Exp2>
        {/* spiral */}
        <Exp2 date='08/21 - 03/22' img={spiral} horientation={true}></Exp2>
        <FaLongArrowAltUp className='h-14 p-0 m-auto none' />
        <Exp1 title='Spiral Media labs' 
            textOne="I have experience developing web apps with Django, creating CRUD functionalities and implementing business logic. For the front-end, I used Bootstrap templates to build responsive interfaces. I collaborated with my team using Basecamp for project management, Git for version control, and held daily meetings via Discord to ensure smooth communication and progress." 
            textTwo='This was my first professional experience during my second year of studies, as I sought hands-on practice. It was here that I discovered Bootstrap and learned Git. I also became familiar with project management platforms like Basecamp, and we followed the Scrum methodology to manage our tasks. This experience gave me valuable insights into teamwork, sprint planning, and iterative development.'
            link='https://brayhan.notion.site/Get-in-touch-4aea186bdcf74443b68542e417c46da0?pvs=4'/>

    </div>

</div>;

export default Experience;
