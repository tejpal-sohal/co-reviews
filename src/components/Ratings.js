/* Ratings Comp 
Helper function Renders Star icon based on ratings from data
*/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function Ratings({ stars }) {
    const j = Object.values(stars);
    var ratingEntries = [];
    for (var i = 0; i < j; i++) {
        ratingEntries.push(
            <i key={i}> <FontAwesomeIcon icon={faStar} size="xs" /> </i>
        );
    }
    return (<span>{ratingEntries}</span>);


}

export default Ratings