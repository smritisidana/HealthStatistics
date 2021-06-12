import React, { Component } from 'react';
import { render } from 'react-dom';
import * as d3 from 'd3';
import { scaleLinear, scaleBand } from 'd3-scale';
import XYAxis from './Axis/XY-Axis';
import Line from './Axis/Line';
import { line, curveLinear } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';

export default class IssueChart extends Component {
  constructor(props) {
      console.log(props)
    super(props);
  }
  render() {
    const data  = this.props.data;
    console.log(data);
    const parentWidth = 500;

    const margins = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    };

    const width = parentWidth - margins.left - margins.right;
    const height = 200 - margins.top - margins.bottom;

    const ticks = 5;
    const t = transition().duration(1000);

    const xScale = scaleBand()
      .domain(data.map(d => d.name))
      .rangeRound([0, width]).padding(0.1);

    const yScale = scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height, 0])
      .nice();

    const lineGenerator = line()
      .x(d => xScale(d.name))
      .y(d => yScale(d.value))
      .curve(curveLinear);

    return (
      <div>
        {/* <button onClick={this.randomData}>Randomize data</button> */}
        <svg
          className="lineChartSvg"
          width={width + margins.left + margins.right}
          height={height + margins.top + margins.bottom}
        >
          <g transform={`translate(${margins.left + 10}, ${margins.top})`}>
            <XYAxis {...{ xScale, yScale, height, ticks, t }} />
            <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
          </g>
        </svg>
      </div>
    );
  }
}

