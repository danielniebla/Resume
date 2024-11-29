import React from 'react';
import Intro from '../components/introduction.tsx';
import perfil from '../assets/perfil.jpg';
import colage from '../assets/colage.png';
import wil from '../assets/whatILike.png';
import wal from '../assets/whatIAspire.png';

interface homeprops{
    Language :boolean;
};
const Home: React.FC<homeprops> = ({Language}) =>{
    return (
        <div className='px-4' >
            <Intro 
                title='Who am I?' 
                titles='¿Quien soy yo?'
                text="I am passionate about developing intuitive applications and turning data into valuable insights. I am looking for a role where I can apply my skills in development and optimization while contributing to the company's growth." 
                spanish='Me apasiona desarrollar aplicaciones intuitivas y convertir datos en información valiosa. Busco un puesto en el que pueda aplicar mis habilidades en desarrollo y optimización mientras contribuyo al crecimiento de la empresa.'
                rText="I am a full-stack software engineer with solid background and experience, recognized for my attention to detail and user-focused approach. I adapt quickly to new challenges and collaborate effectively to deliver high-quality solutions."
                rSpanish="Soy un ingeniero de software full-stack con dos años de experiencia, reconocido por mi atención al detalle y enfoque centrado en el usuario. Me adapto rápidamente a nuevos retos y colaboro eficazmente para ofrecer soluciones de alta calidad."
                img={perfil}
                horientation={true}
                language={Language}
                ></Intro>
            <Intro
                title='What do I do?' 
                titles='¿Que es lo que hago?'
                text="Recently, I've worked on back-end projects using Nest.js and Django, and I've also studied PHP Laravel to broaden my expertise. While I have a preference for front-end work, I'm open to contributing wherever necessary to improve the overall system."
                spanish="Recientemente, he trabajado en proyectos de back-end utilizando Nest.js y Django, y también he estudiado PHP Laravel para ampliar mis conocimientos. Aunque tengo preferencia por el trabajo front-end, estoy abierto a contribuir donde sea necesario para mejorar el sistema en general."
                rText="I focus on creating intuitive user experiences by optimizing tasks across the entire system, from front-end to back-end. Although I specialize in front-end, I’m flexible and willing to work in any area when needed."
                rSpanish="Me centro en crear experiencias de usuario intuitivas optimizando las tareas en todo el sistema, desde el front-end hasta el back-end. Aunque estoy especializado en front-end, soy flexible y estoy dispuesto a trabajar en cualquier área cuando sea necesario."
                img={colage}
                horientation={false}
                language={Language}
                ></Intro>
            <Intro 
                title='What do I like?' 
                titles='¿Que me gusta?'
                text="These fields allow me to apply creative solutions and expand my expertise. My curiosity keeps me open to exploring new topics and working on whatever is necessary for a project, which drives my continuous growth as a developer." 
                spanish='Estos campos me permiten aplicar soluciones creativas y ampliar mis conocimientos. Mi curiosidad me mantiene abierto a explorar nuevos temas y trabajar en lo que sea necesario para un proyecto, lo que impulsa mi crecimiento continuo como desarrollador.'
                rText="I enjoy front-end development for its impact on user experience, but I also have a strong interest in areas like data analysis, back-end development, and artificial intelligence. I'm always eager to learn and adapt to new challenges."
                rSpanish="Me gusta el desarrollo front-end por su impacto en la experiencia del usuario, pero también tengo un gran interés en áreas como el análisis de datos, el desarrollo back-end y la inteligencia artificial. Siempre tengo ganas de aprender y adaptarme a nuevos retos."
                img={wil}
                horientation={true}
                language={Language}
                ></Intro>
            <Intro
                title='What do I aspire?' 
                titles='¿Que espero ser?'
                text="My goal is to excel as a front-end engineer capable of working independently, delivering high-quality solutions with a strong focus on user experience. This vision motivates me to continuously develop both my broad and specialized skills."
                spanish='Mi objetivo es sobresalir como ingeniero front-end capaz de trabajar de forma independiente, ofreciendo soluciones de alta calidad con un fuerte enfoque en la experiencia del usuario. Esta visión me motiva a desarrollar continuamente mis habilidades tanto amplias como especializadas.'
                rText="I aspire to become a T-shaped engineer, combining full-stack proficiency with deep expertise in front-end development and UX/UI."
                rSpanish='Aspiro a convertirme en un ingeniero "T-shape", combinando competencia full-stack con profunda experiencia en desarrollo front-end y UX/UI(la expansion lateral en full-stack mas el profundo conocimiento de un tema forman la T en conocimientos).'
                img={wal}
                horientation={false}
                language={Language}
                ></Intro>
        </div>
    )
};

export default Home;