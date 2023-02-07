import React, { useContext } from "react"
import { ThemeContext } from "./themeContext"
import "./App.css"


function NavBar(props){
    const { theme } = useContext(ThemeContext)
    return(
<div className={`${theme}-theme`}>
    <nav >
    <div className="a">Home</div>
    <div className="b">About</div>
    <div className="c">Contact</div>
    </nav>
</div>
    )
}

export default NavBar