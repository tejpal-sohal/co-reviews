/* Graph Comp 
gets data from feedbackContext
*/


import React,  { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { FeedbackContext } from '../../contexts/FeedbackContext'

function Graph() {
    const { graphSettings, graphOptions } = useContext(FeedbackContext)
    return (
        <div className="col-md-6 mb-4">
            < Line data={graphSettings.charData}
                options={graphOptions}
            />
        </div>
    );
}

export default Graph;

