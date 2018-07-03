import React from 'react'
import styled, { css } from 'styled-components'

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 50em;

  ${props =>
    props.small &&
    css`
      max-width: 20em;
    `};
`

const Container = props => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>
}

export default Container
