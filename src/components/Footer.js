import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sección de Información */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg font-semibold mb-4">Sebastián Osorio</h2>
                    <p className="text-sm text-center md:text-left">
                        Desarrollador Front-End especializado en crear experiencias de usuario excepcionales. Comprometido con la calidad y la innovación en cada proyecto.
                    </p>
                </div>

                {/* Sección de Enlaces Rápidos */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                    <ul className="space-y-2">
                        <li><a href="#about" className="hover:text-red-700 transition duration-300">Sobre mí</a></li>
                        <li><a href="#projects" className="hover:text-red-700 transition duration-300">Proyectos</a></li>
                        <li><a href="#contact" className="hover:text-red-700 transition duration-300">Contactarme</a></li>
                    </ul>
                </div>

                {/* Sección de Contacto */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                            <FaEnvelope />
                            <a href="mailto:correo@ejemplo.com" className="hover:text-red-700 transition duration-300">correo@ejemplo.com</a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaWhatsapp />
                            <a href={`https://wa.me/573147132470?text=Hola%20vi%20tu%20portafolio,%20quiero%20saber%20si%20tienes%20disponibilidad%20para%20comentarte%20la%20idea%20que%20tengo`} target="_blank" rel="noopener noreferrer" className="hover:text-red-700 transition duration-300">+57 314 713 2470</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Botón de Descargar CV */}
            <div className="container mx-auto px-4 m-4 flex justify-center">
                <a href="/Curriculum-Vitae.pdf" target="_blank" rel="noopener noreferrer" className="btn-neon-cv rounded-full text-center px-6 py-2 whitespace-nowrap">
                    Descargar CV
                </a>
            </div>

            {/* Sección de Redes Sociales */}
            <div className="container mx-auto px-4 flex justify-center space-x-6">
                <a href="https://github.com/sogom01" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-full" aria-label="Github">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/sogom/" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-full" aria-label="LinkedIn">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://x.com/sogom_01" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-full" aria-label="X (anteriormente Twitter)">
                    <SiX size={24} />
                </a>
                <a href={`https://wa.me/573147132470?text=Hola%20vi%20tu%20portafolio,%20quiero%20saber%20si%20tienes%20disponibilidad%20para%20comentarte%20la%20idea%20que%20tengo`} target="_blank" rel="noopener noreferrer" className="btn-neon rounded-full" aria-label="WhatsApp">
                    <FaWhatsapp size={24} />
                </a>
            </div>

            {/* Derechos Reservados */}
            <div className="mt-10 text-center">
                <p className="text-xs">&copy; {new Date().getFullYear()} Sebastián Osorio. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
