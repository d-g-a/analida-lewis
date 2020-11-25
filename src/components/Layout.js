import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Footer from './Footer'
import Nav from "./Nav"

const LayoutStyles = styled.div`
margin: 80px  240px 120px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

a{
    color: black;
}
`

function Layout(props) {
    return (
        <LayoutStyles>
            <Link to="/"><h1>ANALIDA LEWIS</h1></Link>
            <hr/>
            <Nav/>
            <p>{props.children}</p>
            <Footer/>
        </LayoutStyles>
    )
}

export default Layout
