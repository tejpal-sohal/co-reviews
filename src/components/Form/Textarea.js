import React from 'react';

const TextArea = ({title , wordCount, SetwordCount, register, errors}) => {
    return (
        <div className="form-group">
            <label htmlFor="text-area">{title}</label>
            <textarea onChange={(e) => { SetwordCount(e.target.maxLength - e.target.value.length) }} id="text-area" maxLength="200" className="form-control" name='comment' aria-describedby="text-area" rows="3" ref={register({ required: "Please enter review" })}></textarea>
            {errors.comment && <small className="text-danger">{errors.comment.message}</small>}
            <small className=".text-muted text-right font-italic"> {wordCount} {wordCount !== 0 ? "character max" : "characters remaining "} </small>
        </div>
    )
}

export default TextArea 