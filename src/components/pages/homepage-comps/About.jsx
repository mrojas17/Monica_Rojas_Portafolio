import { Link as ScrollLink } from 'react-scroll';

const About = () => {
    return (
        <section name="About" 
        className='relative w-full text-white md:h-screen h-unset'>

            <div className='flex flex-col justify-center w-full h-full max-w-screen-lg px-4 mx-auto text-lg'>

                    <div className='pb-8'>
                        <h2 className='inline text-4xl font-bold border-b-4 sm:text-5xl border-primary-color/40'>Sobre mí</h2>
                    </div>

                    <p className='py-2 '>
                    ¡Hola! Soy FullStack Developer y también Ingeniera Agrónoma de formación. Después de terminar mi formación universitaria, decidí dar un giro profesional y meterme de lleno en la tecnología, algo que siempre me interesó.
                    </p>
                    <p className='py-2 '>
                    Estudié desarrollo web en Soy Henry, donde me formé como desarrolladora FullStack. Desde entonces, no he parado de aprender y de entusiasmarme con todo lo que se puede crear a través del código.
                    </p>
                    <p className='py-2 '>
                    Me apasiona el desarrollo de aplicaciones, la inteligencia artificial y el modelado 3D, las cuales son áreas en las que quiero especializarme y desarrollar grandes proyectos en el futuro. Mi objetivo es seguir creciendo, sumar experiencia tanto en proyectos profesionales como personales, y mejorar un poco más cada día.
                    </p>
                    <p className='py-2 '>
                    Estoy siempre con ganas de aprender cosas nuevas, especialmente en un mundo tan cambiante como este. Creo que la clave está en mantenerse en movimiento, con la mente abierta y muchas ganas de seguir explorando.
                    </p>
            </div>

            <ScrollLink to="Projects" smooth duration={500} className='absolute cursor-pointer bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 hover:text-primary-color'>
                <i className='text-gray-400 bx bx-chevron-down text-7xl animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
            
        </section>
        
    )
}

export default About
