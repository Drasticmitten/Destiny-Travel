import React from 'react';
import PropTypes from 'prop-types';
import Beach from '../assets/services/beach.svg';
import Package from '../assets/services/package.svg';
import Education from '../assets/services/education.svg';
import Business from '../assets/services/business.svg';
import Health from '../assets/services/health.svg';
import Housing from '../assets/services/housing.svg';

const Card = (props) => {
    const { imgsrc, title, description } = props;
    
    let dynamicImage;

    if (imgsrc === 'Beach') {
        dynamicImage = <img className='w-[50px]' src={Beach} alt="Service Logo" />;
    } else if (imgsrc === 'Package') {
        dynamicImage = <img className='w-[50px]' src={Package} alt="Service Logo" />;
    } else if (imgsrc === 'Education') {
        dynamicImage = <img className='w-[50px]' src={Education} alt="Service Logo" />;
    } else if (imgsrc === 'Business') {
        dynamicImage = <img className='w-[50px]' src={Business} alt="Service Logo" />;
    } else if (imgsrc === 'Health') {
        dynamicImage = <img className='w-[50px]' src={Health} alt="Service Logo" />;
    } else {
        dynamicImage = <img className='w-[50px]' src={Housing} alt="Service Logo" />;
    }

    return (
        <div className='w-full bg-[#f0f0f0] flex justify-between items-center p-6 rounded-xl'>
            <div className='bg-[#0874bc] w-[80px] h-[80px] grid items-center justify-center rounded-xl'>
                {dynamicImage}
            </div>

            <div className='text-end w-8/12'>
                <h2 className='text-xl font-bold'>{title}</h2>
                <p className='whitespace-pre-line'>{description}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    imgsrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;