import React, { useContext, useRef } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { RiMoonClearFill } from "react-icons/ri";
import { ApiContext } from "./context/DataContext";
import Card from "./components/weather/Card";
import Others from "./components/OtherLocations/Others";

const App = () => {
  const [city, setcity] = useState('')
  const circleref = useRef(null);
  const {getWeatherData,showcard,isdark,toggleMode} = useContext(ApiContext)


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
        
        {/* search bar */}
        <div className="search-bar" style={isdark ? { color: "black" } : null}>
          <input
            type="text"
            autoFocus
            placeholder="Enter City name"
            style={isdark ? { backgroundColor: "white", color: "black" } : null}
            value={city}
            onChange={(e)=> setcity(e.target.value)}
            onKeyDown={(e)=> e.key=='Enter' && getWeatherData(city)}
          />
          <FaSearch size="1.2rem" className="search-icon" onClick={()=> getWeatherData(city)}/>
        </div>

        {/* dark mode toggle button */}
        <button onClick={()=> toggleMode(circleref)}>
          <div
            className="circle"
            style={isdark ? { backgroundColor: "white" } : null}
            ref={circleref}
          >
            {isdark?<RiMoonClearFill color="black" size="1.2rem"/>:<IoSunnySharp color="white" size="1.2rem"/>}
          </div>
        </button>
      </nav>

      <main>
        {/* weather card */}
      {showcard && <Card/>}
      {/* search for other locations */}
      {showcard && <Others/>}
      </main>
    </div>
  );
};

export default App;
