import styled from 'styled-components';

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

export default TrabajoStyled