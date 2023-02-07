import React, { useContext } from "react"
import { ThemeContext } from "./themeContext"
import "./App.css"

function Footer(props){
    const { theme } = useContext(ThemeContext)
    return(
        <div className={`${theme}-theme`}>
        <footer>
            <h1>Your {theme === "light" ? "dark" : "light"} Soul Is Mine</h1>
        </footer>
        </div>
    )
}

export default Footer