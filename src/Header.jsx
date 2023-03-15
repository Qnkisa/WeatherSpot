import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Header(){
    const [active,setActive] = useState(false)

    function handleClick(){
        setActive(prevValue => !prevValue)
    }

    return (
        <nav>
            <div className="nav-logo">
                <img src="/website-logo.png" alt="" />
                <p>WeatherSpot</p>
            </div>
            <ul className={active ? "active menu" : "menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/api">API</Link>
                </li>
            </ul>
                <div className={active ? "hamburger active" : "hamburger"} id="hamburger" onClick={handleClick}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </div>
      </nav>
    )
    
}