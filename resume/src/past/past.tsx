import React from 'react';
import Gito from '../components/getInTouch.tsx';
import wal from '../assets/whatIAspire.png';
import Intro from '../components/introduction.tsx';

interface pastprops {
    Language:boolean;
}
const Past: React.FC<pastprops> = ({Language}) =>{
    return (
        <div className='p-4' >
            <div className="box-1 rounded-2xl p-4 flex">
                <div>
                    <h2 className=" font-semibold">{Language?"My past before IT":"Mi pasado antes del area de software"}</h2>
                    <p>{Language?"Someone suggested that the interpersonal skills I’ve gained in other areas could be a great addition to my résumé. I’ll highlight my soft skills for each job, keeping it concise, but I won’t include this in my résumé as they only serve to showcase these specific abilities.":"Alguien me dijo que las aptitudes interpersonales que he adquirido en otras áreas podrían ser un gran añadido a mi currículum, así que intentaré destacar mis habilidades para cada empleo, tratare de ser consiso sin embargo esto es util para dar a conocer mis habilidades blandas unicamente, por ello no lo incluyo en mi curriculum."}</p>
                </div>
                <Gito  />
            </div>  
            <div className='p-8'> {Language?"I am working on the images, I will include them in the future, thanks for your patience!":"Estoy trabajando en las imagenes, en un futuro las incluire, gracias por su paciencia!"}
                <Intro
                title='Pizza seller' 
                titles='vendedor de pizzas'
                text='My most recent job, aside from my experience in software, was as a pizza seller at a stadium. This was an occasional role that helped me further improve my communication skills and ability to sell products effectively.'
                spanish='Mi trabajo más reciente, aparte de mi experiencia en software, fue como vendedor de pizzas en un estadio. Fue una función por temporada que me ayudó a mejorar aún más mis dotes de comunicación y mi capacidad para vender productos con eficacia.'
                img={wal}
                horientation={true}
                language={Language}
                ></Intro>
                <Intro
                title='Grocery clerk' 
                titles='Encargado de abarrote'
                text='During the COVID pandemic, my cousin opened a store, and I started helping him on weekends. This experience not only enhanced my customer service skills but also strengthened my sense of responsibility, managing 14-hour shifts.'
                spanish="Durante la pandemia de COVID, mi primo abrió una tienda y empecé a ayudarle los fines de semana. Esta experiencia no solo mejoró mis habilidades de atención al cliente, sino que también reforzó mi sentido de la responsabilidad, gestionando turnos de 14 horas."
                img={wal}
                horientation={false}
                language={Language}
                ></Intro>
                <div className='box-1 p-4 rounded-2xl'><p>{Language?"After this, I began my university studies in Software Engineering at Universidad Autónoma de Sinaloa. While I had always prioritized my education, I started to devote even more attention to gaining experience and knowledge in software development, which led to less frequent work engagements. ":"Después de esto, comencé mis estudios universitarios en Ingeniería de Software en la Universidad Autónoma de Sinaloa. Aunque siempre había dado prioridad a mi educación, empecé a dedicar aún más atención a adquirir experiencia y conocimientos en el desarrollo de software, lo que me llevó a trabajar con menos frecuencia. "}</p></div>
                <Intro
                title='Lifeguard' 
                titles='Socorrista'
                text='Then in 2019, someone asked me to cover for them as a lifeguard at a pool. Since people appreciated my work and knew me, I took several lifeguard courses and ended up working there for months until the pandemic. During this time, I honed my communication skills, developed a friendly and professional demeanor, and learned how to manage people while maintaining a calm and safe environment.'
                spanish='Luego, en 2019, alguien me pidió que le cubriera como socorrista en una piscina. Como la gente apreciaba mi trabajo y me conocio, hice varios cursos de socorrista y acabé trabajando allí durante meses hasta la pandemia. Durante este tiempo, perfeccioné mis habilidades de comunicación, desarrollé un comportamiento amable y profesional, y aprendí a manejar a la gente mientras mantenía un ambiente tranquilo y seguro.'
                img={wal}
                horientation={true}
                language={Language}
                ></Intro>
                <Intro
                title='Electrician' 
                titles='Electricista'
                text='I finished my Technical High School in Mechatronics Engineering and started working as an Electrician. This job helped me improve my ability to follow instructions, manage tasks, and work efficiently on daily assignments. I worked from 2017 until 2019, when my boss lost clients due to the restrictions.'
                spanish='Terminé el Bachillerato Técnico en Ingeniería Mecatrónica y empecé a trabajar como electricista. Este trabajo me ayudó a mejorar mi capacidad para seguir instrucciones, gestionar tareas y trabajar de forma eficiente en los encargos diarios. Trabajé desde 2017 hasta 2019, cuando mi jefe perdió clientes debido a las restricciones.'
                img={wal}
                horientation={false}
                language={Language}
                ></Intro>
                <Intro
                title='Water Station Attendant' 
                titles='Atencion de purificadora de agua'
                text='My second job, from 2015 to 2017, was as a Water Station Attendant. In this role, I improved my soft skills by interacting with different types of people, who in this case were clients. This experience helped me grow in customer service and further develop my communication skills.'
                spanish='Mi segundo trabajo, de 2015 a 2017, fue como encargado de una purificadora de agua. En este puesto, mejoré mis habilidades interpersonales interactuando con diferentes tipos de personas, que en este caso eran clientes. Esta experiencia me ayudó a crecer en la atención al cliente y a desarrollar aún más mis habilidades comunicativas.'
                img={wal}
                horientation={true}
                language={Language}
                ></Intro>
                <Intro
                title='Event Furniture Delivery' 
                titles='Repartidor de mobiloario de eventos'
                text='My first job, from 2012 to 2015 (when I was 12 to 16 years old), was as an Event Furniture Delivery person. During this time, I discovered my strength in engaging warmly with clients and developed a strong sense of responsibility. This role ended when my boss found another job and closed the business.'
                spanish='Mi primer trabajo, de 2012 a 2015 (cuando tenía entre 12 y 16 años), fue como repartidora de mobiliario para eventos. Durante ese tiempo, descubrí que mi punto fuerte era el trato cordial con los clientes y desarrollé un gran sentido de la responsabilidad. Esta función terminó cuando mi jefe encontró otro trabajo y cerró el negocio.'
                img={wal}
                horientation={false}
                language={Language}
                ></Intro>
            </div>
        </div>
    )
};

export default Past;