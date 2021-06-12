import React, {useState} from 'react';
import * as d3 from 'd3';
import './styles/ScoreBoard.css';
import ScoreChart from './ScoreChart.js';

const ScoreBoard = (props) => {
    // console.log(props.data.applications,"sdfghj")
    const data =[
        {
            value : 25
        },
        {
            value : 75
        }
    ]
  
    return(
        <div className="scoreBoard">
            <div className="grid-container grid-container--fit">
                <div className="grid-element">
                    <ScoreChart
                        data={data}
                        width={100}
                        height={100}
                        innerRadius={40}
                        outerRadius={50}
                    />
                    <div className="gridDesc">
                        <div className="label">Good</div>
                        <span className="labelDesc">Your score is up by 5% since yesterday</span>
                    </div>
                </div>
                <div className="grid-element">
                    <div className="applications">
                        <div className="appDesc"><span className="bold">{props.data.applications} </span>Applications</div>
                        <div className="appDesc"><span className="bold">57 </span>Critical (14% of Total)</div>
                        <div className="appDesc"><span className="bold">20 </span>Warning (0% of Total)</div>
                    </div>
                    
                </div>
                <div className="grid-element">
                    <div className="applications">
                        <div className="bold">MTTD - 25s</div>
                        <div className="bold">MTTA - 2m 3s</div>
                        <div className="bold">MTTR - 4h 36m 6s</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard 
