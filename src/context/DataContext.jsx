import { createContext, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const DataProvider = ({ children }) => {
  const [maindata, setmaindata] = useState({});
  const [subdata, setsubdata] = useState({});
  const [iserror, setiserror] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [isdark, setisdark] = useState(false);
  const [showcard, setshowcard] = useState(false);
  const [data, setdata] = useState({});

  // Fetching data from openweathrmap api
  const getWeatherData = async (city) => {
    setshowcard(true);
    setisloading(true);
    try {
      let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=69be2f9cc872629495b1bb499e2db3ec&units=metric`
      );
      setmaindata(res.data.main);
      setsubdata(res.data.weather[0]);
      setdata(res.data);
      setiserror(false);
      setisloading(false);
    } catch (error) {
      console.log(error);
      setiserror(true);
      setisloading(false);
    }
  };
  
  // Function to convert timestamp in to date and time string
  function getLocalDateTime(timestamp) {
     const date = new Date(timestamp*1000)
     return {
       date:date.toDateString(),
       time:date.toLocaleTimeString()
     }
  }

  // Function to toggle dark mode
  const toggleMode = (circleref) => {
    if (!isdark) {
      circleref.current.style.transform = "translateX(120%)";
    } else {
      circleref.current.style.transform = "translateX(0%)";
    }
    setisdark(!isdark);
  };


  return (
    <ApiContext.Provider
      value={{
        getWeatherData,
        maindata,
        subdata,
        iserror,
        isloading,
        data,
        showcard,
        getLocalDateTime,
        isdark,
        toggleMode
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
