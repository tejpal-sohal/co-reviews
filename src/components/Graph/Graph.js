/* Graph Comp 
gets data from feedbackContext
*/


import React,  { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { FeedbackContext } from '../../contexts/FeedbackContext'

function Graph() {
    const { graphSettings, graphOptions } = useContext(FeedbackContext)
    return (
        <div className="col-md-6 col-lg-7 mb-4 mh-300">
            < Line data={graphSettings.charData}
                options={graphOptions}
            />
        </div>
    );
}

export default Graph;

