import React from 'react';

const RatingSelect = ({title, register, errors}) => {
    return (
        <div className="form-group">
        <label htmlFor="rating">{title}</label>
        <select id="rating" defaultValue="" className="form-control" name='rating' aria-describedby="rating" ref={register({ required: "Please select rating" })}>
            <option disabled={true} value="">select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        {errors.rating && <small className="text-danger">{errors.rating.message}</small>}
    </div>
    )
}

export default RatingSelect 