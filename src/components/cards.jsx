import React from 'react'
import PropTypes from 'prop-types';
import {Text} from './text'
function SimpleCard({dark,title, info, actions, children}) {
    return (
        <div className={`simple-card ${dark?'darkModeCard':''}`}>
            {title?(
                <div className="simple-card-header">
                    <h3>{title}</h3>
                </div>
            ):null}
            {
                info?(
                    <div className="simple-card-body">

                        <div>
                           { info.map((e, index)=>(
                                <div key={index} className="sub-title">{e.title}: <b>{e.info}</b></div>
                            ))}
                            
                            {/* <div className="sub-title">Air Date: <b>{episode.air_date}</b> </div> */}
                        </div>
                            
                    </div>
                ):null
            }
            {actions?(
                <div className="card-actions">
                    {actions}
                </div>
                
            ):null}
            {children}
            
        </div>
    )
}

SimpleCard.propTypes={
    dark: PropTypes.bool,
    title: PropTypes.string,
    actions: PropTypes.node,
    info: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        info: PropTypes.string
    }))

}


function ArticleCard({title, dark, data, children}) {
    return(
        <article>
            {title?(
                <h2 className={`text-primary ${dark?'text-primary-dark':''}`}>{title}</h2>
            ):null
            }
            
            <div className="info-container">
                {data?(
                    data.map((e, index)=>(
                        <div key={index} className="info-item">
                                <Text dark={dark} text={e.title}/>    <b>{e.info}</b>     
                        </div>
                    ))
                ):null}
                {children}
                
            </div>
        </article>
    )
}
ArticleCard.propTypes={
    title: PropTypes.string,
    dark: PropTypes.bool,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string, info: PropTypes.string
        })
    )
}

export {SimpleCard, ArticleCard}