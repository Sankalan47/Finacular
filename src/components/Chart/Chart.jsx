import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  render() {
    const options = {
        animationEnabled: true,
        dataPointMaxWidth: 50,
      title: {
        text: "Annual Projection",
        fontSize: "20",
        
        
      },
      axisX:{
        title: "No of years",
        gridThickness: 0,
        fontSize:"10",
        tickLength: 10,
        titleFontSize: "15"
       },
       axisY:{
        title: "Annual Balance(in years)",
        gridThickness: 0.3,
        tickLength: 1,
        titleFontSize: "15"
       },
      data: [
        {
          type: "column",
          color: "#01048a",
         
          dataPoints: [
           
            { label: "1", y: 175 },
            { label: "2", y: 250 },
            { label: "3", y: 400 },
            { label: "4", y: 510 },
            { label: "5", y: 600 },
            { label: "6", y: 720 },
            { label: "7", y: 800 },
            { label: "8", y: 900 },
            { label: "9", y: 1000 },
            { label: "10", y:1050 },
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

export default Chart;
