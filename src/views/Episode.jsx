import React,{useContext, useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {ThemeContext} from './../context/ThemeContext'; 
import {ArticleCard} from './../components/cards';
import {episodeData} from './../utils/episodeViewData';
export default function Episode() {
    const {theme} = useContext(ThemeContext);
    const params = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState({});
    useEffect(() => {
        episodeData(params.episode).then(e=>{
            setData(e)
            setLoading(false)
        }).catch(()=>setError(true))
    }, [loading])
    const goToCaracter=(id)=>{
        history.push('/caracters/'+id)
    }
    if (loading) {
        return (
            <div>
                cargando 
            </div>
        )
    }
    if(error){
        return(
            <div>
                error
            </div>
        )
    }
    const {episode, characters} = data;
    return (
        <div >
            <div className="center-content">
                <div className="single-container">
                <ArticleCard 
                    title={episode.name}  
                    dark={theme}
                    data={[
                        {title: "Episode", info: episode.episode},
                        {title: "Air Date", info: episode.air_date},
                        {title: "Characters", info: episode.characters.length.toString()},
                    ]}
                />
                </div>
                
            </div>
            
            <ArticleCard title="Characters" dark={theme}>
                <div className="grild">
                {
                characters.map(character=>(
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
            </ArticleCard>
            
        </div>
    )
}
