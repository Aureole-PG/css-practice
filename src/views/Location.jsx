import React,{useState, useContext, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {ThemeContext} from './../context/ThemeContext'; 
import {ArticleCard} from './../components/cards';
import {locationData} from './../utils/locationViewData';

export default function Location() {
    const {theme} = useContext(ThemeContext);
    const params = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState({});

    const goToCaracter = (id) =>{
        history.push('/caracters/'+id)
    }

    useEffect(()=>{
        locationData(params.location).then(e=>{
            setData(e);
            setLoading(false);
        }).catch(()=>setError(true))
    },[])


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
    const {location, residents} = data;
    return (
        <div >
            <div className="center-content">
                <div className="single-container">
                <ArticleCard 
                    title={location.name}  
                    dark={theme}
                    data={[
                        {title: "Type", info: location.type},
                        {title: "Dimension", info: location.dimension},
                        {title: "Residents", info: location.residents.length.toString()},
                    ]}
                />
                </div>
                
            </div>
            
            <ArticleCard title="Residents" dark={theme}>
                <div className="grild">
                {
                residents.map(character=>(
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
