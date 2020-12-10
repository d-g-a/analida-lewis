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

    a{
        margin-right: 16px;
    }

`

function Nav() {
    return (
        <NavStyled>
            <div className="routes">
                <Link to="/about">About</Link>
                <Link to="/noticias">Noticias</Link>
                <Link to="/cotizacion">Cotización</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
            <div className="lang">
                <p>Es/En</p>
            </div>

        </NavStyled>
    )
}

export default Nav
