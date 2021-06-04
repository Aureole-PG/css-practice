import React, {useState} from 'react'
export const ThemeContext = React.createContext(null)
export default function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState(false)
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

