import React, {useEffect,useState, useContext} from 'react';
import {useParams} from 'react-router-dom'
import {characterData} from './../utils/characterViewData';
import {ThemeContext} from './../context/ThemeContext'; 
export default function Character() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const {theme}  = useContext(ThemeContext);
    const paramas = useParams();
    useEffect(()=>{
        characterData(paramas.character).then(response=>{
            console.log(response)
            setData(response)
            setLoading(false)
        }).catch(e=>console.log(e))
    },[])
    if(loading){
        return(
            <div>
                cargando 
            </div>
        )
    }

    const {character, location ,origin , episode} = data
    return (
        <div className="grild-2">
            <section className="section">
                <div className="stiky-content">
                    <h1>{character.name}</h1>
                    <div className="avatar">
                        <img src={character.image} alt="" />
                    </div>

                    <div className="info-container">
                        <div className="info-item">
                            <span className="text-primary">Gender:</span>     <b>{character.gender}</b>
                        </div>
                        <div className="info-item">
                            <span className="text-primary">Species:</span>     <b>{character.species}</b>
                        </div>
                        <div className="info-item">
                            <span className="text-primary">Status:</span>     <b>{character.status}</b>
                        </div>
                         
                        {/* <span className="material-icons md-18">face</span> */}
                    </div>
                    
                </div>
            </section>
            
            <section className="scrolable-content">
                <article>
                    <h2 className="text-primary">Origin</h2>
                    <div className="info-container">
                        <div className="info-item">
                            <span className="text-primary">Name:</span>     <b>{origin.name}</b>
                        </div>
                        <div className="info-item">
                            <span className="text-primary">Dimension:</span>     <b>{origin.dimension}</b>
                        </div>
                        <div className="info-item">
                            <span className="text-primary">Type:</span>     <b>{origin.type}</b>
                        </div>
                    </div>
                </article>
                <article>
                    <h2 className="text-primary">Location</h2>
                    <div className="info-container">
                        <div className="info-item">
                            <span className="text-primary">Name:</span>     <b>{location.name}</b>
                        </div>
                        <div className="info-item">
                            <span className="text-primary">Dimension:</span>     <b>{location.dimension}</b>
                        </div>
                        <div className="info-item">
                            <span className="text-primary">Type:</span>     <b>{location.type}</b>
                        </div>
                    </div>
                </article>

                <article>
                    <h2 className="text-primary">Episodes</h2>
                    <div className="grild">

                    {
                        episode.map(episode=>(
                            <div key={episode.id} className={`simple-card ${theme?'darkModeCard':''}`}>
                                <div className="simple-card-header">
                                    <h3>{episode.name}</h3>
                                </div>
                                <div className="simple-card-body">
                                    <div>
                                        <div className="sub-title">Episode: <b>{episode.episode}</b></div>
                                        <div className="sub-title">Air Date: <b>{episode.air_date}</b> </div>
                                    </div>
                                    <button className={`btn ${theme?'btn-dark':''}`}>
                                        View
                                    </button>    
                                </div>
                                
                            </div>
                        ))
                    }
                    </div>
                </article>
                
               
            </section>
        </div>
    )
}
