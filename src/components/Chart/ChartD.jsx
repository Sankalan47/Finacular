import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ChartD extends Component {
  render() {
    const options = {
        animationEnabled: true,
        
        subtitles: [{
            text: "71% Positive",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        height: 80,
        width: 80,
      data: [
        {
          type: "doughnut",
          color: "#01048a",
          radius:"100%",
         
          dataPoints: [
            { label: "1", y: 60 },
            { label: "2", y: 40 },
            
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  }
}

export default ChartD;
