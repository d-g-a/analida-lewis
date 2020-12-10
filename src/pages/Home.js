import React from 'react'
import styled from 'styled-components'

const HomeStyled = styled.div`
width: inherit;
/* border: 1px solid black; */
height: 640px;

img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
`

function Home() {
    return (
        <HomeStyled>
            <img src="https://www.descubrirelarte.es/wp-content/uploads/2018/09/abrir-ICARO.jpg" alt="Matisse"/>
        </HomeStyled>
    )
}

export default Home
