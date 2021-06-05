import React, {useState,useEffect, useContext} from 'react';
import {ThemeContext} from './../context/ThemeContext';
export default function Locations() {
    const [locations, setLocations] = useState([]);
    const {theme} = useContext(ThemeContext);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location')
        .then(response=>response.json())
        .then(locationsResult=> setLocations(locationsResult.results))
    }, [])
    
    return (
        <div className="characters">
            {/* <div className="simple-card">
                <div className="simple-card-header">
                    <h1>Name</h1>
                </div>
                <div className="simple-card-body">
                    <div>dimention</div>
                    <div>type</div>
                </div>
                <div className="simple-card-actions">
                    <button>
                        uwu
                    </button>
                </div>
            </div> */}
            {
                locations.map(location=>(
                    <div key={location.id} className={`character ${theme?"darkModeCard":""}`}>
                        {/* <img src={character.image} alt="" /> */}
                        <h3>{location.name}</h3>
                        <div className="focus-content">
                            <h1>{location.name}</h1>
                            <div className="info">
                                <p>Dimencion: {location.dimencion}</p>
                                <p>Type: {location.type}</p>
                                {/* <button onClick={()=>handleClick(character)}></button> */}
                            </div>
                                
                            
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )
}
