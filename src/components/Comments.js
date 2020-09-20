/* Comments Comp 
gets data from feedbackContext and maps over comments and returs div with ratings helper component
*/


import React, { useContext } from 'react';
import { FeedbackContext } from '../contexts/FeedbackContext'
import Rating from './Ratings.js'

function Comments() {
    const { feedback } = useContext(FeedbackContext)
    return (
        <div className="col-md-12 mt-4 mb-4">
            <div className="list-group">
                <h2 className="mb-5">Reviews</h2>
                {
                  feedback.length === 0 ? <small>No reviews </small> :  feedback.map((item, key) => {
                        return (
                            <div key={key} href="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h4 className="mb-1 lead font-weight-bold">{item.name}
                                        <Rating stars={item.rating} />
                                    </h4>
                                    <small className="font-italic">{item.date}</small>
                                </div>
                                <p className="mb-1">{item.comment}</p>
                                <small className="font-italic">{item.email}</small>
                            </div>
                        )
                    }).reverse()
                }
            </div>
        </div>
    );
}

export default Comments