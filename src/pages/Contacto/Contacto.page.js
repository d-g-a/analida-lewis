import React from 'react'
import ContactoStyled from './Contacto.styles'

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