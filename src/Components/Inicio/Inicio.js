import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {FaWhatsapp, FaFacebook, FaInstagram} from "react-icons/fa"



import "../Inicio/Inicio.css"
import Slideshow from '../SlideShow/Slideshow';

const Inicio = () => {
    const [isMobile, setIsMobile]= useState(false)


    return (
        <div>
            <nav className='navbar'>
                <div className='logo-container'>
                    <div>
                        <Link  to={"/"} className="nav-link"><img className="logo" src={require("./images/logo-h.png")} alt="" />
                        </Link> 

                    </div>
                    <div>
                <Link  to={"/"} className="nav-link"><img className="logo-h" src={require("./images/logo-title.png")} alt="" />
                </Link> 

                    </div>

                </div>

                <ul className={isMobile? "nav-links-mobile": "nav-links" }>
                    <Link to={"/"} className="nav-link"><li>Inicio</li></Link> 
                    <Link to={"/hombre"} className="nav-link"><li>Hombre</li></Link>
                    <Link to={"/mujer"} className="nav-link"><li>Mujer</li></Link>
                    <Link to={"/conocenos"} className="nav-link"><li>Conocenos</li></Link>
                    <Link to={"/contacto"} className="nav-link"><li>Contacto</li></Link>
                    <div className='nav-social'>
                        <a href=""><FaWhatsapp/></a>
                        <a href=""><FaFacebook/></a>
                        <a href=""><FaInstagram/></a>
                    </div>
               
                </ul>
                <button className='wraper' onClick={()=>setIsMobile(!isMobile)}>
                    {isMobile? (
                         <FontAwesomeIcon icon={faTimes}/>
                         ):(
                         <FontAwesomeIcon icon={faBars} />
                          )}
                </button>
            </nav>
            <main>
                <p>Alta Costura Hecha a tu medida por manos bolivianas. </p>
                <Slideshow/>

            </main>
        </div>
    );
};

export default Inicio;