import axios from 'axios';
import Swal from 'sweetalert2'


const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        axios.post('https://getform.io/f/anlqrqwa', formData)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    iconColor: '#0DFC4B',
                    title: 'Gracias por contactarme. ¡Será un placer trabajar contigo!',
                    showConfirmButton: true,
                    background: '#191a19',
                    color: '#fff',
                    confirmButtonColor: '#117911',
                    backdrop: `
                        rgba(54, 55, 54,0.4)
                    `
                })
            })
            .catch(error => {
            console.log(error);
            });
        
        event.target.reset();
    }
    

    return (
        <section name='Contact' className='relative w-full p-4 text-white md:h-screen h-unset'>
            <div className='flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto'>
                <div className='pb-8'>
                    <h2 className='inline text-4xl font-bold border-b-4 border-primary-color/40 sm:text-5xl'>Contacto</h2>
                    <p className='py-6'>Envía el formulario a continuación para ponerte en contacto conmigo.</p>
                </div>

                <div className='flex items-center justify-center'>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-1/2'>
                        <input 
                        type="text" 
                        name='name' placeholder='Introduce tu nombre' 
                        className='p-2 text-white bg-transparent border-2 rounded-md focus:outline-none focus:border-primary-color' required/>

                        <input 
                        type="email" 
                        name='email' placeholder='Introduce tu correo electrónico' 
                        className='p-2 my-4 text-white bg-transparent border-2 rounded-md focus:outline-none focus:border-primary-color' required />

                        <textarea name="message" rows="10" placeholder='Ingresa tu mensaje' className='p-2 text-white bg-transparent border-2 rounded-md focus:outline-none focus:border-primary-color' required></textarea>

                        <button className='flex items-center px-6 py-3 mx-auto my-8 font-semibold text-black duration-300 rounded-md bg-gradient-to-t from-light-lilac to-primary-color hover:scale-110'>Vamos a hablar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact