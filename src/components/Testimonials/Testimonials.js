import React from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    return (
        <div className="Testimonials">
            <div className="left-t">
                <span>TESTIMONIALS</span>
                <span className='stroke-text'>WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <span>{testimonialsData[selected].review}</span>
                <div>
                    <span className='tname'>{testimonialsData[selected].name} - </span>
                    <span>{testimonialsData[selected].status}</span>
                </div>
            </div>
            <div className="right-t">
                {/* below 2 divs add styles behind the selected image */}
                <div></div>
                <div></div>
                <img src= {testimonialsData[selected].image} alt="people" />
                <div className="arrows">
                    <img src={leftArrow} alt="larrow" onClick={() => { selected===0 ? setSelected(tLength -1) : setSelected((preValue) => preValue - 1)} } />
                    <img src={rightArrow} alt="rarrow" onClick={() => { setSelected((selected + 1) % tLength)} } />
                </div>
            </div>
        </div>
    );
}

export default Testimonials;