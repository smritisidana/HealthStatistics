import React from 'react';
import IssueChart from './IssueChart';
import {ArrowUp} from 'react-bootstrap-icons';
import './styles/IssueTrend.css';

const IssueTrend = () => {
    const data=[
        {name : 'Jan', value: 25},
        {name : 'Feb', value: 50},
        {name : 'Mar', value: 60},
        {name : 'Apr', value: 75},
        {name : 'May', value: 125},
        {name : 'Jun', value: 30},
        {name : 'Jul', value: 50},
        {name : 'Aug', value: 60},
        {name : 'Sept', value: 100},
        {name : 'Oct', value: 85},
        {name : 'Nov', value: 25},
        {name : 'Dec', value: 75}
    ];

    return(
        <div className="issueTrend">
            <div className="trendHeading">Critical Issue Trend ( This year )</div>
            <div>
                <IssueChart data={data}/>
            </div>
            <div className="trendTag">
                69% <ArrowUp/> Increase in Critical Issues in the last month
            </div>
        </div>
    )
}

export default IssueTrend