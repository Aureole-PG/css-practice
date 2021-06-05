import React,{useContext} from 'react';
import {ThemeContext} from './../context/ThemeContext';
import {Link} from 'react-router-dom';
export default function Header() {
    const {theme, setTheme} = useContext(ThemeContext) 
    const handleActive=()=>{
        setTheme(!theme)
    }
    
    return (
        <nav className={`hover-nav ${theme?'darkMode': 'witheMode'}` }>
            <ul>
                <li><Link to="/">Character</Link></li>
                <li><Link to="/locations">Locations</Link></li>
                <li><Link to="/episodes">Episode</Link></li>
            </ul>
            <div>
                <button onClick={handleActive}>{theme?'Dark mode active': 'Active darkMode?'}</button>
            </div>
        </nav>
        
    )
}
