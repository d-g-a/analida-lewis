import React from 'react'
import {Link} from 'react-router-dom'
import NavStyled from './Nav.styles'


function Nav() {
    return (
        <NavStyled>
            <div className="routes">
                <Link to="/about">About</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/trabajo">Trabajo</Link>
                <Link to="/noticias">Noticias</Link>
                <Link to="/prensa">Prensa</Link>
            </div>
            <div className="lang">
                <p>ES/EN</p>
            </div>

        </NavStyled>
    )
}

export default Nav
