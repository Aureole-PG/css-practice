import React,{useState, useEffect} from 'react'

export default function Characters() {
    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(response=> response.json())
        .then(data => {setCharacters(data.results); console.log(data.results)})
    },[])

    return (
        <div className="characters">
            {
                characters.map(character=>(
                    <div key={character.id} className="character">
                        <img src={character.image} alt="" />
                        <h3>{character.name}</h3>
                        <div className="focus-content">
                            <h1>{character.name}</h1>
                            <div className="info">
                                <p>Specie: {character.species}</p>
                                <p>Gender: {character.gender}</p>
                                <p>Status: {character.status}</p>
                                <p>Location: {character.location.name}</p>
                            </div>
                                
                            
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )
}
