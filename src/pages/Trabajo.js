import React from 'react'
import styled from 'styled-components'

const TrabajoStyled = styled.div`
width: inherit;

h2{
    font-size: 24px;
    text-transform: uppercase;
    margin: 24px  0;
}

.artwork{
    display: flex;
    flex-direction: row;
    width: inherit;
    margin: 24px  0;

    .antes{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            margin-bottom: 8px;
        }
    }

    .despues{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            margin-bottom: 8px;
        }
    }
}

.description{
    margin: 24px  0;
}

.videoLink{
    margin: 16px  0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
`

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
