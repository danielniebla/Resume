import React from 'react';
import Gito from '../components/getInTouch.tsx';

interface skilsprops{
    Language:boolean;
}

const Skills: React.FC<skilsprops> = ({Language}) => {
    return (
        <div className='skills p-4'>
            <div className='a box-1 rounded-2xl p-4'>
                <div className="flex">
                    <h2 className='font-bold'>{Language?"Skills":"Habilidades"}</h2>
                    <Gito/>
                </div>
                <p>{Language ?"I am a skilled software engineer with experience in full-stack development, proficient in front-end technologies like React and Angular, as well as back-end frameworks such as Nest.js and Django. My expertise includes optimizing user experience and creating intuitive applications, with a strong focus on responsive design and data management. I am committed to continuous learning and aspire to deepen my skills in front-end development while contributing effectively to diverse projects.":
                "Soy un ingeniero de software habilidoso con experiencia en desarrollo full-stack, competente en tecnologías front-end como React y Angular, así como frameworks de back-end como Nest.js y Django. Mi experiencia incluye la optimización de la experiencia del usuario y la creación de aplicaciones intuitivas, con un fuerte enfoque en el diseño responsivo y la gestión de datos. Estoy comprometido con el aprendizaje continuo y aspiro a profundizar mis habilidades en front-end front-end mientras contribuyo eficazmente a diversos proyectos."}</p>
            </div>
            <div className='c box-1 rounded-2xl p-4'>
                <h2 className='font-bold'>{Language?"Soft skills":"Habilidades blandas"}</h2>
                <div >
                    <div>
                    <p className='font-bold inline'>{Language?"Teamwork: ":"Trabajo en equipo: "}</p><span className='f13'>{Language?"My experience in collaborative environments has equipped me with the ability to effectively contribute to diverse teams. I understand my strengths and the strengths of others, which allows me to optimize our collective efforts and identify the best approaches for each task.":"Mi experiencia en entornos de colaboración me ha dotado de la capacidad de contribuir eficazmente a equipos diversos. Conozco mis puntos fuertes y aprendo los de los demás, lo que me permite optimizar los esfuerzos colectivos e identificar los mejores enfoques para cada tarea."}</span>
                    </div>
                    <div>
                    <p className='font-bold inline'>{Language?"Proactivity: ":"Proactividad "}</p><span className='f13'>{Language?"When working on a project, I assess my limits to understand where I can contribute and improve. This helps me catch bugs or enhance the code while staying aligned with the project’s needs.":"Cuando trabajo en un proyecto, evalúo mis límites para saber dónde puedo contribuir y mejorar. Esto me ayuda a detectar errores o mejorar el código sin perder de vista las necesidades del proyecto."}</span>
                    </div>
                    <div>
                    <p className='font-bold inline'>{Language?"Commitment:":"Compromiso: "} </p><span className='f13'>{Language?"I focus on delivering high-quality work, consistently meeting deadlines, and staying persistent even when challenges arise.":"Me centro en ofrecer un trabajo de alta calidad, cumplir los plazos de forma coherente y ser persistente incluso cuando surgen dificultades."}</span>
                    </div>
                    <div>
                    <p className='font-bold inline'>{Language?"Creativity: ":"Creatividad"} </p><span className='f13'>{Language?"I enjoy finding creative solutions to challenges, whether it's through innovative design, optimizing processes, or developing unique features that enhance user experience.":"Me gusta encontrar soluciones creativas a los retos, ya sea mediante un diseño innovador, la optimización de procesos o el desarrollo de funciones únicas que mejoren la experiencia del usuario final."}</span>
                    </div>
                    <div>
                    <p className='font-bold inline'>{Language?"Customer service: ":"Servicio al cliente: "}</p><span className='f13'>{Language?"I feel secure when speaking with customers, knowing my capabilities and boundaries. This allows me to be clear and professional while also building trust by engaging in more meaningful, human conversations.":"Me siento seguro cuando hablo con los clientes, conozco mis capacidades y mis límites. Esto me permite ser claro y profesional y, al mismo tiempo, generar confianza entablando conversaciones más significativas y humanas."}</span>
                    </div>
                </div>
            </div>
            <div className='b box-1 rounded-2xl p-4'>
                <h2 className='font-bold'>{Language?"Lenguajes and techologies":"Lenguajes y tecnologias"}</h2>
                <ol className='list-disc p-4'>
                    <li>JavaScript</li>
                    <li>JavaScriptXML</li>
                    <li>TypeScript</li>
                    <li>TypescriptXML</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>dart</li>
                    <li>Php</li>
                    <li>SQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Swift</li>
                    <li>Figma</li>
                    <li>GitHub</li>
                </ol>
            </div>
            <div className='d box-1 rounded-2xl p-4'>
                <h2 className='font-bold'>Frameworks</h2>
                <ol className='list-disc p-4'>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Flutter</li>
                    <li>Next.js</li>
                    <li>NestJs</li>
                    <li>Laravel</li>
                    <li>Django</li>
                </ol>
            </div>
            <div className='e box-1 rounded-2xl p-4'>
                <h2 className='font-bold'>{Language?"Why I could be the best option?":"¿Por que podria ser la mejor opcion?"}</h2>
                <p>{Language?"I bring a strong foundation in software development, along with a proven ability to adapt and grow. While I have solid technical experience, I’m eager to expand my knowledge of how a company operates and contribute to its success. My commitment to continuous learning and my ability to collaborate with teams make me a valuable addition, as I can effectively apply my skills while quickly adapting to new challenges.":"Aporto una sólida base en desarrollo de software, junto con una capacidad demostrada para adaptarme y crecer. Al mismo tiempo tengo una sólida experiencia técnica, estoy deseando ampliar mis conocimientos sobre el funcionamiento de una empresa y contribuir a su éxito. Mi compromiso con el aprendizaje continuo y mi capacidad para colaborar con los equipos me convierten en una valiosa incorporación, ya que puedo aplicar eficazmente mis conocimientos a la vez que me adapto rápidamente a los nuevos retos."}</p>
                
            </div>
        </div>
    )
};

export default Skills;