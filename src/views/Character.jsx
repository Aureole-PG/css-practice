import React, {useEffect,useState, useContext} from 'react';
import {useParams} from 'react-router-dom'
import {characterData} from './../utils/characterViewData';
import {ThemeContext} from './../context/ThemeContext'; 
import {Text} from './../components/text';
import {SimpleCard, ArticleCard} from './../components/cards'
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
    },[loading])
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
                    {/* <div className="info-container">
                        <div className="info-item">
                            <span className="material-icons md-18">chevron_left</span>
                            <span className="material-icons md-18">chevron_right</span>
                        </div>
                    </div> */}
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
                                    <button  className={`btn ${theme?'btn-dark':''}`}>
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
