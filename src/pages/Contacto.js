import React from 'react'
import styled from 'styled-components'

const ContactoStyled = styled.div`
width: inherit;
display: flex;
flex-direction: row;
height: 640px;
margin-top: 16px;

.info{
    width: 50%;

    h3{
        text-transform: uppercase;
        margin-bottom: 16px;
    }
    p{
        font-size: 20px;
    }

}

.pic {
    width: 50%;
    display: flex;
    justify-content: flex-end;

    img{
        object-fit: cover;
        width: 100%;
    } 
}
`

function Contacto() {
    return (
        <ContactoStyled>

            <div className="info">
                <h3>Contacto</h3>
                <p>Si requieres una cotización manda un correo a:</p>
                <p>Email</p>
                <p>Tel</p>
                
            </div>

            <div className="pic">
                <img src="https://michellewassall.com/uploads/3/4/5/2/34520601/1dscn3858mw-2_orig.jpg" alt=""/>
            </div>
                      
        </ContactoStyled>
    )
}

export default Contacto
