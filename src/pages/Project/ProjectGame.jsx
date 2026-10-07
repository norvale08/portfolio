import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const proyectsImg = require.context('../../img', true);

const ProjectGame = () => {
    const [estadoModal4, cambiarEstadoModal4] = useState(false);
    const [estadoModal3, cambiarEstadoModal3] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);
    const [estadoModal1, cambiarEstadoModal1] = useState(false);


    return (
        <div>

            <HeaderPage />

            <ParticleBackground />

            <main>
                <section className="proyectos mas-proyect" id="proyectos">
                    <h1 className="heading">
                        <FormattedMessage
                            id='projects'
                            defaultMessage='Projects'
                        />
                    </h1>
                    <nav className="navbar nav-proj">
                        <NavLink to="/project/" offset={-150} duration={500}>
                            <FormattedMessage
                                id='site-web'
                                defaultMessage='websites'
                            />
                        </NavLink>
                        <NavLink to="/project/app" offset={-150} duration={500}>
                            Apps
                        </NavLink>
                        <NavLink to="/project/game" offset={-150} duration={500}>
                            <FormattedMessage
                                id='games'
                                defaultMessage='games'
                            />
                        </NavLink>
                    </nav>
                </section>

                <section className="projects__grid games">
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal4(!estadoModal4)}>
                            <img src={proyectsImg(`./proyecto-game-4.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>
                            <img src={proyectsImg(`./proyecto-game-3.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal2(!estadoModal2)}>
                            <img src={proyectsImg(`./proyecto-game-2.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                   
                </section>
            </main>

            <Modal
                estado={estadoModal4}
                cambiarEstado={cambiarEstadoModal4}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-game-4.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                Tetris Classic Game
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsGame-info-4-p2'
                                    defaultMessage="Tetris Vue - A modern clone of the classic game, developed with Vue.js. Improved graphics, visual effects, scoring system, and controls intuitive"
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://tetris-vue.netlify.app/" target="_blank">https://tetris-vue.netlify.app</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vitejs/vitejs-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vuejs/vuejs-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/css3/css3-original.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal3}
                cambiarEstado={cambiarEstadoModal3}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-game-3.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsGame-info-3-p1'
                                    defaultMessage='Lumia Creators - Events and Mods in Java'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsGame-info-3-p2'
                                    defaultMessage="Design and programming of exclusive game mechanics for interactive events and miniseries. Development and implementation of complex logic through Datapacks and modifications (mods) in Java, optimizing user experience and internal server performance."
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                 <span>Link:</span> <a href="https://www.lumiacreators.com/es/proyectos/elreto/" target="_blank">https://www.lumiacreators.com</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/java/java-original.svg" alt="Java" />
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/fabric.svg" alt="FabricMC" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal2}
                cambiarEstado={cambiarEstadoModal2}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-game-2.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsGame-info-2-p1'
                                    defaultMessage='HyperGamerX - Video Game Blog'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsGame-info-2-p2'
                                    defaultMessage="I developed a video game article platform with a focus on design and user experience using Figma. The website was optimized, with a focus on SEO and Google Analytics integration."
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://www.hypergamerx.com/" target="_blank">https://www.hypergamerx.com</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/astro.svg" alt="Astro" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/typescript/typescript-original.svg" alt="TypeScript" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg" alt="JavaScript" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/figma/figma-original.svg" alt="Figma" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vercel/vercel-original.svg" alt="Vercel" />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <ScrollToTop />

            <Footer />
        </div>
    )
}
export default ProjectGame;
