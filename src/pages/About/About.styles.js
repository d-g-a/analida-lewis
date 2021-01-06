import styled from 'styled-components';

const AboutStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: inherit;
    height: 640px;
    margin-top: 16px;
    /* border: 1px solid black; */


    .bio{
        width: 50%;
        p{
            font-size: 24px;
            line-height: 1.4;
        }
    }

    .portrait{
        display: flex;
        justify-content: flex-end;
        width: 50%;
        height: 90%;
        img{
            object-fit: cover;
            width: 70%;
        }
    }
`
export default AboutStyled;