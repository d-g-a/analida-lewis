import React from 'react'
import { Link } from 'react-router-dom'
import NoticiasStyled from './Noticias.styles'

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