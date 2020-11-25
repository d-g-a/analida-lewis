import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavStyled =  styled.nav`
display: flex;
flex-direction: row;

`

function Nav() {
    return (
        <NavStyled>
            <Link to="/about">About</Link>
            <Link to="/noticias">Noticias</Link>
            <Link to="/cotizacion">Cotización</Link>
            <Link to="/contacto">Contacto</Link>
            
        </NavStyled>
    )
}

export default Nav
