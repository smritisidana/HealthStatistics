import React, {createRef, Component} from 'react';
import * as d3 from 'd3';

class StatusChart extends Component {
    
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
      this.color = d3.scaleOrdinal()
        .range(["#00B59B", "#FF453C", "#FFBD35"])
      this.format = d3.format(".2f");
    }
    componentDidMount() {
      const svg = d3.select(this.ref.current);
      const data = this.createPie(this.props.data);
      const { width, height, innerRadius, outerRadius } = this.props;
      const data1 = this.props.data;

    //   var color = d3.scaleOrdinal()
    //     .range(["#00B59B", "#FF453C", "#FFBD35"])
  
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
        .attr("fill", (d, i) => this.color(d.index));

        // var legendRectSize = 13;
        // var legendSpacing = 7;


        // var legend = svg.selectAll('.legend')
        //     .data(color.domain())
        //     .enter()
        //     .append('g')
        //     .attr('class', 'circle-legend')
        //     .attr('transform', function (d, i) {
        //         var height = legendRectSize + legendSpacing;
        //         var offset = height * color.domain().length / 2;
        //         var horz = -2 * legendRectSize - 13;
        //         var vert = i * height - offset;
        //         return 'translate(' + horz + ',' + vert + ')';
        //     });

        // legend.append('circle')
        //     .style('fill', color)
        //     .style('stroke', color)
        //     .attr('cx', 0)
        //     .attr('cy', 0)
        //     .attr('r', '.5rem');

        // legend.append('text')
        //     .attr('x', legendRectSize + legendSpacing)
        //     .attr('y', legendRectSize - legendSpacing)
        //     .text(function (d) {
        //         return d;
        //     });

        // var labelHeight = 18;
        // var radius = 150;
        // var colorSeq = d3
        // .scaleSequential()
        // .domain([0, data.length])
        // .interpolator(d3.interpolateGreens)


        // const legend = svg
        //     .append('g')
        //     .attr('class', 'legend')
        //     .attr("font-family", "sans-serif")
        //     .attr("font-size", 20)
        //     .attr("text-anchor", "start")
        //     .attr("dy", ".35em")
        //     .selectAll('g')
        //     .data(data)
        //     .enter().append("g")
        //     .attr('transform', `translate(${radius * 2 + 20},0)`);

        // legend
        //     .append("rect")
        //     .attr('x', labelHeight * 1.2 + labelHeight)
        //     .attr('y', d => labelHeight * d.index * 1.8 + labelHeight)
        //     .attr('width', labelHeight)
        //     .attr('height', labelHeight)
        //     .attr('fill', d => this.color(d.data.label))
        //     .attr('stroke', this.color)
        //     // .style('stroke-width', '56px');

        // legend
        //     .append("text")
        //     .attr('x', labelHeight * 1.2)
        //     .attr('y', d => labelHeight * d.index * 1.8 )
        //     .style('font-family', 'sans-serif')
        //     .style('font-size', `${labelHeight}px`)
        //     .text(d => d.data.label);


    // var legendSize = 15;
    // var legendSpacing = 2;
    // var legend = svg
    //     .selectAll(".legend")
    //     .data(this.color.domain())//color domain is input data which is d.data.
    //     .enter()
    //     .append("g")
    //     .attr("transform",function(d,i){
    //         var legendH = 60;//total height of legends
    //         var legendY = i*(legendSize+legendSpacing) - legendH/2;//
    //         var legendX = -legendSize;
    //         return "translate("+legendX+","+legendY+")";
    //     });
    // legend.append("rect")
    //     .attr("width",legendSize)
    //     .attr("height",legendSize)
    //     .attr("fill",this.color)
    //     .attr("stroke",this.color);
    // legend.append("text")
    //     .text(function(d){return d[0];})
    //     .attr('x', legendSize + legendSpacing)
    //     .attr('y', legendSize - legendSpacing);

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
        .attr("fill", (d, i) => this.color(i));
  
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
  
  export default StatusChart;