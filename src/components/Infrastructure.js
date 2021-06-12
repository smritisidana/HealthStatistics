import React from 'react';
import './styles/Infrastructure.css';
import InfraChart from './InfraChart';

const Infrastructure = () => {

    const infraData =[
        {
            label : "AWS",
            value : 40
        },
        {
            label : "Azure",
            value : 35
        },
        {
            label : "Oracle",
            value : 25
        }
    ]

    return(
        <div className="infrastructure">
            <div className="infraHeading">Infrastructure Discovered</div>
            <div className="grid-container grid---fit">
                <div className="grid-el">
                <InfraChart
                    data={infraData}
                    width={240}
                    height={240}
                    innerRadius={60}
                    outerRadius={70}
                />
                </div>
                <div className="grid-el">
                
                </div>
            </div>
            <div className="healthChart">
                
            </div>
            {/* <div className="healthLegends"></div>
            <div className="healthTag">
                10%  <ArrowUp/> Increase in Critical Issues
            </div> */}
        </div>
    )
}

export default Infrastructure