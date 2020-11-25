import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HomeStyled = styled.div`

background-color: blue;
`

function Home() {
    return (
        <HomeStyled>
            <h1>This is home </h1>
            <Link to="/about">About</Link>
            <h2>I wanna go home</h2>
        </HomeStyled>
    )
}

export default Home
