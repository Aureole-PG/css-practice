import React,{useState} from 'react'

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    
    const handleActive=()=>{
        setDarkMode(!darkMode)
    }
    
    return (
        <nav>
            <div>
                <button onClick={handleActive}>{darkMode?'Dark mode active': 'Active darkMode?'}</button>
            </div>
            <div>
                more data
            </div>
        </nav>
        
    )
}
