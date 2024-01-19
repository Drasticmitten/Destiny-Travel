import React from 'react';
import PropTypes from 'prop-types';

const TextStyle = (props) => {
    const { title, description, flexdirection } = props;

    let flexContainerClass;
    if (flexdirection === 'right') {
        flexContainerClass = 'items-end text-end';
    } else if (flexdirection === 'left') {
        flexContainerClass = 'items-start text-start';
    } else {
        flexContainerClass = 'items-center text-middle';
    }

    return (
        <div className={`${flexContainerClass} flex flex-col h-full justify-center gap-20`}>
            <div className='w-7/12 flex flex-col gap-20'>
                <h1 className='text-white text-6xl font-bold'>{title}</h1>
                <p className='text-white text-2xl'>{description}</p>
            </div>
        </div>
    );
};

TextStyle.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flexdirection: PropTypes.string.isRequired,
};

export default TextStyle;