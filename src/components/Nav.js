import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavStyled =  styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:flex-start;
    width: 100%;
    margin-bottom: 16px;

    .routes{
        a{
        margin-right: 80px;
        font-size: 18px;
        }
    }

    p{
        font-size: 18px;
    }

`

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
