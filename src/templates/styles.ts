import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 136.8em;
  padding: 5em;
  width: 100%;
`

export const Description = styled.p`
  margin: 1em auto;
  font-size: 1.6em;
`

export const ErrorMessage = styled(Description)`
  color: #d31e25;
`

export const ResultsWrapper = styled.div`
  display: grid;
  grid-gap: 5em;
  margin-top: 5em;

  ${media.greaterThan('small')`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`
