import styled from 'styled-components'

const LayoutStyles = styled.div`
    margin: 80px 200px 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .title{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 8px;
        width: 100%;

        a{
        font-family: Helvetica;
        font-weight: 400;
        color: black;
        }

    }

    hr{
        border: 1px solid black;
        width: 100%;
        margin-bottom: 8px;
    }
    
    a{
        color: black;

        &:hover{
            color: blue;
        }
    }
`

export default LayoutStyles
