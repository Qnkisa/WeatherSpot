import React from "react"

export default function Footer(){
    return (
        <footer>
            <div className="footer-top">
                <div className="nav-logo">
                    <img src="/website-logo.png" alt="" />
                    <p>WeatherSpot</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>@ 2023 WeatherSpot</p>
                <span>All rights reserved.</span>
            </div>
        </footer>
    )
}