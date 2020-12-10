import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NoticiasStyled = styled.div`
    width: inherit;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .noticiaCard{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 360px;
        height: 240px;
        border: 1px solid black;
        padding: 4px;
        margin: 16px;
        background-image: url("https://aconstellationjournal.com/wp-content/uploads/2015/03/aconstellation-meetthegirl-analida7.jpg");
        background-repeat: no-repeat;
        background-size: cover;

        p{
            font-size: 20px;
            margin-bottom: 16px;
            color: white;
            text-transform: uppercase;

        }

        button{
            background-color: transparent;
            color: white;
            border: 1px solid white;
            padding: 10px 20px;

                }
    }


`

function Noticias() {
    return (
        <NoticiasStyled>
            <div className="noticiaCard">
                <p>
                    Meet The Girl: Analida
                </p>
                <button>
                     <Link to="/noticia">LEER</Link>
                </button>
            </div>
            <div className="noticiaCard">
                <p>
                    Meet The Girl: Analida
                </p>
                <button>
                     <Link to="/noticia">LEER</Link>
                </button>
            </div>
            <div className="noticiaCard">
                <p>
                    Meet The Girl: Analida
                </p>
                <button>
                     <Link to="/noticia">LEER</Link>
                </button>
            </div>
            <div className="noticiaCard">
                <p>
                    Meet The Girl: Analida
                </p>
                <button>
                    <Link to="/noticia">LEER</Link>
                </button>
            </div>
            
            
        </NoticiasStyled>
    )
}

export default Noticias
