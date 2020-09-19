/* Graph settings
function setDatasets takes in arr to set data
graphOptions settings
*/


function setDatasets(arr) {
    const graphSettings = {
        charData: {
            labels: ['5★', '4★', '3★', '2★', '1★'],
            datasets: [
                {
                    label: `People`,
                    data: arr,
                    backgroundColor: [
                        'rgba(12, 17, 66, 0.7)',
                    ],
                    borderColor: [
                        'rgba(68, 255, 0, 1)',
                    ],
                    pointBorderWidth: 2.5,
                    pointBackgroundColor: 'rgba(68, 255, 0, 1)',
                    pointHoverBorderColor: 'rgba(68, 255, 0, 1)',
                    pointHoverBackgroundColor: 'rgba(68, 255, 0, 1)',
                    borderWidth: 1,
                }
            ]
        }
    }

    return graphSettings

}

const graphOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: true,
        position: 'bottom'
    },
    title: {
        display: true,
        text: 'Product Ratings'
    },
    scales: {
        yAxes: [{
            scaleLabel:{
                display: true,
                labelString: "Number of people"
            },
            ticks: {
                beginAtZero: true,
                stepSize: 1,
            }
        }]
    }
}


export { setDatasets, graphOptions }