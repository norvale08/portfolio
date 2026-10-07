import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-18.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>AUDITECHME APP</h3>
                            <p>
                                Trading platform for cryptocurrencies
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> CSS
                                <span> -</span> Redux
                                <span> -</span> Bootstrap
                                <span> -</span> TypeScript
                                <span> -</span> Solidity
                                <span> -</span> NodeJS
                                <span> -</span> MongoDB
                            </p>
                            <a href="https://grctechme.com" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-14.jpg`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Rooftec</h3>
                            <p>
                                A WordPress website for a construction company. It shows their products and services, such as roofing, waterproofing, facades, and insulation.
                            </p>
                            <p className="tecnologias">
                                WordPress
                                <span> -</span> Product Catalog
                                <span> -</span> Construction
                                <span> -</span> Commercial UX
                                <span> -</span> SEO
                            </p>
                            <a href="https://rooftec.do/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-17.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>MOVIEXD - Movie Catalog with Vue</h3>
                            <p>
                               A web app that uses the TMDB API to show popular movies. It has a search feature, genre filters, and movie trailers.
                            </p>
                            <p className="tecnologias">
                                Vue.js
                                <span> -</span> JavaScript
                                <span> -</span> CSS3
                                <span> -</span> Vite
                            </p>
                            <a href="https://pelisxd.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-7.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>E-commerce</h3>
                            <p>
                                A demo e-commerce website built with Next.js. It connects to a GraphQL API to manage product data.
                            </p>
                            <p className="tecnologias">
                                Next.js
                                <span> -</span> TypeScript
                                <span> -</span> JavaScript
                                <span> -</span> CSS3
                            </p>
                            <a href="https://my-ecommerce-five-pied.vercel.app" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-6.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Lumia Creators Web - Corporate Website</h3>
                            <p>
                                A modern corporate website for a studio with a custom video player, smooth carousels, and a secure contact form.
                            </p>
                            <p className="tecnologias">
                                Astro
                                <span> -</span> TypeScript
                                <span> -</span> Tailwind CSS
                                <span> -</span> Vercel
                            </p>
                            <a href="https://www.lumiacreators.com/en/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-12.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Tourist Information Desk</h3>
                            <p>
                                A platform for managing and promoting tourism in Loja. It includes tourism events, destinations, and website customization tools.
                            </p>
                            <p className="tecnologias">
                                Odoo
                                <span> -</span> Python
                                <span> -</span> HTML5
                                <span> -</span> Sass / SCSS
                            </p>
                            <a href="https://mesaturisticaloja.com" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-5.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Lumia Creators - Events and Mods in Java</h3>
                            <p>
                                A game development project with custom mechanics for interactive events and miniseries. Built with Java, Datapacks, and mods.
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Sass
                            </p>
                            <a href="https://www.lumiacreators.com/es/proyectos/elreto/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-8.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>D2B - Official Website</h3>
                            <p>
                                A corporate website for D2B that shows its services, team, and projects. It also includes a contact form.
                            </p>
                            <p className="tecnologias">
                                Astro
                                <span> -</span> JavaScript
                                <span> -</span> Shell / Bash
                            </p>
                            <a href="https://mesaturisticaloja.com" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-10.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>I2TEC Website</h3>
                            <p>
                                A website for I2TEC that shows technology projects and solutions.
                            </p>
                            <p className="tecnologias">
                                Astro
                                <span> -</span> TypeScript
                                <span> -</span> JavaScript
                                <span> -</span> Tailwind CSS
                                <span> -</span> CSS3
                            </p>
                            <a href="https://i2tec.ec/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-9.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>HastenIP</h3>
                            <p>
                                A WordPress website for HastenIP. We improved the original design and finished the website.
                            </p>
                            <p className="tecnologias">
                                WordPress
                                <span> -</span> HTML5
                                <span> -</span> CSS3
                            </p>
                            <a href="https://hastenip.com/ " className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-11.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Metflix</h3>
                            <p>
                                A Netflix-style website built with Astro, TypeScript, and Tailwind CSS. It shows movies and loads content dynamically.
                            </p>
                            <p className="tecnologias">
                                Astro
                            </p>
                            <a href="https://metflix-ten.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);