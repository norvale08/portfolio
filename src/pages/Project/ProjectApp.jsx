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
const proyectsImgApp = require.context('../../img', true);

function ProjectApp() {
    const [estadoModal18, cambiarEstadoModal18] = useState(false);
    const [estadoModal17, cambiarEstadoModal17] = useState(false);
    const [estadoModal16, cambiarEstadoModal16] = useState(false);
    const [estadoModal15, cambiarEstadoModal15] = useState(false);
    const [estadoModal14, cambiarEstadoModal14] = useState(false);
    const [estadoModal13, cambiarEstadoModal13] = useState(false);
    const [estadoModal12, cambiarEstadoModal12] = useState(false);
    const [estadoModal11, cambiarEstadoModal11] = useState(false);
    const [estadoModal10, cambiarEstadoModal10] = useState(false);
    const [estadoModal9, cambiarEstadoModal9] = useState(false);
    const [estadoModal8, cambiarEstadoModal8] = useState(false);
    const [estadoModal7, cambiarEstadoModal7] = useState(false);
    const [estadoModal6, cambiarEstadoModal6] = useState(false);
    const [estadoModal5, cambiarEstadoModal5] = useState(false);
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
                <section className="projects__grid apps">
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal18(!estadoModal18)}>
                            <img src={proyectsImgApp(`./proyecto-app-18.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal17(!estadoModal17)}>
                            <img src={proyectsImgApp(`./proyecto-app-17.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal16(!estadoModal16)}>
                            <img src={proyectsImgApp(`./proyecto-app-16.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal15(!estadoModal15)}>
                            <img src={proyectsImgApp(`./proyecto-app-15.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal14(!estadoModal14)}>
                            <img src={proyectsImgApp(`./proyecto-app-14.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal13(!estadoModal13)}>
                            <img src={proyectsImgApp(`./proyecto-app-13.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal12(!estadoModal12)}>
                            <img src={proyectsImgApp(`./proyecto-app-12.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal11(!estadoModal11)}>
                            <img src={proyectsImgApp(`./proyecto-app-11.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal9(!estadoModal9)}>
                            <img src={proyectsImgApp(`./proyecto-app-9.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal8(!estadoModal8)}>
                            <img src={proyectsImgApp(`./proyecto-app-8.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal7(!estadoModal7)}>
                            <img src={proyectsImgApp(`./proyecto-app-7.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal6(!estadoModal6)}>
                            <img src={proyectsImgApp(`./proyecto-app-6.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal5(!estadoModal5)}>
                            <img src={proyectsImgApp(`./proyecto-app-5.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                </section>
            </main>
            <Modal
                estado={estadoModal18}
                cambiarEstado={cambiarEstadoModal18}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-18.png`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                AUDITECHME APP
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-18-p1'
                                    defaultMessage='Transforming the World of Auditing and Compliance in Italy'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-18-p2'
                                    defaultMessage='The essential purpose of AUDITECHME is to enhance efficiency in audits, reinforce information security, and simplify access to critical data, all while keeping a constant focus on innovation.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://grctechme.com/" target="_blank">https://grctechme.com/</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/googlecloud/googlecloud-original.svg" alt="" />
                                   </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal17}
                cambiarEstado={cambiarEstadoModal17}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-17-com.png`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                MOVIEXD - Movie Catalog with Vue
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage='An interactive Single Page App (SPA) that consumes the TMDB API to display popular movies, featuring real-time search, genre filters, and a trailer player. Developed using Vue 3, Vite, and modern CSS, highlighting reactive components and responsive design.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://pelisxd.netlify.app/" target="_blank">https://pelisxd.netlify.app/</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vuejs/vuejs-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/css3/css3-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vitejs/vitejs-original.svg" alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal16}
                cambiarEstado={cambiarEstadoModal16}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-16.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                Weather API
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-16-p2'
                                    defaultMessage='Web app with the OpenWeatherMap API that displays current temperature and weather when searching for a city'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://clima-api-jicm.netlify.app/" target="_blank">https://clima-api-jicm.netlify.app</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/html5/html5-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/css3/css3-original.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal15}
                cambiarEstado={cambiarEstadoModal15}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-15.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                Vision Craft
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-15-p2'
                                    defaultMessage='A web app for creating visual boards with images and text. Users can arrange, resize, and export their designs as PNG or JSON. It also supports large poster printing.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://vision-craft-delta.vercel.app/" target="_blank">https://vision-craft-delta.vercel.app</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/typescript/typescript-original.svg" alt="TypeScript" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/astro.svg" alt="Astro" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/react/react-original.svg" alt="React" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/daisyui.svg" alt="DaisyUI" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/konva.svg" alt="Konva" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vercel/vercel-original.svg" alt="Vercel" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/unsplash.svg" alt="Unsplash API" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/pexels.svg" alt="Pexels API" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/bun/bun-original.svg" alt="Bun" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/semanticrelease.svg" alt="semantic-release" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/githubactions.svg" alt="GitHub Actions" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>


            <Modal
                estado={estadoModal14}
                cambiarEstado={cambiarEstadoModal14}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-14.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                JauntJar 
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-14-p2'
                                    defaultMessage='A private web app for planning and tracking trips. It lets users save visited places, plan future destinations, rate travel experiences, and view maps and travel statistics.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://trips.sgmr.es/" target="_blank">https://trips.sgmr.es</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/laravel/laravel-original.svg" alt="Laravel" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/php/php-original.svg" alt="PHP" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/livewire.svg" alt="Livewire" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vitejs/vitejs-original.svg" alt="Vite" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal13}
                cambiarEstado={cambiarEstadoModal13}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-13.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                Todo-Lux
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-13-p2'
                                    defaultMessage='A web application built with Laravel, Livewire, and FilamentPHP. It manages project operations, databases, backups, data imports, and internal tasks.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://todo-lux.com/" target="_blank">https://todo-lux.com</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/laravel/laravel-original.svg" alt="Laravel" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/livewire.svg" alt="Livewire" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/filament.svg" alt="FilamentPHP" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal12}
                cambiarEstado={cambiarEstadoModal12}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-12.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                Trash Nature
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-12-p2'
                                    defaultMessage='A web and mobile application for waste characterization. Built with Laravel, Livewire, and Quasar Framework, including a backend and user interfaces.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://proyectolibera.org/app-basuraleza-caracterizacion-residuos" target="_blank">https://proyectolibera.org/app-basuraleza-caracterizacion-residuos</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/laravel/laravel-original.svg" alt="Laravel" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/livewire.svg" alt="Livewire" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/quasar.svg" alt="Quasar Framework" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal11}
                cambiarEstado={cambiarEstadoModal11}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-11.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                Solutec
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-11-p2'
                                    defaultMessage='A web application updated with a new database and API. Built with Laravel, Laravel Sanctum, GitHub Actions, and Plesk, with testing and CI/CD.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://solutec.pccom.ai" target="_blank">https://solutec.pccom.ai</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/laravel/laravel-original.svg" alt="Laravel" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/laravel/laravel-original.svg" alt="Laravel Sanctum" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/githubactions.svg" alt="GitHub Actions" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/plesk.svg" alt="Plesk" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

       

            <Modal
                estado={estadoModal9}
                cambiarEstado={cambiarEstadoModal9}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-9.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-9-p1'
                                    defaultMessage='TVRadar'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-9-p2'
                                    defaultMessage='A web app for tracking TV series. It helps users organize shows, premieres, watchlists, and family viewing.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://watcha-ruby.vercel.app/" target="_blank">https://watcha-ruby.vercel.app</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/nextjs/nextjs-original.svg" alt="Next.js" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/typescript/typescript-original.svg" alt="TypeScript" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/framer.svg" alt="Framer Motion" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/sanity.svg" alt="Sanity" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal8}
                cambiarEstado={cambiarEstadoModal8}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-8.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-8-p1'
                                    defaultMessage='English Land'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-8-p2'
                                    defaultMessage='A bilingual website for children learning English. Built with Astro, it includes a simple, colorful design in English and Spanish'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://englishland.vercel.app/en" target="_blank">https://englishland.vercel.app</a>
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
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vercel/vercel-original.svg" alt="Vercel" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal7}
                cambiarEstado={cambiarEstadoModal7}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-7.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-7-p1'
                                    defaultMessage='Hackathon Team Matcher'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-7-p2'
                                    defaultMessage='A web app that helps developers find teammates for hackathons based on their skills and roles. Developed for the Midudev & Clerk Hackathon 2025.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://hackathon-team-matcher.vercel.app" target="_blank">https://hackathon-team-matcher.vercel.app</a>
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
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vuejs/vuejs-original.svg" alt="VueJS" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/clerk.svg" alt="Clerk" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/supabase.svg" alt="Supabase" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal6}
                cambiarEstado={cambiarEstadoModal6}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-6.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-6-p1'
                                    defaultMessage='WebGL Backgrounds Generator'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-6-p2'
                                    defaultMessage='Bring your website to life with animated WebGL backgrounds. Generate, customize, and export mesmerizing visual effects in seconds—without writing a single line of shader code. Boost the "wow factor" of your projects.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://background.mretamozo.com" target="_blank">https://background.mretamozo.com</a>
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
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/threejs/threejs-original.svg" alt="Three.js" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal5}
                cambiarEstado={cambiarEstadoModal5}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-5.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-5-p1'
                                    defaultMessage='Barreto Construcciones'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-5-p2'
                                    defaultMessage='Transforming the digital presence of the construction sector. A high-performance landing page designed to convert visitors into clients, integrating Google Ads campaigns and advanced analytics to maximize ROI.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://www.barretoconstrucciones.es" target="_blank">https://www.barretoconstrucciones.es</a>
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
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/resend.svg" alt="Resend" />
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/googleads.svg" alt="Google Ads" />
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

export default ProjectApp
