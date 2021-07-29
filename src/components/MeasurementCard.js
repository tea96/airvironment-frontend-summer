import React from "react";
import "../assets/styles/components/MeasurementCard.scss";
import {
  HighValueIcon,
  HumidityIcon,
  LowValueIcon,
  PollutionIcon,
  ThermometerIcon,
} from "../assets/icons";

function MeasurementCard() {
  return (
    <div className="container">
      <div className="title">
        <div className="format">
          <b>Wed</b>
        </div>
        <div className="date">07. Jul. 2021</div>
        <hr />
      </div>
      <div className="size">
        <div className="temperature ">
          <div className="left">
            <ThermometerIcon />
            <div className="left-section-div">
              <div className="left-section-subsection">
                <HighValueIcon />
                <span className="margin-left">30C°</span>
              </div>
              <div className="left-section-subsection">
                <LowValueIcon />
                <span className="margin-left">22C°</span>
              </div>
            </div>
          </div>
          <div className="right">
            <span className="right-section">
              <span className="slash">/</span>
              <span>26</span>C°
            </span>
          </div>
        </div>

        <div className="humidity ">
          <div className="left">
            <HumidityIcon />
            <div className="left-section-div">
              <div className="left-section-subsection">
                <HighValueIcon />
                <span className="margin-left">56%</span>
              </div>
              <div className="left-section-subsection">
                <LowValueIcon />
                <span className="margin-left">40%</span>
              </div>
            </div>
          </div>
          <div className="right">
            <span className="right-section">
              <span className="slash">/</span>
              <span>48</span>%
            </span>
          </div>
        </div>

        <div className="pollution ">
          <div className="left">
            <PollutionIcon />
            <div className="left-section-div">
              <div className="left-section-subsection">
                <HighValueIcon />
                <span className="margin-left">0.70ppb</span>
              </div>
              <div className="left-section-subsection">
                <LowValueIcon />
                <span className="margin-left">0.50ppb</span>
              </div>
            </div>
          </div>
          <div className="right">
            <span className="right-section">
              <span className="slash">/</span>
              <span>0,60</span>
              <span className="ppb">ppb</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeasurementCard;
