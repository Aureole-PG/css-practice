import React,{useState} from 'react'

export const Context= React.createContext(null);


export default function GeneralContext({children}) {
    const [data, setData] = useState({
        character: null,
        episode: null,
        location: null
    })
    return (
        <Context.Provider value={{data, setData}}>
            {children}
        </Context.Provider>
    )
}
