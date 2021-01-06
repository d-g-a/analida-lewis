import React from 'react'
import TrabajoStyled from './Trabajo.styles'

function Trabajo() {
    return (
        <TrabajoStyled>
            <h2>Título de la obra</h2>
            <div className="artwork">
                <div className="antes">
                    <img src="https://res.cloudinary.com/dieglitter/image/upload/v1607638716/taby/image_1_qvto6n.jpg" alt=""/>
                    <p>Antes</p>

                </div>
                <div className="despues">
                <img src="https://res.cloudinary.com/dieglitter/image/upload/v1607638716/taby/image_2_xxv8xy.jpg" alt=""/>
                    <p>Después</p>
                </div>
            </div>
            <div className="description">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="videoLink">
                <p>
                    Para ver video <a href="/">aquí</a>
                </p>
            </div>
            <hr/>  
            <h2>Título de la obra</h2>
            <div className="artwork">
                <div className="antes">
                    <img src="https://res.cloudinary.com/dieglitter/image/upload/v1607638716/taby/image_1_qvto6n.jpg" alt=""/>
                    <p>Antes</p>

                </div>
                <div className="despues">
                <img src="https://res.cloudinary.com/dieglitter/image/upload/v1607638716/taby/image_2_xxv8xy.jpg" alt=""/>
                    <p>Después</p>
                </div>
            </div>
            <div className="description">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="videoLink">
                <p>
                    Para ver video <a href="/">aquí</a>
                </p>
            </div>
            <hr/>   
        </TrabajoStyled>
    )
}

export default Trabajo
