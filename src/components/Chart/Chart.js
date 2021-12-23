import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //array of amounts spent in every month of every year
  const totalMaxValue = Math.max(...dataPointValues); //the max amount spent in the year
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaxValue}
          />
        );
      })}
    </div>
  );
};
export default Chart;
