import React,{useContext} from 'react';
import useApiList from '../utils/Api';
import {ThemeContext} from './../context/ThemeContext';

export default function Episodes() {
    const {theme} = useContext(ThemeContext)
    const episodes = useApiList('episode');
    console.log(episodes);
    return (
        <div className="grild">
            {
                episodes.map(episode=>(
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
    )
}
