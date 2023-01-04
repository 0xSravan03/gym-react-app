import React from 'react';
import './Reasons.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="gym1" />
            <img src={image2} alt="gym2" />
            <img src={image3} alt="gym3" />
            <img src={image4} alt="gym4" />
        </div>
        <div className="right-r">
            <span>some reasons</span>
            <div>
                <span className='stroke-text'>why </span>
                <span>choose us?</span>
            </div>

            {/* reasons */}
            <div className='details-r'>
                <div>
                    <img src={tick} alt="tick" />
                    <span>over 140+ expert coachs</span>
                </div>
                <div>
                <img src={tick} alt="tick" />
                    <span>train smarter and faster than before</span>
                </div>
                <div>
                <img src={tick} alt="tick" />
                    <span>1 free program for new member</span>
                </div>
                <div>
                <img src={tick} alt="tick" />
                    <span>reliable partners</span>
                </div>
            </div>

            {/* partners */}
            <div className="partners">
                <span>our partners</span>
                <div className="partner-img">
                    <img src={nb} alt="partners" />
                    <img src={adidas} alt="partners" />
                    <img src={nike} alt="partners" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Reasons;