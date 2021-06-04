import React, {useContext} from 'react';
import Header from './../components/Header';
import {ThemeContext} from './../context/ThemeContext';
export default function Home({children}) {
    const {theme} = useContext(ThemeContext);
    console.log(theme)
    return (
        <div className={theme?'darkMode':'witheMode'}>
            <Header/>
            
            <div className="container">
                {children}
            </div>
        </div>
    )
}
