import React from 'react'

const Context= React.createContext(null);
export default function GeneralContext({children}) {
    return (
        <Context.Provider value={}>
            {children}
        </Context.Provider>
    )
}
