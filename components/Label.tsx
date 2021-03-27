import styled from 'styled-components'

export default styled.label`
    font-size: ${props => props.theme.fs_h2};
    font-weight: 300;
    min-height: 50px;
    padding: 50px;
    display: block;
    background-color: ${props => props.theme.primaryLight};
`