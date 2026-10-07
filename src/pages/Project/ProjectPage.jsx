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

const Project = () => {
  const [estadoModal17, cambiarEstadoModal17] = useState(false);
  const [estadoModal14, cambiarEstadoModal14] = useState(false);
  const [estadoModal15, cambiarEstadoModal15] = useState(false);
  const [estadoModal16, cambiarEstadoModal16] = useState(false);
  const [estadoModal13, cambiarEstadoModal13] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);
  const [estadoModal9, cambiarEstadoModal9] = useState(false);
  const [estadoModal8, cambiarEstadoModal8] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='projects'
              defaultMessage='Projects'
            />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
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

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal17(!estadoModal17)}>
              <img src={proyectsImg(`./proyecto-17.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal14(!estadoModal14)}>
              <img src={proyectsImg(`./proyecto-14.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal15(!estadoModal15)}>
              <img src={proyectsImg(`./proyecto-15.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal16(!estadoModal16)}>
              <img src={proyectsImg(`./proyecto-16.jpg`)} className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal13(!estadoModal13)}>
              <img src={proyectsImg(`./proyecto-13.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal12(!estadoModal12)}>
              <img src={proyectsImg(`./proyecto-12.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal11(!estadoModal11)}>
              <img src={proyectsImg(`./proyecto-11.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal10(!estadoModal10)}>
              <img src={proyectsImg(`./proyecto-10.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal9(!estadoModal9)}>
              <img src={proyectsImg(`./proyecto-9.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal8(!estadoModal8)}>
              <img src={proyectsImg(`./proyecto-8.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal7(!estadoModal7)}>
              <img src={proyectsImg(`./proyecto-7.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal6(!estadoModal6)}>
              <img src={proyectsImg(`./proyecto-6.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal5(!estadoModal5)}>
              <img src={proyectsImg(`./proyecto-5.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>
              <img src={proyectsImg(`./proyecto-3.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
        </section>
      </main>

      <Modal
        estado={estadoModal17}
        cambiarEstado={cambiarEstadoModal17}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-17-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-17-p1'
                  defaultMessage='Tuatara'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-17-p2'
                  defaultMessage='Corporate WordPress website for a boutique digital transformation agency, focusing on marketing, design, software development, and AI initiatives for businesses.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://tuatara.co/en/" target="_blank">https://tuatara.co</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="" />
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
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-14.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-14-p1'
                  defaultMessage='Rooftec'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-14-p2'
                  defaultMessage='WordPress corporate website for a company in the construction sector, focused on product catalog, residential and industrial roofing lines, waterproofing, facades and insulation solutions.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://rooftec.do/" target="_blank">https://rooftec.do/</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/googlesearchconsole.svg" alt="" />
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
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-15-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-15-p1'
                  defaultMessage='Milla E-Commerce'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-15-p2'
                  defaultMessage='E-commerce B2C de indumentaria automotriz con React 18, Vite 6, Express 4, MongoDB, MercadoPago, Meta CAPI y Cloudinary, priorizando escalabilidad, testing y rendimiento.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://uncuartodemilla.com/" target="_blank">https://uncuartodemilla.com/</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/react/react-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/nodejs/nodejs-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/express/express-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/mongodb/mongodb-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mercadopago.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/meta.svg" alt="" />
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
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-16-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-16-p1'
                  defaultMessage='Logistica Expreso Omega'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-16-p2'
                  defaultMessage='Sitio corporativo B2B desarrollado con tecnologías web nativas (HTML5, CSS3, JavaScript Vanilla) para una empresa del sector logístico y de transporte, priorizando velocidad de carga, simplicidad y optimización SEO.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://expresoomega.com/" target="_blank">https://expresoomega.com</a>
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
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/css3/css3-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/bootstrap/bootstrap-original.svg" alt="" />
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
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-13.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-13-p1'
                  defaultMessage='URL Shortener'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-13-p2'
                  defaultMessage='Transform your long links into short, easy-to-share URLs. Ideal for social media, messaging, and anywhere you need to simplify a link.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://links.moropm.com/" target="_blank">https://links.moropm.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/laravel/laravel-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/html5/html5-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/tailwindcss/tailwindcss-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vitejs/vitejs-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/sqlite/sqlite-original.svg" alt="" />
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
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-12.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-12-p1'
                  defaultMessage='Tourist Information Desk'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-12-p2'
                  defaultMessage='The need for this tourism association was a single platform to manage tourism in Loja and promote tourism in the province of Loja. The platform enabled the management of tourism events, promotion of destinations and improvement of the tourist experience in the province of Loja. Draggable and reusable code blocks were also developed to improve the user experience for customization of their website.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://mesaturisticaloja.com/" target="_blank">https://mesaturisticaloja.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/odoo.svg" alt="Odoo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/python/python-original.svg" alt="Python" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/html5/html5-original.svg" alt="HTML5" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/sass/sass-original.svg" alt="Sass / SCSS" />
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
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-11.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-11-p1'
                  defaultMessage='Metflix'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-11-p2'
                  defaultMessage='Metflix is a website inspired by Netflix built with Astro, TypeScript, and Tailwind CSS. It explores how to implement custom reactivity, load content dynamically with IntersectionObserver, and handle dynamic events with MutationObserver.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://metflix-ten.vercel.app/" target="_blank">https://metflix-ten.vercel.app</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/astro.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal10}
        cambiarEstado={cambiarEstadoModal10}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-10.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-10-p1'
                  defaultMessage='I2TEC Website'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-10-p2'
                  defaultMessage='The I2TEC website showcases innovative projects and technological advancements developed in collaboration with experts to deliver impactful technological solutions. Built with AstroJS, Strapi, and TypeScript, it integrates modern technologies such as Docker, GitHub Actions, and Hetzner Cloud.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://i2tec.ec/" target="_blank">https://i2tec.ec</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/astro.svg" alt="AstroJS" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/typescript/typescript-original.svg" alt="TypeScript" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/css3/css3-original.svg" alt="CSS3" />
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
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-9.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-9-p1'
                  defaultMessage='HastenIP'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-9-p2'
                  defaultMessage="A WordPress website for HastenIP that presents its services and policies. We improved the client’s original design and completed the website."
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://hastenip.com/" target="_blank">https://hastenip.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/wordpress/wordpress-plain.svg" alt="WordPress" />
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/html5/html5-original.svg" alt="HTML5" />
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/css3/css3-original.svg" alt="CSS3" />
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
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-8.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-8-p1'
                  defaultMessage='D2B - Official Website'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-8-p2'
                  defaultMessage='The official website for the consultancy D2B, showcasing its services, team, and success stories, along with a contact form. Developed using Astro, React, and Tailwind CSS. WordPress and Directus were used for the backend to manage content. The entire site is deployed on GCP.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://d2b.cl/" target="_blank">https://d2b.cl</a>
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
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/bash/bash-original.svg" alt="Shell / Bash" />
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
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-7.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-7-p1'
                  defaultMessage='E-commerce'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-7-p2'
                  defaultMessage='An e-commerce demo built with Next.js, designed for fast and user-friendly navigation and utilizing component libraries to accelerate development. It connects to a custom GraphQL API to manage data sourced from another API.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://my-ecommerce-five-pied.vercel.app" target="_blank">https://my-ecommerce-five-pied.vercel.app</a>
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
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/css3/css3-original.svg" alt="CSS" />
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
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-6.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-6-p1'
                  defaultMessage='Lumia Creators Web - Corporate Website'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-6-p2'
                  defaultMessage="Design and development of the studio's corporate website. I implemented a high-performance interface with a custom video player and fluid carousels. The architecture includes a secure contact system processed with Resend and anti-bot validation using Cloudflare Turnstile."
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://www.lumiacreators.com/en/" target="_blank">https://www.lumiacreators.com</a>
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
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vercel/vercel-original.svg" alt="Vercel" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/cloudflare/cloudflare-original.svg" alt="Cloudflare" />
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
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-5.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-5-p1'
                  defaultMessage='Lumia Creators - Events and Mods in Java'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-5-p2'
                  defaultMessage='Design and programming of exclusive game mechanics for interactive events and miniseries. Development and implementation of complex logic through Datapacks and modifications (mods) in Java, optimizing user experience and internal server performance.'
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
        estado={estadoModal3}
        cambiarEstado={cambiarEstadoModal3}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-3.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-3-p1'
                  defaultMessage='Hausdorff School'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-3-p2'
                  defaultMessage='Escuela de matemática Hausdorff is a real-client project, it was built using CMS Wordpress and Elementor. With more than 10 years this bussiness has helped more than 1000 students around the Central and South America.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://escueladematematicahausdorff.com" target="_blank">https://escueladematematicahausdorff.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/wordpress/wordpress-plain.svg" alt="WordPress" />
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/elementor.svg" alt="Elementor" />
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
export default Project;