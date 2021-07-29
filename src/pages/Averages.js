import React, { useEffect, useState } from "react";
import { MeasurementCard } from "../components/index";
import "../assets/styles/pages/Averages.scss";

function Averages() {
  const [fetchData, setFetchData] = useState({});

  useEffect(() => {
    fetch("https://airvironment.live/api/measurements?per_page=21").then(
      (response) => response.json().then((r) => setFetchData(r.response))
    );
  }, []);
  console.log(fetchData);

  const data = {
    title: "Mon",
    date: "07.Jul.2021",
    maxTemp: 30,
    minTemp: 22,
    minHum: 40,
    maxHum: 56,
    maxPoll: 0.7,
    minPoll: 0.5,
  };
  return fetchData.length ? (
    <div className="averages-container">
      {fetchData.map((card) => (
        <MeasurementCard data={data} fetchData={card} key={card.id} />
      ))}
    </div>
  ) : (
    <div />
  );
}
export default Averages;
