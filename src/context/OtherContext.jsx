import { createContext, useState } from "react";
import axios from 'axios'

export const OtherContext = createContext();

export const OtherProvider = ({ children }) => {
  const [isloading, setisloading] = useState(false);
  const [iserror, setiserror] = useState(false);
  const [locations, setlocations] = useState([]);

  // function to search data for multiple locations
  const searchOtherCities = async (city) => {
    setisloading(true);
    try {
      let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=69be2f9cc872629495b1bb499e2db3ec&units=metric`
      );
      setlocations((prev) => [res.data,...prev]);
      setiserror(false);
      setisloading(false);
    } catch (error) {
      console.log(error);
      setiserror(true);
      setisloading(false);
    }
  };

  return (
    <OtherContext.Provider value={{ searchOtherCities, locations,isloading,iserror }}>
      {children}
    </OtherContext.Provider>
  );
};
