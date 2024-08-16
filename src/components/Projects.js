import React from 'react';
import ProjectCard from './ProjectCard';
import { FaHtml5, FaCss3Alt, FaGithub, FaReact, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiAstro, SiVercel } from 'react-icons/si';
import Proyecto1 from '../proyects/Proyecto1.webp';
import Proyecto2 from '../proyects/Proyecto2.webp';
import Proyecto3 from '../proyects/Proyecto3.webp';

const projects = [
    {
        image: Proyecto1,
        title: 'Iglesia AD Chipre',
        technologies: [SiAstro, SiTailwindcss, FaHtml5, FaJs, FaGithub, SiVercel],
        description: 'Sitio web de la iglesia Asambleas de Dios Chipre, diseñado para compartir contenido y mantener informados a sus miembros.',
        link: 'https://adchipre.com',
        isCompleted: true,
    },
    {
        image: Proyecto2,
        title: 'Blog JavaScript',
        technologies: [FaHtml5, FaCss3Alt, FaJs, FaReact],
        description: 'Blog interactivo sobre JavaScript, con recursos y tutoriales para desarrolladores, creado con React.',
        link: 'https://www.ilovejs.org/',
        isCompleted: true,
    },
    {
        image: Proyecto3,
        title: 'Tienda S&S Tecnología',
        technologies: [FaHtml5, FaCss3Alt, FaJs, FaGithub],
        description: 'Tienda en línea en desarrollo para productos tecnológicos, enfocada en ofrecer una experiencia de usuario sencilla y accesible.',
        link: '#',
        isCompleted: false,
    },
];

const Projects = () => {
    const handleCardClick = (project) => {
        if (!project.isCompleted) {
            const newWindow = window.open();
            newWindow.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Proyecto en Construcción</title>
                    <style>
                        body {
                            margin: 0;
                            padding: 0;
                            font-family: 'Poppins', sans-serif;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 100vh;
                            background: linear-gradient(135deg, #f5af19, #f12711);
                            color: white;
                            text-align: center;
                            overflow: hidden;
                        }
                        h3 {
                            font-size: 2.5rem;
                            margin-bottom: 1rem;
                            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
                            animation: fadeInDown 1s ease-in-out forwards;
                        }
                        p {
                            font-size: 1.5rem;
                            margin-bottom: 2rem;
                            animation: fadeInUp 1s ease-in-out forwards;
                        }
                        .icon-container {
                            font-size: 3rem;
                            animation: bounce 2s infinite;
                        }
                        .button-container {
                            margin-top: 2rem;
                        }
                        button {
                            padding: 10px 20px;
                            font-size: 1rem;
                            color: #f12711;
                            background-color: white;
                            border: none;
                            border-radius: 5px;
                            cursor: pointer;
                            text-transform: uppercase;
                            font-weight: bold;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                            transition: transform 0.2s, box-shadow 0.2s;
                        }
                        button:hover {
                            transform: scale(1.05);
                            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
                        }
                        @keyframes fadeInDown {
                            from {
                                opacity: 0;
                                transform: translateY(-20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        @keyframes fadeInUp {
                            from {
                                opacity: 0;
                                transform: translateY(20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        @keyframes bounce {
                            0%, 20%, 50%, 80%, 100% {
                                transform: translateY(0);
                            }
                            40% {
                                transform: translateY(-30px);
                            }
                            60% {
                                transform: translateY(-15px);
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="content">
                        <div class="icon-container">🚧 🛠️ 👷</div>
                        <h3>${project.title}</h3>
                        <p>Estamos trabajando en este proyecto. ¡Estará disponible muy pronto!</p>
                        <div class="button-container">
                            <button onclick="window.close()">Volver al portafolio</button>
                        </div>
                    </div>
                </body>
                </html>
            `);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Proyectos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    project.isCompleted ? (
                        <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
                            <ProjectCard
                                image={project.image}
                                title={project.title}
                                technologies={project.technologies}
                                description={project.description}
                            />
                        </a>
                    ) : (
                        <div key={index} onClick={() => handleCardClick(project)} className="cursor-pointer">
                            <ProjectCard
                                image={project.image}
                                title={project.title}
                                technologies={project.technologies}
                                description={project.description}
                            />
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default Projects;
