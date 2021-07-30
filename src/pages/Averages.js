import React, { useEffect, useState } from "react";
import { MeasurementCard } from "../components/index";
import "../assets/styles/pages/Averages.scss";
import { loadAverageValues } from "../redux/actions/averageActions";
import { connect } from "react-redux";

function Averages({ averageValues, getAverageValues }) {
  useEffect(() => {
    const params = {
      all: true,
    };
    getAverageValues(params);
    console.log(averageValues);
  }, [getAverageValues]);

  return averageValues ? (
    <div className="averages-container">
      {averageValues.map((averageValues) => (
        <MeasurementCard
          averageValues={averageValues}
          key={averageValues.date}
        />
      ))}
    </div>
  ) : (
    <div />
  );
}

function mapStateToProps(state) {
  return {
    averageValues: state.averageValues ? state.averageValues : [],
  };
}

const mapDispatchToProps = {
  getAverageValues: loadAverageValues,
};
export default connect(mapStateToProps, mapDispatchToProps)(Averages);
