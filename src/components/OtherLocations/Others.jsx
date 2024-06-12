import React, { useContext, useState } from 'react'
import './Others.css'
import { FaSearch } from "react-icons/fa";
import {ApiContext} from '../../context/DataContext'
import OtherCard from '../weather/OtherCard'
import { OtherContext } from '../../context/OtherContext';

const Others = () => {
    const [city, setcity] = useState('')
    const {isdark} = useContext(ApiContext)
    const {searchOtherCities,locations} = useContext(OtherContext)
    console.log(locations);
  return (
    <div className='others'>
        <div className="search-bar" style={isdark ? { color: "black" } : null}>
          <input
            type="text"
            autoFocus
            placeholder="Search for another cities"
            style={isdark ? { backgroundColor: "white", color: "black" } : null}
            value={city}
            onChange={(e)=> setcity(e.target.value)}
            onKeyDown={(e)=> e.key=='Enter' && searchOtherCities(city)}
          />
          <FaSearch size="1.2rem" className="search-icon" onClick={()=> searchOtherCities(city)}/>
        </div>

        <div className="cards">
            {locations.map((data,index)=>{
                return <OtherCard data={data} key={index}/>
            })}
        </div>
    </div>
  )
}

export default Others