import React from 'react';
import '../ProjectCard.css';

const ProjectCard = ({ image, title, technologies, description }) => {
    return (
        <div className="card__portfolio">
            <img
                src={image}
                alt={title}
                className="card__image"
                loading="lazy"
            />
            <div className="descripcion__container">
                <h2 className="card__title">{title}</h2>
                <div className="descripcion">
                    <p>{description}</p>
                    <div className="skills">
                        {technologies.map((TechIcon, index) => (
                            <TechIcon key={index} className="iconify" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
