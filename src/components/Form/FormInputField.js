import React from 'react';

const FormInputField = ({ title, type, htmlFor, id, name, register, errors, errorMessage }) => {
    return (
        <div className="form-group">
            <label htmlFor={htmlFor}>{title}</label>
            <input type={type} id={id} className="form-control" name={name} aria-describedby={id} ref={register({ required: errorMessage })} />
            {errors[name] && <small className="text-danger">{errors[name].message}</small>}
        </div>
    )
}

export default FormInputField 