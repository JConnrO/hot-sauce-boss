import React from 'react';
import Project from '../Project';

function Shop(props) {

    const photos = [
        {
            name: "ReciPlanner",
            description: "Express/Node/Sequelize",
            image: "0",
            deployed: "https://reciplanner.herokuapp.com/",
            github: "https://github.com/stephgeorge22/reciplanner"
        },
        {
            name: "The Brokers",
            description: "Jquery/API",
            image: "1",
            deployed: "https://stephgeorge22.github.io/The-Brokers/",
            github: "https://github.com/stephgeorge22/The-Brokers"
        },
        {
            name: "Weather Dashboard",
            description: "Jquery/API",
            image: "2",
            deployed: "https://stephgeorge22.github.io/weather-dashboard/",
            github: "https://github.com/stephgeorge22/weather-dashboard"
        },
        {
            name: "Password Generator",
            description: "Javascript",
            image: "3",
            deployed: "https://stephgeorge22.github.io/password-generator/",
            github: "https://github.com/stephgeorge22/password-generator"
        },
        {
            name: "Team Profile Generator",
            description: "Node",
            image: "4",
            deployed: "https://drive.google.com/file/d/1jLGFKmy2kUSaN7-CY4dJKxRePO2_EGm_/view",
            github: "https://github.com/stephgeorge22/team-profile-generator"
        },
        {
            name: "Budget Tracker",
            description: "PWA",
            image: "5",
            deployed: "https://sheltered-atoll-28192.herokuapp.com/",
            github: "https://github.com/stephgeorge22/budget-tracker"
        }

    ];

    return (

        <section>
            <h1 id="portfolio">Portfolio</h1>
            <div className="flex-row">
                {photos.map((project) => (
                    <Project
                        image={project.image}
                        title={project.name}
                        description={project.description}
                        github={project.github}
                        deployed={project.deployed}
                        alt={project.name}
                        key={project.name}
                    />
                ))}
            </div>
        </section>
    );

};

export default Shop;