import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import "../Inicio/Inicio.css"

const Inicio = () => {
    const [isMobile, setIsMobile]= useState(false)


    return (
        <div>
            <nav className='navbar'>
                <h3 className='logo'>Logo</h3>
                <ul className={isMobile? "nav-links-mobile": "nav-links" }>
                    <Link to={"/"} className="nav-link" > <li>Inicio</li></Link> 
                    <Link to={"/hombre"} className="nav-link" ><li>Hombre</li></Link>
                    <Link to={"/mujer"} className="nav-link" ><li>Mujer</li></Link>
                    <Link to={"/conocenos"} className="nav-link" ><li>Conocenos</li></Link>
                    <Link to={"/contacto"} className="nav-link" ><li>Contacto</li></Link>
                </ul>
                <button className='wraper' onClick={()=>setIsMobile(!isMobile)}>
                    {isMobile? (
                         <FontAwesomeIcon icon={faTimes}/>
                         ):(
                         <FontAwesomeIcon icon={faBars} />
                          )}
                </button>
            </nav>
        </div>
    );
};

export default Inicio;