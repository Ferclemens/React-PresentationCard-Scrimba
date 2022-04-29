
import React from 'react'
import photo from '../images/photo.png'

//Info / Información
export default function Info() {
    return (
        <div className="component--container">
            <div>
                <img className="photo" src={photo} alt="Perfil photo"/>
                <h1 className="name">Clemens Fernando Oscar</h1>
                <h3 className="profesion">Web Developer</h3>
                <p className="skills">React - Javascript - Python</p>
            </div>
            <div className="buttons">
                <button className="btn--linkedin">LinkedIn</button>
                <button className="btn--email">Email</button>
            </div>
        </div>
    )
}

