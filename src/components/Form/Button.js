import React from 'react';

const Button = ({ name, type, label }) => {
    return (
        <button aria-label={label} type={type} className="btn btn-dark mb-3">{name}</button>
    )
}

export default Button