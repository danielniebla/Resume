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
const Wids = () => {
    return (
      <div>
        <p>Siempre pienso en el usuario y en cómo hacer todas las tareas de forma intuitiva y en menos tiempo porque así es como el software puede mejorar la experiencia final del usuario, a veces para hacerlo puedo hacer diferentes tareas back-end, front-end, análisis de datos, o investigación, como un ingeniero, puedo definir esto como optimización y se puede aplicar en todos los procesos de un sistema desde front-end hasta análisis de datos o incluso back-end, puedo participar en todas las áreas si es necesario aunque me guste el front-end no me cierro a hacer nada en especifico.</p>
        <p>He trabajado en el backend recientemente en proyectos con nest.js, y Django en otro momento, y estudié php Laravel para probar cómo funciona.</p>
        <p>El trabajo de front-end es más fácil de mostrar, así que lo haré aquí en las siguientes secciones.</p>
      </div>
    );
};

interface homeprops{
    Language :boolean;
};
const Home: React.FC<homeprops> = ({Language}) =>{
    return (
        <div className='px-4' >
            <Intro 
                title='Who am I?' 
                titles='¿Quien soy yo?'
                text="Software engineer with extensive experience, passionate about developing intuitive applications and data analysis. 
                    Self-taught and in constant search for improvement, I strive to create solutions that users enjoy and to transform data into valuable information, which together communicate correctly for decision making. 
                    I am looking for a position where I can apply my skills in application development, optimization, and data management, contributing to the company's growth while developing my career as a software engineer." 
                spanish='Soy un ingeniero de software con amplia experiencia, apasionado por el desarrollo de aplicaciones intuitivas y el análisis de datos. 
                    Autodidacta y en constante búsqueda de mejora, me esfuerzo por crear soluciones que gusten a los usuarios y transformar los datos en información valiosa, que en conjunto aseguren una buena comunicacion para la toma de decisiones. 
                    Busco un puesto en el que pueda aplicar mis habilidades en desarrollo de aplicaciones, optimización y gestión de datos, contribuyendo al crecimiento de la empresa mientras desarrollo mi carrera como ingeniero de software.'
                img={perfil}
                horientation={true}
                language={Language}
                ></Intro>
            <Intro
                title='What do I do?' 
                titles='¿Que es lo que hago?'
                text=<Wid/>
                spanish=<Wids/>
                img={colage}
                horientation={false}
                language={Language}
                ></Intro>
            <Intro 
                title='What do I like?' 
                titles='¿Que me gusta?'
                text="Most of the time, I enjoy working on front-end development because it is one of the most effective ways to improve the user experience by creating intuitive and enjoyable interfaces. However, I also have a strong interest in exploring other areas, such as data analysis, back-end development, and even artificial intelligence. These fields allow me to expand my knowledge and apply creative solutions in different contexts. This curiosity drives me to constantly learn and adapt, which is why I remain open to working on any topic that piques my interest or is necessary for a project." 
                spanish='La mayor parte del tiempo, disfruto trabajando en el desarrollo front-end porque es una de las formas más eficaces de mejorar la experiencia del usuario creando interfaces intuitivas y agradables. Sin embargo, también me interesa mucho explorar otras áreas, como el análisis de datos, el desarrollo back-end e incluso la inteligencia artificial. Estos campos me permiten ampliar mis conocimientos y aplicar soluciones creativas en diferentes contextos. Esta curiosidad me impulsa a aprender y adaptarme constantemente, por lo que estoy abierto a trabajar en cualquier tema que despierte mi interés o sea necesario para un proyecto.'
                img={wil}
                horientation={true}
                language={Language}
                ></Intro>
            <Intro
                title='What do I aspire?' 
                titles='¿Que espero ser?'
                text="I aspire to become a T-shaped engineer, a concept I recently learned about in a course. This means being proficient in the fundamental skills of a full-stack engineer, while also having deep expertise in front-end development and UX/UI. My goal is to excel as a front-end engineer who can work independently and deliver high-quality solutions with a strong focus on user experience."
                spanish='Aspiro a convertirme en un ingeniero en forma de T, un concepto que aprendí hace poco en un curso. Esto significa ser competente en las habilidades fundamentales de un ingeniero full-stack, mientras que también tenga una profunda experiencia en el desarrollo front-end y UX/UI. Mi objetivo es sobresalir como un ingeniero front-end que puede trabajar de forma independiente y ofrecer soluciones de alta calidad con un fuerte enfoque en la experiencia del usuario.'
                img={wal}
                horientation={false}
                language={Language}
                ></Intro>
        </div>
    )
};

export default Home;