import React from 'react';


function Projects() {
    return (
        <section id = "proj" className = "projects">
            <h2> My Projects </h2>
            <div className = "flex">
                
                <div className = "projectex">
                    <a href="https://mannyportillo11.github.io/healthyCraves/" target="_blank">
                        <h2>Healthy Craves</h2>
                        <img className = "projimage" src = "https://mannyportillo11.github.io/myPortfolio/assets/images/healthyCraves.JPG" alt ="healthy crave screenshot" />
                    </a>
                    <a href="https://github.com/mannyportillo11/healthyCraves" target="_blank"> 
                        <h3>Healthy Craves Github</h3>
                    </a>
                </div>

                <div className= "projectex">
                    <a href="https://infinite-ravine-50293.herokuapp.com/" target="_blank">
                        <h2>Libro-Fy</h2>
                        <img className = "projimage" src = "https://mannyportillo11.github.io/myPortfolio/assets/images/libro-fy.JPG" alt = "libro-fy screenshot" />
                    </a>
                    <a href="https://github.com/mannyportillo11/libro-fy" target="_blank"> 
                        <h3>Libro-Fy Github</h3>
                    </a>
                </div>

                <div className= "projectex">
                    <a href="https://mannyportillo11.github.io/horiseon/" target="_blank"> 
                        <h2>Horiseon</h2>
                        <img className = "projimage" src = "https://mannyportillo11.github.io/myPortfolio/assets/images/horiseon.JPG" alt = "horiseon screenshot" />
                    </a>
                    <a href="https://mannyportillo11.github.io/horiseon/" target="_blank"> 
                        <h3>Horiseon Github</h3>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;