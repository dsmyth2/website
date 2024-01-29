import React from "react";

const Charts = (props) => {
  return (
    <div className="chart-wrapper pt-2 bg-light text-dark">
      <h1>{props.wdate}</h1>
      <div className="data-wrapper bg-light py-4">
        <p className="mb-5 w-75 d-inline-flex text-dark">Temp: {props.wtemp}</p>
        <p className="mb-5 w-75 d-inline-flex text-dark">
          Relative Humidity: {props.whumid}%
        </p>
        <p className="mb-5 w-75 d-inline-flex text-dark">
          Atmospheric Pressure: {props.wpressure} mb
        </p>
      </div>
    </div>
  );
};

export default Charts;
