import React from "react";
import useDates from "../hooks/useDates";

const AllDataCardRow = ({ hour }) => {
  const { returnHour } = useDates();
  return (
    <>
      <div className="date-time-wrapper">{returnHour(hour.created)}h</div>
      <div className="values">{Math.round(hour.temperature)}&deg;C</div>
      <div className="values">{Math.round(hour.humidity)}%</div>
      <div className="values">{Math.round(hour.pollution) / 100}ppb</div>
    </>
  );
};

export default AllDataCardRow;
