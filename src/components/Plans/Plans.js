import React from 'react';
import './Plans.css';
import uuid from 'react-uuid';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import Rightarrow from '../../assets/rightArrow.png';

const Plans = () => {
    const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className="plans-container" id='plans'>
        {/* blur effect */}
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        {/* header sections */}
        <div className="program-header" style={{gap : mobile ? '0.5rem' : '2rem'}}>
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now withus</span>
        </div>

        {/* plans card section */}
        <div className='plans'>
            {
                plansData.map((plan) => (
                    <div className="plan" key={uuid()}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        {/* features section */}
                        <div className="features">
                            {
                                plan.features.map((feature) => (
                                    <div className="feature" key={uuid()}>
                                        <img src={whiteTick} alt="tick" />
                                        <span>{feature}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='benifit-sec'>
                            <span>See more benifits</span>
                            <img src={Rightarrow} alt="arrow" />
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default Plans;