import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_03yrdkh', 'template_y2fvkmt', e.target, 'y98ODb9BJbZ6wbyzE')
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);  // Muestra el mensaje de éxito
                e.target.reset();       // Resetea el formulario
            }, (error) => {
                console.log(error.text);
                alert('Hubo un error al enviar el mensaje');
            });
    };

    return (
        <section id="contact" className="bg-transparent p-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Contactarme</h2>
            <form onSubmit={sendEmail} className="space-y-6 max-w-lg mx-auto bg-transparent p-8 rounded-lg shadow-lg">
                <div>
                    <label className="block text-sm md:text-base lg:text-lg text-gray-300 mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Ingresa tu nombre"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm md:text-base lg:text-lg text-gray-300 mb-2" htmlFor="email">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Ingresa tu correo electrónico"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm md:text-base lg:text-lg text-gray-300 mb-2" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        rows="4"
                        placeholder="Escribe tu mensaje"
                        required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-red-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Enviar Mensaje
                    </button>
                </div>
            </form>
            {messageSent && (
                <div className="mt-4 text-center text-green-500 font-bold">
                    ¡Mensaje enviado con éxito! Me pondré en contacto contigo cuanto antes.
                </div>
            )}
        </section>
    );
};

export default Contact;
