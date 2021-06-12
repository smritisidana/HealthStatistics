import React, {createRef, Component} from 'react';
import * as d3 from 'd3';
import { min } from 'd3';

class ScoreChart extends Component {
    
    constructor(props) {
      super(props);
      this.ref = createRef();
      this.createPie = d3
        .pie()
        .value(d => d.value)
        .sort(null);
      this.createArc = d3
        .arc()
        .innerRadius(props.innerRadius)
        .outerRadius(props.outerRadius);
    //   this.colors = d3.scaleOrdinal(d3.schemeCategory10);
    this.colors = d3.scaleOrdinal()
        // .domain(d.value)
        .range(["#47987A", "#D2D7D8"])
      this.format = d3.format(".2f");
    }
    componentDidMount() {
      const svg = d3.select(this.ref.current);
      const data = this.createPie(this.props.data);
      const { width, height, innerRadius, outerRadius } = this.props;
  
      svg
        .attr("class", "chart")
        .attr("width", width)
        .attr("height", height);
  
      const group = svg
        .append("g")
        .attr("transform", `translate(${outerRadius} ${outerRadius})`);
  
      const groupWithEnter = group
        .selectAll("g.arc")
        .data(data)
        .enter();
  
      const path = groupWithEnter.append("g").attr("class", "arc");
  
      path
        .append("path")
        .attr("class", "arc")
        .attr("d", this.createArc)
        .attr("fill", (d, i) => this.colors(d.index));

        svg
        .append("text")
        .style("text-anchor", "middle")
        .attr("font-size", "1em")
        .attr('y',40)
        .attr('x',50)
        .attr("class", "inside")
        .text(function(d){
            return "25%"
        })

        svg
        .append("text")
        .style("text-anchor", "middle")
        .attr("font-size", "11px")
        .attr("fill", "#646464")
        .attr('y',60)
        .attr('x',50)
        .attr("class", "inside")
        .text(function(d){
            return "Health"
        })

    //   path
    //     .text(d => this.format(d.value));
  
    //   path
        // .append("text")
        // .attr("text-anchor", "middle")
        // .attr("alignment-baseline", "middle")
        // .attr("transform", d => `translate(${this.createArc.centroid(d)})`)
        // .style("fill", "white")
        // .style("font-size", 10)
        // .text(d => this.format(d.value));
    }
  
    componentWillUpdate(nextProps, nextState) {
      const svg = d3.select(this.ref.current);
      const data = this.createPie(nextProps.data);
  
      const group = svg
        .select("g")
        .selectAll("g.arc")
        .data(data);
  
      group.exit().remove();
  
      const groupWithUpdate = group
        .enter()
        .append("g")
        .attr("class", "arc");
  
      const path = groupWithUpdate.append("path").merge(group.select("path.arc"));
  
      path
        .attr("class", "arc")
        .attr("d", this.createArc)
        .attr("fill", (d, i) => this.colors(i));
  
      const text = groupWithUpdate.append("text").merge(group.select("text"));

      

        // text1.text("80")
  
      text
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("transform", d => `translate(${this.createArc.centroid(d)})`)
        .text(d => this.format(d.value));
    }
  
    render() {
      return <svg ref={this.ref} />;
    }
  }
  
  export default ScoreChart;