import React from 'react'
import styled from 'styled-components'
import {Link} from  'react-router-dom'

const NoticiaStyled = styled.div`

width: inherit;
margin: 16px 0%;

.atras{
    font-size: 20px;
}

.newscard{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 16px 0;

    .image{
        width: 50%;

        img{
            width: 100%;
            object-fit: cover;
        }
    }

    .info{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 50%;
        height: 300px;
        padding-left: 16px;

        h3{
            font-size: 24px;
            text-transform: uppercase;
            margin-bottom: 16px;
        }

        a{
             margin-bottom: 16px;
        }
    }
}



`

function Noticia() {
    return (
        <NoticiaStyled>
            <Link to="/noticias" className="atras">ATRÁS</Link>  
            <div className="newscard">
                <div className="image">
                    <img src="https://aconstellationjournal.com/wp-content/uploads/2015/03/aconstellation-meetthegirl-analida7.jpg" alt="analida lewis"/>


                </div>

                <div className="info">
                    <h3>Meet The Girl: Analida</h3>

                    <a href="https://aconstellationjournal.com/2015/03/meet-the-girl-analida/">Lee el artículo</a>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>

                </div>
            </div>       
        </NoticiaStyled>
    )
}

export default Noticia
