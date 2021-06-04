import React,{useContext} from 'react'
import {ThemeContext} from './../context/ThemeContext'
export default function Header() {
    const {theme, setTheme} = useContext(ThemeContext) 
    const handleActive=()=>{
        setTheme(!theme)
    }
    
    return (
        <nav className={theme?'darkMode': 'witheMode'}>
            <div>
                <button onClick={handleActive}>{theme?'Dark mode active': 'Active darkMode?'}</button>
            </div>
            <div>
                more data
            </div>
        </nav>
        
    )
}
