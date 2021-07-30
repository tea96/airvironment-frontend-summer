import React from "react";
import moment from "moment";
import "../assets/styles/components/MeasurementCard.scss";
import {
  HighValueIcon,
  HumidityIcon,
  LowValueIcon,
  PollutionIcon,
  ThermometerIcon,
} from "../assets/icons";

function MeasurementCard({ averageValues }) {
  return (
    <div className="container">
      <div className="title">
        <div className="format">
          <b>{moment(averageValues.date, "DD.M.YYYY.").format("ddd")}</b>
        </div>
        <div className="date">
          {moment(averageValues.date, "DD.M.YYYY.").format("DD. MMM. YYYY.")}
        </div>
        <hr />
      </div>
      <div className="size">
        <div className="temperature ">
          <div className="left">
            <ThermometerIcon />
            <div className="left-section-div">
              <div className="left-section-subsection">
                <HighValueIcon />
                <span className="margin-left">
                  {averageValues.maxTemperature}C°
                </span>
              </div>
              <div className="left-section-subsection">
                <LowValueIcon />
                <span className="margin-left">
                  {averageValues.minTemperature}C°
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <span className="right-section">
              <span className="slash">/</span>
              <span>{averageValues.averageTemperature}</span>C°
            </span>
          </div>
        </div>

        <div className="humidity ">
          <div className="left">
            <HumidityIcon />
            <div className="left-section-div">
              <div className="left-section-subsection">
                <HighValueIcon />
                <span className="margin-left">
                  {averageValues.maxHumidity}%
                </span>
              </div>
              <div className="left-section-subsection">
                <LowValueIcon />
                <span className="margin-left">
                  {averageValues.minHumidity}%
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <span className="right-section">
              <span className="slash">/</span>
              <span>{averageValues.averageHumidity}</span>%
            </span>
          </div>
        </div>

        <div className="pollution ">
          <div className="left">
            <PollutionIcon />
            <div className="left-section-div">
              <div className="left-section-subsection">
                <HighValueIcon />
                <span className="margin-left">
                  {averageValues.maxPollution}ppb
                </span>
              </div>
              <div className="left-section-subsection">
                <LowValueIcon />
                <span className="margin-left">
                  {averageValues.minPollution}ppb
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <span className="right-section">
              <span className="slash">/</span>
              <span>{averageValues.averagePollution}</span>
              <span className="ppb">ppb</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeasurementCard;
