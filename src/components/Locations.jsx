import React, {useState,useEffect} from 'react'

export default function Locations() {
    const [locations, setLocations] = useState([])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location')
        .then(response=>response.json())
        .then(locations=> console.log(locations))
    }, [])
    
    return (
        <div>
            UwU
        </div>
    )
}
