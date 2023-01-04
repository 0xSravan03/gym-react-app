import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <div></div>
                    <span>The best fitness club in the town</span>
                </div>
                {/* Hero Heading */}
                <div className="hero-text">
                    <div>
                        {/* .stroke-text defined inside App.css for reusability purpose */}
                        <span className='stroke-text'>SHAPE </span>
                        <span>YOUR</span>
                    </div>
                    <div>
                        <span>IDEAL BODY</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* figures section */}
                <div className='figures'>
                    <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+900</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>
                {/* Buttons */}
                <div className='hero-buttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className="rigth-h">
                <button className="btn">Join Now</button>
                <div className="heart-rate">
                    <img src={Heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                {/* images */}
                <img src= {hero_image} alt="Hero" className='hero_image' />
                <img src= {hero_image_back} alt="Hero-Back" className='hero_image_back' />

                {/* calories section */}
                <div className="calories">
                    <img src={Calories} alt="calories" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;