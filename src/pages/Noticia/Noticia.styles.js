import styled from 'styled-components';

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

export default NoticiaStyled