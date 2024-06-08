import React, { useContext, useRef } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { RiMoonClearFill } from "react-icons/ri";
import { ApiContext } from "./context/DataContext";
import Card from "./components/weather/Card";

const App = () => {
  const [isdark, setisdark] = useState(false);
  const [city, setcity] = useState('')
  const circleref = useRef(null);
  const {getWeatherData,showcard} = useContext(ApiContext)

  const toggleMode = () => {
    if (!isdark) {
      circleref.current.style.transform = "translateX(120%)";
    } else {
      circleref.current.style.transform = "translateX(0%)";
    }
    setisdark(!isdark);
  };
  return (
    <div
      className={`container ${isdark && "dark"}`}
      style={
        isdark
          ? { backgroundImage: "url(/night.jpg)" }
          : { backgroundImage: "url(/day.jpg)" }
      }
    >
      <nav>
        <div className="search-bar" style={isdark ? { color: "black" } : null}>
          <input
            type="text"
            placeholder="Enter City name"
            style={isdark ? { backgroundColor: "white", color: "black" } : null}
            value={city}
            onChange={(e)=> setcity(e.target.value)}
          />
          <FaSearch size="1.2rem" className="search-icon" onClick={getWeatherData}/>
        </div>
        <button onClick={toggleMode}>
          <div
            className="circle"
            style={isdark ? { backgroundColor: "white" } : null}
            ref={circleref}
          >
            {isdark?<RiMoonClearFill color="black" size="1.2rem"/>:<IoSunnySharp color="white" size="1.2rem"/>}
          </div>
        </button>
      </nav>
      {/* main data */}
      {showcard && <Card/>}
    </div>
  );
};

export default App;
