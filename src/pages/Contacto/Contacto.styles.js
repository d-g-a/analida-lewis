import styled from 'styled-components';

const ContactoStyled = styled.div`
width: inherit;
display: flex;
flex-direction: row;
height: 640px;
margin-top: 16px;

.info{
    width: 50%;

    h3{
        text-transform: uppercase;
        margin-bottom: 16px;
    }
    p{
        font-size: 20px;
    }

}

.pic {
    width: 50%;
    display: flex;
    justify-content: flex-end;

    img{
        object-fit: cover;
        width: 100%;
    } 
}

`

export default ContactoStyled