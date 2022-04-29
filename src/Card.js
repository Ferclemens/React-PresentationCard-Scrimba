//import React from "react"

import Info from "./components/info"
import AboutMe from "./components/about"
import Interests from "./components/interests"
import Footer from "./components/footer"

export default function Card() {
    return (
        <div className="card">
            <Info />
            <AboutMe />
            <Interests />
            <Footer />
        </div>
    )
}

