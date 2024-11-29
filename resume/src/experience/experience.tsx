import React from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";
import Exp1 from '../components/experienceText.tsx';
import Exp2 from '../components/experienceDate.tsx';
import stat from '../assets/static.webp';
import trev from '../assets/trev.webp';
import cecsin from '../assets/cecsin.png';
import paint from '../assets/paint.png';
import uas from '../assets/uas.png';
import spiral from '../assets/spiral.webp';
import Gito from '../components/getInTouch.tsx';

interface experienceprops{
    Language:boolean;
}

const Experience: React.FC<experienceprops> =({Language}) =>{
    return(
        <div className='p-4'>
            <div className="box-1 rounded-2xl p-4 flex">
                <div>
                    <h2 className=" font-semibold">{Language?'My personal and profesional projects':'Mis proyectos personales y profesionales'}</h2>
                    <p>{Language?'These are projects I completed in both personal and professional environments, serving as proof of my knowledge and skills.':'Estos son proyectos en ambientes personales y profesionales, que sirven de prueba de mi conocimiento y habilidades.'}</p>
                </div>
                <Gito  />
            </div>    
            <div className='lifeLine py-4 items-center gap-4'>
                {/* Cecsin */}
                <Exp2 date='15/12/69' img={cecsin} horientation={true}></Exp2>
                <FaLongArrowAltUp className='h-14 p-0 m-auto none' />
                <Exp1 title='Cecsin a web for school' 
                    titulo='Cecsin una web para una escuela'
                    textOne='Built for a private school using React and Nest.js, this system manages students, teachers, and courses. It features enrollment, tuition payments, cash closing, and some other CRUD operations. My role focused on planning and creating the front end while testing, bug-fixing, and adding some features to the back end.' 
                    textoUno='Diseñado para una escuela privada usando React y Nest.js, este sistema gestiona estudiantes, profesores y cursos. Cuenta con inscripción, pagos de matrícula, cierre de caja, y algunas otras operaciones CRUD. Mi papel se centró en la planificación y la creación del front end, mientras que hacia pruebas, corrección de errores, y la adición de algunas características para el back-end.'
                    textTwo="This project was a valuable experience as it allowed me to work closely with the client, focusing on their design needs, desired features, and overall project requirements. Collaborating directly with the client also helped in clearly defining the project’s deadlines."
                    textoDos='Este proyecto fue una experiencia valiosa, ya que me permitió trabajar en estrecha colaboración con el cliente, centrándome en sus necesidades de diseño, las características deseadas y los requisitos generales del proyecto. Colaborar directamente con el cliente también ayudó a definir claramente los plazos del proyecto.'
                    link='https://brayhan.notion.site/visual-portfolio-e22433c3f63c442eadfd593f9b59cfc7?pvs=4' 
                    language={Language}/>
                {/* uas */}
                <Exp1 title='Universidad Autonoma de Sinaloa'
                    titulo='Universidad Autonoma de Sinaloa' 
                    textOne='I led the team and developed the front end using Angular, Firebase, JSON REST API, and Clarity Design. This role allowed me to tackle complex challenges with efficient, creative solutions.' 
                    textoUno='Lideré el equipo y desarrollé el front-end utilizando Angular, Firebase, JSON REST API y Clarity Design. Este papel me permitió abordar retos complejos con soluciones eficientes y creativas.'
                    textTwo='Managing requirements and working closely with stakeholders enhanced my leadership and problem-solving skills, making this project an invaluable learning experience in delivering functional, user-focused web applications.'
                    textoDos='Gestionar los requisitos y trabajar estrechamente con las partes interesadas mejoró mis habilidades de liderazgo y resolución de problemas, haciendo de este proyecto una experiencia de aprendizaje invaluable en la entrega de aplicaciones web funcionales y centradas en el usuario.'
                    link='https://brayhan.notion.site/UAS-recommendations-119e9b1c6cc9804892e9faf4bb2c0737?pvs=4' 
                    language={Language}/>
                <FaLongArrowAltUp className='h-14 p-0 m-auto none' />
                <Exp2 date='08/23 - 03/24' img={uas} horientation={false}></Exp2>
                {/* paint */}
                <Exp2 date='15/12/69' img={paint} horientation={true}></Exp2>
                <FaLongArrowAltUp className='h-14 p-0 m-auto none' />
                <Exp1 title='Drawing web app' 
                    titulo= 'App web de dibujo'
                    textOne="This project involved developing a web-based program similar to Paint, using only JavaScript and no external libraries. I implemented the functionality by painting pixel by pixel on a canvas, calculating geometric shape logic for tasks such as moving, transforming, and rotating shapes, among other features." 
                    textoUno='Este proyecto consistió en desarrollar un programa basado en web similar a Paint, utilizando únicamente JavaScript y sin librerías externas. Implementé la funcionalidad pintando píxel a píxel sobre un lienzo, calculando la lógica de formas geométricas para tareas como mover, transformar y rotar formas, entre otras características.'
                    textTwo="This was a significant achievement, as I had to leverage all my programming knowledge to ensure the app's performance and efficiency."
                    textoDos='Fue un logro importante, ya que tuve que aprovechar todos mis conocimientos de programación para garantizar el rendimiento y la eficacia de la aplicación.'
                    link='https://ravenclaw.netlify.app/'
                    language={Language}/>
                {/* trevber */}
                <Exp1 title='Tester and mobile developer trevber project'
                    titulo='Pruebas y desarrollo mobil proyecto trevber' 
                    textOne="I worked on testing this project to ensure it was ready for launch by identifying and fixing any bugs I found. I also completed specific tasks assigned by the manager. The project was built using Flutter with a client-server architecture." 
                    textoUno='Trabajé en las pruebas de este proyecto para asegurarme de que estaba listo para su lanzamiento, identificando y corrigiendo los errores que encontraba. También completé tareas específicas asignadas por el encargado. El proyecto se construyó utilizando Flutter con una arquitectura cliente-servidor.'
                    textTwo='Someone asked me if I could help speed up the app’s launch, focusing on making sure it was ready on time. I dedicated all my efforts to learning Flutter and understanding the project in depth to meet the deadline.'
                    textoDos='Alguien me preguntó si podía ayudar a acelerar el lanzamiento de la app, centrándome en asegurarme de que estuviera lista a tiempo. Dediqué todos mis esfuerzos a aprender Flutter y a entender el proyecto en profundidad para cumplir el plazo.'
                    link='https://brayhan.notion.site/visual-portfolio-e22433c3f63c442eadfd593f9b59cfc7?pvs=4'
                    language={Language}/>
                <FaLongArrowAltUp className='h-14 p-0 m-auto none' />
                <Exp2 date='December 2023 -> January 2024' img={trev} horientation={false}></Exp2>
                {/* spiral */}
                <Exp2 date='08/21 - 03/22' img={spiral} horientation={true}></Exp2>
                <FaLongArrowAltUp className='h-14 p-0 m-auto none' />
                <Exp1 title='Spiral Media labs' 
                    titulo='Spiral Media Labs'
                    textOne="I have experience developing web apps with Django, creating CRUD functionalities and implementing business logic. For the front-end, I used Bootstrap templates to build responsive interfaces. I collaborated with my team using Basecamp for project management, Git for version control, and held daily meetings via Discord to ensure smooth communication and progress." 
                    textoUno='Tengo experiencia desarrollando aplicaciones web con Django, creando funcionalidades CRUD e implementando lógica de negocio. Para el front-end, utilicé plantillas Bootstrap para construir interfaces responsivas. Colaboré con mi equipo utilizando Basecamp para la gestión de proyectos, Git para el control de versiones, y mantuve reuniones diarias a través de Discord para asegurar una comunicación fluida y el progreso.'
                    textTwo='This was my first professional experience during my second year of studies, as I sought hands-on practice. It was here that I discovered Bootstrap and learned Git. I also became familiar with project management platforms like Basecamp, and we followed the Scrum methodology to manage our tasks. This experience gave me valuable insights into teamwork, sprint planning, and iterative development.'
                    textoDos='This was my first professional experience during my second year of studies, as I sought hands-on practice. It was here that I discovered Bootstrap and learned Git. I also became familiar with project management platforms like Basecamp, and we followed the Scrum methodology to manage our tasks. This experience gave me valuable insights into teamwork, sprint planning, and iterative development.'
                    link='https://brayhan.notion.site/Get-in-touch-4aea186bdcf74443b68542e417c46da0?pvs=4'
                    language={Language}/>
                {/* proyecto web de generacion de paginas estaticas*/}
                <Exp1 title='Static web generator' 
                    titulo='Generador de paginas web estaticas'
                    textOne='This is my own project, aimed at simplifying static web apps with complex layouts and other features. I created a component that allows users to generate a web page from a JSON file, which can be easily produced by an intuitive user interface. This system can be applied to create things like news pages, restaurant menus, and more, making web development easier.' 
                    textoUno='Este es mi propio proyecto, destinado a simplificar las aplicaciones web estáticas con diseños complejos y otras características. He creado un componente que permite a los usuarios generar una página web a partir de un archivo JSON, que puede ser fácilmente producido por una interfaz de usuario intuitiva. Este sistema se puede aplicar para crear cosas como páginas de noticias, menús de restaurantes y mucho más, facilitando el desarrollo web.'
                    textTwo="I developed this project with the goal of simplifying tasks I frequently encounter, making them more accessible not only for developers but also for all types of users. I'm still working on it, but I aim to create something that everyone can use." 
                    textoDos='He desarrollado este proyecto con el objetivo de simplificar las tareas que me encuentro con frecuencia, haciéndolas más accesibles no sólo para los desarrolladores, sino también para todo tipo de usuarios. Aún estoy trabajando en ello, pero mi objetivo es crear algo que todo el mundo pueda utilizar.'
                    link='https://brayhan.notion.site/Get-in-touch-4aea186bdcf74443b68542e417c46da0?pvs=4'
                    language ={Language}/>
                    
                <FaLongArrowAltUp className='h-14 p-0 m-auto none' />
                <Exp2 date='Today' img={stat} horientation={false}></Exp2>
            </div>

        </div>
    )
};

export default Experience;
