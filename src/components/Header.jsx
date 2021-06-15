import React,{useContext} from 'react';
import {ThemeContext} from './../context/ThemeContext';
import {Link} from 'react-router-dom';
export default function Header() {
    const {theme, setTheme} = useContext(ThemeContext); 
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
            <div className="switch-container">
                Dark mode
                <>
                <input checked={theme} onChange={handleActive} type="checkbox" id="toggle" class="offscreen" />
                <label for="toggle" class="switch"></label>
                </>
                
            </div>
        </nav>
        
    )
}
