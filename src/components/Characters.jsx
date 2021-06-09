import React,{useState, useEffect, useReducer, useMemo, useContext} from 'react'
import {ThemeContext} from './../context/ThemeContext';
import {useHistory} from 'react-router-dom';
export default function Characters() {
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState("");
    const {theme} = useContext(ThemeContext);
    const initialState = {
        favorites: []
    };
    const history = useHistory();
    const goToCaracter=(id)=>{
        history.push('caracters/'+id)
    }

    const favoriteReducer = (state, action) =>{
        switch (action.type) {
            case 'ADD_TO_FAVORITE':
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                }   
            default:
                return state
        }
    }
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
    

    
    const handleClick=(favorite)=>{
        dispatch({type:'ADD_TO_FAVORITE', payload: favorite})
    }
    const filteredUsers = useMemo(()=>
        characters.filter(user=>{
            return user.name.toLowerCase().includes(search.toLowerCase())
        }),[characters, search]) 
    // const filteredUsers=characters.filter(user=>{
    //     return user.name.toLowerCase().includes(search.toLowerCase())
    // })

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(response=> response.json())
        .then(data => {setCharacters(data.results)})
    },[])
    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }
    return (
        <div className="grild">
            {/* <div>
                <input type="text" value={search} onChange={handleSearch} />
            </div> */}
            {
                favorites.favorites.map(character=>(
                    <div key={character.id}>
                        <h1>{character.name}</h1>
                    </div>
                ))
            }
            {
                filteredUsers.map(character=>(
                    <div key={character.id} className={`character ${theme?"darkModeCard":""}`}>
                        <img src={character.image} alt="" />
                        <h3>{character.name}</h3>
                        <div className="focus-content">
                            <h1>{character.name}</h1>
                            <div className="info">
                                <p>Specie: {character.species}</p>
                                <p>Gender: {character.gender}</p>
                                <p>Status: {character.status}</p>
                                <p>Location: {character.location.name}</p>
                                <button className={`btn ${theme?'btn-dark':''}`} onClick={()=>goToCaracter(character.id)}>More</button>
                            </div>
                                
                            
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )
}
