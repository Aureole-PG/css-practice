import React, {useEffect,useState, useContext} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {characterData} from './../utils/characterViewData';
import {ThemeContext} from './../context/ThemeContext'; 
import {SimpleCard, ArticleCard} from './../components/cards';
export default function Character() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {theme}  = useContext(ThemeContext);
    const history = useHistory();
    const paramas = useParams();
    const goToLocation = (id)=>{
        history.push('/locations/'+id)
    }
    useEffect(()=>{
        characterData(paramas.character).then(response=>{
            setData(response)
            setLoading(false)
        }).catch(()=>setError(true))
    },[])
    if(loading){
        return(
            <div>
                cargando 
            </div>
        )
    }
    if (error) {
        return(
            <div>
                error
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
                    <ArticleCard 
                        dark={theme} 
                        data={
                            [
                                {title: 'Gender: ', info: character.gender},
                                {title: 'Species : ', info: character.species},
                                {title: 'Status: ', info: character.status}
                            ]
                        }
                    />
                </div>
            </section>
            
            <section className="scrolable-content">
                <ArticleCard 
                    dark={theme} 
                    title="Origin" 
                    data={
                        [
                            {title: 'Name: ', info: origin.name},
                            {title: 'Dimension : ', info: origin.dimension},
                            {title: 'Type: ', info: origin.type}
                        ]
                    }
                />

                <ArticleCard 
                    dark={theme} 
                    title="Location" 
                    data={
                        [
                            {title: 'Name: ', info: location.name},
                            {title: 'Dimension : ', info: location.dimension},
                            {title: 'Type: ', info: location.type}
                        ]
                    }
                />
                
                <ArticleCard dark={theme} title="Episodes">
                    <div className="grild">
                    {
                        episode.map(episode=>(
                            <SimpleCard 
                                key={episode.id}
                                dark={theme}
                                title={episode.name}
                                info={[
                                    {title: 'Episode:', info: episode.episode},
                                    {title: 'Air Date', info: episode.air_date}
                                ]}
                                actions={
                                    (
                                    <button onClick={()=>goToLocation(episode.id)}  className={`btn ${theme?'btn-dark':''}`}>
                                        more
                                    </button>
                                    )
                                }
                            />
                        ))
                    }
                    </div>
                </ArticleCard>
                
               
            </section>
        </div>
    )
}
