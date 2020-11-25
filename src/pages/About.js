import React from 'react'
import styled from 'styled-components'

const AboutStyled = styled.div`
display: flex;
flex-direction: row;
background-color: red;
color: white;
height: 75vh;
width: 75vw;
`

function About() {
    return (
        <AboutStyled>
           <h1>Hola me llamo Analida</h1>
            <h2>Soy Restauradora de Arte</h2>
        </AboutStyled>
    )
}

export default About
