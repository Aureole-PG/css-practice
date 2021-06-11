import React, {useContext} from 'react';
import {ThemeContext} from './../context/ThemeContext';
import {SimpleCard} from './../components/cards';
import useApiList from './../utils/Api';
import {useHistory} from 'react-router-dom';
export default function Locations() {
    const locations = useApiList('location');
    const {theme} = useContext(ThemeContext);
    const history = useHistory();
    const goToLocation = (id)=>{
        history.push('/locations/'+id)
    }
    return (
        <div className="grild">
            
            {
                locations.map(location=>(
                    <SimpleCard
                        key={location.id}
                        dark={theme}
                        title={location.name}
                        info={[
                            {title: 'Dimension', info: location.dimension},
                            {title: 'Type', info: location.type}
                        ]}
                        actions={
                            <button onClick={()=>goToLocation(location.id)} className={`btn ${theme?'btn-dark':''}`}>
                                View
                            </button>
                        }
                    />
                    
                ))
            }
        </div>
    )
}
