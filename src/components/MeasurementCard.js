import React from "react";
import "../assets/styles/components/MeasurementCard.scss";
import {
  HighValueIcon,
  HumidityIcon,
  LowValueIcon,
  PollutionIcon,
  ThermometerIcon,
} from "../assets/icons";

function MeasurementCard({ data, fetchData }) {
  return (
    <div className="container">
      <div className="title">
        <div className="format">
          <b>{data.title}</b>
        </div>
        <div className="date">{data.date}</div>
        <hr />
      </div>
      <div className="size">
        <div className="temperature ">
          <div className="left">
            <ThermometerIcon />
            <div className="left-section-div">
              <div className="left-section-subsection">
                <HighValueIcon />
                <span className="margin-left">{data.maxTemp}C°</span>
              </div>
              <div className="left-section-subsection">
                <LowValueIcon />
                <span className="margin-left">{data.minTemp}C°</span>
              </div>
            </div>
          </div>
          <div className="right">
            <span className="right-section">
              <span className="slash">/</span>
              <span>{fetchData.temperature.toFixed(0)}</span>C°
            </span>
          </div>
        </div>

        <div className="humidity ">
          <div className="left">
            <HumidityIcon />
            <div className="left-section-div">
              <div className="left-section-subsection">
                <HighValueIcon />
                <span className="margin-left">{data.maxHum}%</span>
              </div>
              <div className="left-section-subsection">
                <LowValueIcon />
                <span className="margin-left">{data.minHum}%</span>
              </div>
            </div>
          </div>
          <div className="right">
            <span className="right-section">
              <span className="slash">/</span>
              <span>{fetchData.humidity.toFixed(0)}</span>%
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
                  {data.maxPoll.toFixed(2)}ppb
                </span>
              </div>
              <div className="left-section-subsection">
                <LowValueIcon />
                <span className="margin-left">
                  {data.minPoll.toFixed(2)}ppb
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <span className="right-section">
              <span className="slash">/</span>
              <span>{(fetchData.pollution / 100).toFixed(2)}</span>
              <span className="ppb">ppb</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeasurementCard;
