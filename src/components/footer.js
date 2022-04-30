import React from "react"
import facebook from '../images/facebook.png'
import twiter from '../images/twiter.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'

//Footer / Pie de página
export default function Footer() {
    return (
        <div className="footer--icons">
            <div>
            <a className="link--facebook" href='#'><img className="logo--facebook" src={facebook}/></a>
            <a className="link--twiter" href='https://twitter.com/FerClemens'><img className="logo--twiter" src={twiter}/></a>
            <a className="link--instagram" href='https://www.instagram.com/ferclemens/'><img className="logo--instagram" src={instagram}/></a>
            <a className="link--github" href='https://github.com/Ferclemens'><img className="logo--github" src={github}/></a>
            </div>
        </div>
    )
}