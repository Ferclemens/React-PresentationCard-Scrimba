//import React from "react"

//Info / Información
export default function Info() {
    return (
        <div>
            <div className="photo">
            <image src="images/photo.png" alt="Perfil photo"/>
            </div>
            <div className="info--container">
                <h1>Clemens Fernando Oscar</h1>
                <h3>Web Developer</h3>
                <p>React - Javascript - Python</p>
            </div>
            <div className="buttons">
                <button className="btn--linkedin">LinkedIn</button>
                <button className="btn--email">Email</button>
            </div>
        </div>
    )
}

