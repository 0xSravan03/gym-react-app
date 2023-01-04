import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData';
import Rightarrow from '../../assets/rightArrow.png';
import uuid from 'react-uuid';

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
        {/* header sections */}
        <div className="program-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        {/* programs details */}
        <div className="program-categories">
            {
                programsData.map((program) => (
                    <div className="category" key={uuid()} >
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={Rightarrow} alt="Join Now" />
                        </div>
                    </div>
                ) )
            }
        </div>
    </div>
  );
}

export default Programs;