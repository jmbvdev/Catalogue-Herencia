import React from 'react';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons';
import "../styles/slider.css"
import { useState } from 'react';
import { sliderItems } from '../data';

const Slider = () => {
    const [slideIndex, setSlideIndex]= useState(0)
    const handleClick=(direction)=>{
        if (direction==="left") {
            setSlideIndex(slideIndex>0?slideIndex -1:2)
            
        } else{
            setSlideIndex(slideIndex<2?slideIndex+1:0)
        }


    }
    return (
        <div className='slider-container'>
            <div className='slider-arrow-left' onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </div>
            <div className={`wrapper-slider ${slideIndex}`}>
                {
                    sliderItems.map(item=>(
                    <div className="slide">
                            <div className='slide-img-container'>
                                    <img src={require(`../images/${item.img}`)} />
                            </div>
                            <div className='slide-info-container'>
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                                <button>SHOW NOW</button>
                            </div>
                    </div>
                    ))
                }
                
            </div>
            
            <div className='slider-arrow-right' onClick={()=>handleClick("left")}>
                <ArrowRightOutlined/>
            </div>
        </div>
    );
};

export default Slider;