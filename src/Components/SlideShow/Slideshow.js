import React from 'react';
import { faAngleLeft, faAngleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./slide.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Slideshow = () => {

    

    return (
        <div className='slide-container'>
            <div className='slideshow'>
                <div className='slide'>
                    <a href="">
                        <img src={require("./images/instagram.jpg")} alt="" />
                    </a>
                    <div className='slide-text'>
                      <p>Haz click en la imagen para ir a instagram</p>
                    </div>
                </div>
                <div className='slide'>
                    <a href="">
                        <img src={require("./images/facebook.jpg")} alt="" />
                    </a>
                    <div className='slide-text'>
                      <p>Visita nuestra pagina</p>
                    </div>
                </div>
                <div className='slide'>
                    <a href="">
                        <img src={require("./images/hombre.jpg")} alt="" />
                    </a>
                    <div className='slide-text'>
                      <p>Visita nuestra pagina</p>
                    </div>
                </div>
                <div className='slide'>
                    <a href="">
                        <img src={require("./images/mujer.jpg")} alt="" />
                    </a>
                    <div className='slide-text'>
                      <p>Visita nuestra pagina</p>
                    </div>
                
                </div>

            </div>
            <div className='slide-control'>
                <button className='slide-btn'><FontAwesomeIcon className='left' icon={faAngleLeft}/></button>
                <button className='slide-btn'><FontAwesomeIcon className='right' icon={faAngleRight}/></button>
            </div>
        </div>
    );
};

export default Slideshow;