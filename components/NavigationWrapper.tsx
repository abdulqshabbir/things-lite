import styled from 'styled-components'

const NavigationWrapper = ({className, children}: any) => {
  return <div className={className}>{children}</div>
}

export default styled(NavigationWrapper)`
  background-color: ${props => props.theme.secondaryLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5px;
`