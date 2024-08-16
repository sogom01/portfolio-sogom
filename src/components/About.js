import React, { useState, useEffect, useMemo } from 'react';
import profileImage from '../img/3.webp';
import { FaGithub, FaLinkedin, FaWhatsapp, FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaNodeJs, FaBootstrap, FaGit, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiAstro, SiAngular, SiPostgresql, SiX, SiNpm } from 'react-icons/si';

const About = () => {
    const roles = useMemo(() => [
        'Desarrollador de Software',
        'Desarrollador front-end',
        'Diseñador de UI/UX',
        'Tester de Software',
        'Analista de datos'
    ], []);

    const [currentRole, setCurrentRole] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            setDisplayedText((prev) => {
                if (!deleting) {
                    if (prev.length < roles[currentRole].length) {
                        return roles[currentRole].slice(0, prev.length + 1);
                    } else {
                        setTimeout(() => setDeleting(true), 1000);
                        return prev;
                    }
                } else {
                    if (prev.length > 0) {
                        return roles[currentRole].slice(0, prev.length - 1);
                    } else {
                        setDeleting(false);
                        setCurrentRole((prev) => (prev + 1) % roles.length);
                        return prev;
                    }
                }
            });
        };

        const typingTimeout = setTimeout(handleTyping, deleting ? 50 : 150);

        return () => clearTimeout(typingTimeout);
    }, [displayedText, deleting, roles, currentRole]);

    const techIcons = [
        <FaHtml5 size={40} className="text-red-600 mx-auto" title="HTML5" />,
        <FaCss3Alt size={40} className="text-blue-600 mx-auto" title="CSS3" />,
        <FaJs size={40} className="text-yellow-500 mx-auto" title="JavaScript" />,
        <FaReact size={40} className="text-cyan-500 mx-auto" title="React" />,
        <FaNodeJs size={40} className="text-green-500 mx-auto" title="Node.js" />,
        <SiNpm size={40} className="text-red-600 mx-auto" title="NPM" />,
        <FaGit size={40} className="text-orange-500 mx-auto" title="Git" />,
        <FaGithub size={40} className="text-gray-400 mx-auto" title="GitHub" />,
        <FaBootstrap size={40} className="text-purple-600 mx-auto" title="Bootstrap" />,
        <FaWordpress size={40} className="text-blue-600 mx-auto" title="WordPress" />,
        <SiAngular size={40} className="text-red-600 mx-auto" title="Angular" />,
        <SiTailwindcss size={40} className="text-cyan-400 mx-auto" title="Tailwind CSS" />,
        <SiAstro size={40} className="text-orange-500 mx-auto" title="Astro" />,
        <SiPostgresql size={40} className="text-blue-600 mx-auto" title="PostgreSQL" />,
        <FaJava size={40} className="text-red-700 mx-auto" title="Java" />,
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-6 overflow-hidden font-poppins">
            <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-10/12">
                {/* Sección de la Foto */}
                <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
                    <div className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-neon transition-shadow duration-300 hover:shadow-neon-lg">
                        <img src={profileImage} alt="Profile" className="object-cover w-full h-full" />
                    </div>
                </div>
                {/* Sección de la Descripción y Botones */}
                <div className="w-full m-10 lg:w-2/3 text-center lg:text-left flex flex-col justify-between">
                    <div>
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white overflow-hidden" style={{ lineHeight: '1.5', minHeight: '3rem' }}>
                            Soy <span className="text-red-700" style={{ color: '#f60b0b', whiteSpace: 'nowrap' }}>{displayedText}</span>
                        </p>
                        <p className="text-sm md:text-base lg:text-lg text-white mt-4">
                            Bienvenido a mi espacio digital, donde combino creatividad y tecnología para desarrollar soluciones eficientes y elegantes. Desde la gestión de peticiones hasta el diseño de interfaces y el desarrollo de software, mi objetivo es transformar ideas en realidades tangibles.
                        </p>
                        <p className="text-sm md:text-base lg:text-lg text-white mt-4">
                            Estoy comprometido con la creación de aplicaciones web que ofrezcan una experiencia de usuario excepcional. ¡Descubre mis proyectos y hablemos sobre cómo puedo ayudarte a hacer realidad tus ideas!
                        </p>
                        <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                            <a href="https://github.com/sogom01" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-full" aria-label="Github">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/sogom/" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-full" aria-label="LinkedIn">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://x.com/sogom_01" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-full" aria-label="X (anteriormente Twitter)">
                                <SiX size={24} />
                            </a>
                            <a
                                href={`https://wa.me/573147132470?text=Hola%20vi%20tu%20portafolio,%20quiero%20saber%20si%20tienes%20disponibilidad%20para%20comentarte%20la%20idea%20que%20tengo`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-neon rounded-full"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp size={24} />
                            </a>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4 mt-4 w-full">
                            <a href="/Curriculum-Vitae.pdf" target="_blank" rel="noopener noreferrer" className="btn-neon-cv rounded-full text-center px-6 py-2 whitespace-nowrap">
                                Descargar CV
                            </a>
                            <a href="#contact" className="btn-neon rounded-full text-center px-6 py-2 whitespace-nowrap">
                                Contactarme
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sección de Stack Tecnológico */}
            <div className="w-full mt-12">
                <h4 className="text-lg font-semibold text-white mb-4 text-center">Stack Tecnológico</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 border-neon rounded-lg p-6">
                    {techIcons.map((icon, i) => (
                        <div key={i} className="flex justify-center items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                            {icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
