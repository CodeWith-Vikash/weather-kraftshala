import React, { useContext} from "react";
import { ApiContext } from "../../context/DataContext";
import { FaLocationDot } from "react-icons/fa6";
import Skeleton from "../loading/Skeleton";
import "./weather.css";

const Card = () => {
  // Destructuring context api object
  const {
    iserror,
    isloading,
    maindata,
    subdata,
    data,
    getLocalDateTime,
    isdark,
  } = useContext(ApiContext);

  // Getting image source from weather icon code
  const icon = `http://openweathermap.org/img/wn/${subdata?.icon}.png`;
  
  // getting current date and time from timestamp
  const { date, time } = getLocalDateTime(data.dt);

  return isloading ? (
    <Skeleton />
  ) : iserror ? (
      <img src="/error.png" alt="something went wrong" className="errorimg"/>
  ) : (
    <div
      className={`weather`}
      style={isdark ? { backgroundColor: "rgb(9, 9, 9,0.2)" } : null}
    >
      <img src={icon} alt="" />
      <div className="temp">
        <h3>{subdata.main}</h3>
        <h2>
          {Math.round(maindata.temp)}
          °C
        </h2>
        <h3>
          <FaLocationDot /> {data?.name}
        </h3>
        <h5>
          {date} || {time}
        </h5>
      </div>
      <section className="details">
        <div className="detail">
          <p>Humidity</p>
          <p>{maindata.humidity}%</p>
        </div>

        <div className="detail">
          <p>Feels Like</p>
          <p>{Math.round(maindata.feels_like)}°C </p>
        </div>
      </section>
    </div>
  );
};

export default Card;
