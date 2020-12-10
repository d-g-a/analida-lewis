import React from 'react'
import styled from "styled-components"

const FooterStyled =  styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 16px;
`

function Footer() {
    return (
        <FooterStyled>
            <p>Instagram</p>
        </FooterStyled>
    )
}

export default Footer
