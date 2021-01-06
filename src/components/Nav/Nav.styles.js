import styled from 'styled-components'

const NavStyled =  styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:flex-start;
    width: 100%;
    margin-bottom: 16px;

    .routes{
        a{
        margin-right: 80px;
        font-size: 18px;
        }
    }

    p{
        font-size: 18px;
    }

`
export default NavStyled