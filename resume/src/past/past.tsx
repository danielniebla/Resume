import React,{ useState } from 'react';
import Gito from '../components/getInTouch.tsx';
import wal from '../assets/whatIAspire.png';
import Intro from '../components/introduction.tsx';

interface pastprops {
    Language:boolean;
}
const Past: React.FC<pastprops> = ({Language}) =>{
    const [open, setOpen] = useState(false);
  const handleClick = () => { 
    setOpen(!open);
  };
    return (
        <div className='p-4' >
            <div className="box-1 rounded-2xl p-4 flex">
                <div>
                    <h2 className=" font-semibold">{Language?"My past before IT":"Mi pasado antes del area de software"}</h2>
                    <p>{Language?"If you would like to know more about my soft skills, I will leave some unrelated experiences, as I was recommended to include them to demonstrate transferable skills. However, if you do not consider this section important, I hope you have found enough relevant information about me.":"Si desean conocer más sobre mis habilidades blandas, dejaré algunas experiencias no relacionadas, ya que me recomendaron incluirlas para demostrar habilidades transferibles. Sin embargo, si no consideran esta sección importante, espero que hayan encontrado suficiente información relevante sobre mí."}</p>
                </div>
                <Gito  />
            </div>  
            <div className='p-8'> {Language?"I am working on the images, I will include them in the future, thanks for your patience!":"Estoy trabajando en las imagenes, en un futuro las incluire, gracias por su paciencia!"}
            {open ? (<div>
                <Intro
                title='Pizza seller' 
                titles='vendedor de pizzas'
                rText='This occasional role helped me enhance my communication skills and ability to sell products effectively.'
                rSpanish='Este trabajo ocasional me ayudó a mejorar mis habilidades de comunicación y mi capacidad para vender productos con eficacia.'
                text='Stepping out of my routine and working with a variety of people allowed me to perform smoothly in different environments.'
                spanish='Salir de mi rutina y trabajar con gente variada me permitió desenvolverme con soltura en distintos entornos.'
                img={wal}
                horientation={true}
                language={Language}
                ></Intro>
                <Intro
                title='Grocery clerk' 
                titles='Encargado de abarrote'
                rText='Helping my cousin with his store during the COVID pandemic, I managed 14-hour shifts, which enhanced my customer service skills and sense of responsibility.'
                text='This experience strengthened my ability to handle long workdays and stay committed under pressure.'
                spanish="Esta experiencia reforzó mi capacidad para afrontar largas jornadas de trabajo y mantener el compromiso bajo presión."
                rSpanish='Ayudando a mi primo con su tienda durante la pandemia de COVID, gestioné turnos de 14 horas, lo que mejoró mis habilidades de atención al cliente y mi sentido de la responsabilidad.'
                img={wal}
                horientation={false}
                language={Language}
                ></Intro>
                <div className='box-1 p-4 rounded-2xl'><p>{Language?"After this, I began my university studies in Software Engineering at Universidad Autónoma de Sinaloa. While I had always prioritized my education, I started to devote even more attention to gaining experience and knowledge in software development, which led to less frequent work engagements. ":"Después de esto, comencé mis estudios universitarios en Ingeniería de Software en la Universidad Autónoma de Sinaloa. Aunque siempre había dado prioridad a mi educación, empecé a dedicar aún más atención a adquirir experiencia y conocimientos en el desarrollo de software, lo que me llevó a trabajar con menos frecuencia. "}</p></div>
                <Intro
                title='Lifeguard' 
                titles='Socorrista'
                rText='During this time, I honed my communication skills, developed a friendly and professional demeanor, and learned to manage people while maintaining a calm, safe environment.'
                rSpanish='Durante este tiempo, perfeccioné mis habilidades de comunicación, desarrollé un comportamiento amable y profesional, y aprendí a manejar a las personas mientras mantenía un ambiente tranquilo y seguro.'
                text='In 2019, I was asked to cover as a lifeguard at a pool, which led me to take several lifeguard courses and work there for months until the pandemic.'
                spanish='En 2019 me pidieron cubrir como socorrista en una piscina, lo que me llevó a hacer varios cursos de socorrismo y a trabajar allí durante meses hasta la pandemia.'
                img={wal}
                horientation={true}
                language={Language}
                ></Intro>
                <Intro
                title='Electrician' 
                titles='Electricista'
                text='I completed my Technical High School in Mechatronics Engineering and began working as an Electrician from 2017 until 2019.'
                rText='This job improved my ability to follow instructions, manage tasks, and work efficiently on daily assignments.'
                rSpanish='Este trabajo mejoró mi capacidad para seguir instrucciones, gestionar tareas y trabajar de manera eficiente en las asignaciones diarias.'
                spanish='Terminé el Bachillerato Técnico en Ingeniería Mecatrónica y empecé a trabajar como Electricista desde 2017 hasta 2019.'
                img={wal}
                horientation={false}
                language={Language}
                ></Intro>
                <Intro
                title='Water Station Attendant' 
                titles='Atencion de purificadora de agua'
                rText='This role helped me grow in customer service and further develop my communication skills by engaging with different types of people.'
                text='From 2015 to 2017, I worked as a Water Station Attendant, interacting with a wide range of clients.'
                rSpanish='Este papel me ayudó a crecer en el servicio al cliente y a desarrollar aún más mis habilidades de comunicación al relacionarme con diferentes tipos de personas.'
                spanish='De 2015 a 2017, trabajé como Asistente de Estación de Agua, interactuando con una amplia gama de clientes.'
                img={wal}
                horientation={true}
                language={Language}
                ></Intro>
                <Intro
                title='Event Furniture Delivery' 
                titles='Repartidor de mobiloario de eventos'
                text='From 2012 to 2015, when I was 12 to 16 years old, I worked as an Event Furniture Delivery person.'
                rText='During this time, I discovered my strength in engaging warmly with clients and developed a strong sense of responsibility. '
                rSpanish='Durante este tiempo, descubrí mi destreza para relacionarme cordialmente con los clientes y desarrollé un gran sentido de la responsabilidad. El puesto terminó cuando mi jefe cerró el negocio tras encontrar otro trabajo.'
                spanish='De 2012 a 2015, cuando tenía entre 12 y 16 años, trabajé como repartidor de mobiliario para eventos.'
                img={wal}
                horientation={false}
                language={Language}
                ></Intro>
                <p className='lmb py-4 text-xl' onClick={handleClick}>{Language?'Less...':'menos...'}</p></div>)
            : (<p className="py-4 lmb text-xl" onClick={handleClick}>{Language?'I want to know More...':'Quiero saber mas...'}</p>)}
                
            </div>
        </div>
    )
};

export default Past;