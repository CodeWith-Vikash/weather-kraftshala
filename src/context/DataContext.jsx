import { createContext, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const DataProvider = ({ children }) => {
    const [maindata, setmaindata] = useState({})
    const [subdata, setsubdata] = useState({})
    const [iserror, setiserror] = useState(false)
    const [isloading, setisloading] = useState(false)
    const [showcard, setshowcard] = useState(false)
    const [data, setdata] = useState({})
  const getWeatherData = async (city) => {
    setshowcard(true)
    setisloading(true)
    try {
        let res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=684a65db2cdadbfc122cdea4ff0a1395`
          );
          setmaindata(res.data.main)
          setsubdata(res.data.weather[0])
          setdata(res.data)
          console.log(res.data);
          setiserror(false)
          setisloading(false)
    } catch (error) {
        console.log(error);
        setiserror(true)
        setisloading(false)
    }
  };

  function toCelsius(kelvin) {
    const celsius =Math.round(kelvin-273.15);
    return celsius;
  }
  
  return <ApiContext.Provider value={{getWeatherData,maindata,subdata,iserror,isloading,data,showcard,toCelsius}}>{children}</ApiContext.Provider>;
};
