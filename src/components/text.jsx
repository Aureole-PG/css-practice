import React from 'react'

export function Text({dark, text}) {
    return (
        
        <div className={`text-primary ${dark?'text-primary-dark':''}`}>
            {text}
        </div>
    )
}
