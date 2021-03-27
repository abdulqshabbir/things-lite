import styled from 'styled-components'

export default styled.div`
    font-size: ${props => props.theme.fs_h2};
    font-weight: 400;
    background-color: ${props => props.theme.primaryLight};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`