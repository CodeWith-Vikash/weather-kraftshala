import React, { useContext, useState } from "react";
import { ApiContext } from "../../context/DataContext";
import { FaLocationDot } from "react-icons/fa6";
import Skeleton from '../loading/Skeleton'
import './weather.css'

const Card = () => {
  const { iserror, isloading, maindata, subdata, data,getLocalDateTime,isdark} =
    useContext(ApiContext);
    const icon=`http://openweathermap.org/img/wn/${subdata?.icon}.png`
  return isloading ? (
    <Skeleton/>
  ) : iserror?<p className="error">Something went wrong</p>:(
    <div className={`weather`} style={isdark?{backgroundColor:'rgb(9, 9, 9,0.2)'}:null}>
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
