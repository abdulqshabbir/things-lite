import styled from 'styled-components'

export default styled.a`
    background-color: ${props => props.theme.secondaryLight};
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    width: 100%;
    padding: 15px 0px 15px 30px;
    left: 10px;
    &:hover{
        cursor: pointer;
        background-color: #ccc;
        border-radius: 15px;
    }
`