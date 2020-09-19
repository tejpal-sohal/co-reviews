/* Context Wrapper 
This contains all the logic of the Application 
*/

import React, { createContext, useState, useRef } from 'react'
import {setDatasets, graphOptions} from '../components/Graph/graphSettings'
import data from '../data/_data_dummy.js'

// create context for feedback
export const FeedbackContext = createContext();

const FeedbackContextProvider = (props) => {
    // refrence feedback form
    const feedbackForm = useRef(null)
    const form = feedbackForm

    // set data for dummy feedback and wordCount of text area
    const [feedback, setFeedback] = useState(data); 
    const [wordCount, SetwordCount] = useState(200)

     // set data for ratings using HOF filter to filter array 
    const oneStar = feedback.filter((item)=> item.rating === "1" )
    const twoStar = feedback.filter((item)=> item.rating === "2" )
    const threeStar = feedback.filter((item)=> item.rating === "3" )
    const fourStar = feedback.filter((item)=> item.rating === "4" )
    const fiveStar = feedback.filter((item)=> item.rating === "5" )

    // set data for ratings array and helper fuction for graph I wrote which is imported from graphSettings file
    const ratings = [`${fiveStar.length}`, `${fourStar.length}`, `${threeStar.length}`, `${twoStar.length}`, `${oneStar.length}`]
    const graphSettings = setDatasets(ratings)

    // clear form fuction
    const clearForm = () => {
        form.current['name'].value = ""
        form.current['email'].value = ""
        form.current['comment'].value = ""
        form.current['rating'].value = ""
    }

     // submit fuction  
    const onSubmit = (data) => {
        const obj = Object.assign(data, { date: new Date().toDateString() });
        setFeedback(feedback => [...feedback, obj])
        clearForm()
        SetwordCount(200)
    }


    return (
        <FeedbackContext.Provider value={{ feedback, onSubmit, feedbackForm, graphSettings, graphOptions , wordCount, SetwordCount}}>
            {props.children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContextProvider;