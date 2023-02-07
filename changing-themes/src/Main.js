import React, { useContext } from "react"
import {ThemeContext} from "./themeContext"
import "./App.css"

function Main(props){
    const { theme, toggleTheme } = useContext(ThemeContext)
    return(
        <main className={`${theme}-theme`}>
            <h1>Click the button! And Sell your SOUL!</h1>
            <button onClick={toggleTheme}>{theme === "light" ? "dark" : "light"}SOUL</button>
        </main>
    )
}

export default Main