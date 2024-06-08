import React, { useContext, useState } from "react";
import { ApiContext } from "../../context/DataContext";
import { FaLocationDot } from "react-icons/fa6";
import './weather.css'

const Card = () => {
  const { iserror, isloading, maindata, subdata, data, toCelsius } =
    useContext(ApiContext);
  const [icon, seticon] = useState(
    `http://openweathermap.org/img/wn/${subdata?.icon}.png`
  );
  return isloading ? (
    <h3>Loading</h3>
  ) : (
    <div className={`weather`}>
      <img src={icon} alt="" />
      <div className="temp">
        <h3>{subdata.main}</h3>
        <h2>
          {toCelsius(maindata.temp)}
          °C 
        </h2>
        <h3>
          <FaLocationDot /> {data?.name}
        </h3>
      </div>
      <section className="details">

      </section>
    </div>
  );
};

export default Card;
