/* Form Comp 
renders Comps
-InputField 
-RatingSelect 
-TextArea 
-Button
*/


import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FeedbackContext } from '../../contexts/FeedbackContext'
import TextArea from './Textarea.js'
import RatingSelect from './RatingSelect.js'
import InputField from './FormInputField.js'
import Button from './Button'

function FeedbackForm() {
    const { feedbackForm, onSubmit, wordCount, SetwordCount } = useContext(FeedbackContext)
    const { register, handleSubmit, errors } = useForm();

    return (
        <div className="col-md-6 col-lg-5 bg-light p-4 rounded">
            <form ref={feedbackForm} onSubmit={handleSubmit(onSubmit)}>
                <h1 className="mb-3">Product Reviews</h1>
                <InputField title="Name" register={register} errors={errors} htmlFor="InputName" type="text" id="InputName" name='name' errorMessage="Please enter name" />

                <InputField title="Email address" register={register} errors={errors} htmlFor="InputEmail" type="email" id="InputEmail" name='email' errorMessage="Please enter email address" />

                <RatingSelect title="Rating" register={register} errors={errors} />

                <TextArea title="Comment" wordCount={wordCount} SetwordCount={SetwordCount} register={register} errors={errors} />

                <Button name="Submit" label="Submit" type="submit" />

   
            </form>
        </div>



    )
}


export default FeedbackForm;