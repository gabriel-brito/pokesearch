import styled from 'styled-components'

export const Wrapper = styled.article`
  align-items: center;
  border-radius: 0.8em;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease;

  &:hover {
    box-shadow: 1em 1.5em 1em -0.1em rgba(0, 0, 0, 0.25);
  }
`

export const Image = styled.img`
  margin: 0 auto;
  max-width: 25em;
  width: 100%;
`

export const InfoWrapper = styled.div`
  background-color: #00154f;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 100%;
`

export const Info = styled.span`
  font-size: 1.5em;
  margin-bottom: 0.5em;
`
