import React, {useState,useEffect, useContext} from 'react';
import {ThemeContext} from './../context/ThemeContext';
export default function Locations() {
    const [locations, setLocations] = useState([]);
    const {theme} = useContext(ThemeContext);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location')
        .then(response=>response.json())
        .then(locationsResult=> {setLocations(locationsResult.results); console.log(locationsResult.results)})
    }, [])
    
    return (
        <div className="grild">
            
            {
                locations.map(location=>(
                    <div key={location.id} className={`simple-card ${theme?'darkModeCard':''}`}>
                        <div className="simple-card-header">
                            <h3>{location.name}</h3>
                        </div>
                        <div className="simple-card-body">
                            <div>
                                <div className="sub-title">Dimention <b>{location.dimension}</b></div>
                                <div className="sub-title">Type: <b>{location.type}</b> </div>
                            </div>
                            <button className={`btn ${theme?'btn-dark':''}`}>
                                View
                            </button>    
                        </div>
                        
                    </div>
                    
                ))
            }
        </div>
    )
}
