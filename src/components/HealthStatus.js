import React from 'react';
import {ArrowUp} from 'react-bootstrap-icons';
import StatusChart from './StatusChart';
import './styles/HealthStatus.css';

const HealthStatus = (props) => {

    const statusData =[
        {
            label : "Good",
            value : 50
        },
        {
            label : "Critical",
            value : 10
        },
        {
            label : "Warning",
            value : 40
        }
    ]

    return(
        <div className="healthStatus">
            <div className="statusHeading">Health Status</div>
            <div className="healthChart">
                <StatusChart
                    data={statusData}
                    width={130}
                    height={130}
                    innerRadius={50}
                    outerRadius={65}
                />
            </div>
            <div className="healthLegends"></div>
            <div className="healthTag">
                10%  <ArrowUp/> Increase in Critical Issues
            </div>
        </div>
    )
}

export default HealthStatus