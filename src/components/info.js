
import React from 'react'
import photo from '../images/photoed.png'
import linkedin from '../images/linkedin2.png'
import mail from '../images/mail.png'

//Info / Información
export default function Info() {
    return (
        <div className="info--container">
            <div>
                <img className="photo" src={photo} alt="Perfil photo"/>
                <h1 className="name">Clemens Fernando Oscar</h1>
                <h3 className="profesion">Web Developer</h3>
                <p className="skills">React - Javascript - Python</p>
            </div>
            <div className="buttons">
                <button className="btn--linkedin"><img className="logo--linkedin" src={linkedin}/><a className="linkedin" href='https://www.linkedin.com/in/foclemens/'>Linkedin</a></button>
                <button className="btn--email"><img className="logo--mail" src={mail}/><span className="mail">Email</span></button>
            </div>
        </div>
    )
}

