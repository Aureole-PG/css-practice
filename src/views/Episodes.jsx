import React,{useContext} from 'react';
import useApiList from '../utils/Api';
import {ThemeContext} from './../context/ThemeContext';
import {SimpleCard} from './../components/cards';
import {useHistory} from 'react-router-dom';
export default function Episodes() {
    const {theme} = useContext(ThemeContext);
    const episodes = useApiList('episode');
    const history = useHistory();
    const goToEpisode=(id)=>{
        history.push('episodes/'+id)
    }
    return (
        <div className="grild">
            {
                episodes.map(episode=>(
                    <SimpleCard 
                        key={episode.id}
                        title={episode.name}
                        dark={theme}
                        info={[
                            {title: 'Episode', info: episode.episode},
                            {title: 'Air date', info: episode.air_date},
                        ]}
                        actions={
                            <button onClick={()=>goToEpisode(episode.id)} className={`btn ${theme?'btn-dark':''}`}>
                                View
                            </button> 
                        }
                    />
                ))
            }
        </div>
    )
}
