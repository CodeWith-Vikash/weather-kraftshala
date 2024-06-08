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
      console.log(res.data);
      setiserror(false);
      setisloading(false);
    } catch (error) {
      console.log(error);
      setiserror(true);
      setisloading(false);
    }
  };

  function getLocalDateTime(unixTimestamp, timezoneOffset) {
    const dateTimeMillis = (unixTimestamp + timezoneOffset) * 1000;
    const localDateTime = new Date(dateTimeMillis);

    const formattedDate = localDateTime.toISOString().slice(0, 10);
    const formattedTime = localDateTime.toISOString().slice(11, 19);

    return {
      date: formattedDate,
      time: formattedTime,
    };
  }


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
        setisdark
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
