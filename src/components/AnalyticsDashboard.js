import React from 'react';
import './styles/DashBoard.css';
import ScoreBoard from './ScoreBoard';
import HealthStatus from './HealthStatus';
import IssueTrend from './IssueTrend';
import Infrastructure from './Infrastructure';

const AnalyticsDashboard = () => {
    let userName = "Smriti";
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let yy = yyyy.toString().substr(-2);
    today = dd + '.' + mm + '.' + yy;

// const applicationData = [
//     {
//         "applications" : 407
//     },
//     {
//         "critical" : 57
//     },
//     {
//         "warning" : 20
//     }
// ]

const applicationData = 
    {
        "applications" : 407,
        "critical" : 57,
        "warning" : 20

    }
    
    return(
        <div className="boardPage">
            <div className="dashBoardHeader">
                <div className="header">
                    <div className="userDisplay">
                        Hello {userName}
                    </div>
                    <div className="timeDisplay">
                        Last updated on : {today}
                    </div>  
                </div>
                <ScoreBoard data={applicationData}/>
                <div className="statusTrend">
                    <HealthStatus data={applicationData}/>
                    <IssueTrend/>
                </div>
                <div className="infraStatus">
                    <Infrastructure/>
                </div>
            </div>
            
        </div>
    )
}

export default AnalyticsDashboard 
