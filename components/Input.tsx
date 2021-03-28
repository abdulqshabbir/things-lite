import styled from 'styled-components'

export default styled.input`
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0 auto;
    padding: 25px;
    min-height: 25px;
    box-sizing: border-box;
    display: block;
    background-color: ${props => props.theme.primaryLight};
    border: 1px solid white;
    width: 100%;

    &:hover {
        border: 1px solid gray;
    }

    &:focus {
        outline: none;
    }
`