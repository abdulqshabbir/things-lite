import styled from 'styled-components'

export const Button = styled.button`
    font-size: 1.2rem;
    font-weight: 300;
    padding: 25px;
    min-height: 50px;
    border-radius: 4px;
    width: 100%;
    display: block;
    border: none;
    color: white;
    margin: 10px auto;
    background-color: ${props => props.theme.primaryDark };
    &:hover {
        cursor: pointer;
    }
`

export const InlineButton = styled(Button)`
    display: inline-block !important;
    width: 40% !important;
    margin-left: 5% !important;
`

export const DangerButton = styled(Button)`
    background-color: ${props => props.theme.buttonWarning};
`