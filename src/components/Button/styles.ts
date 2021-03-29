import styled from 'styled-components'

export const Wrapper = styled.button`
  background-color: #d31e25;
  border-radius: 0.3em;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 600;
  padding: 1em;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0.3em 0.3em 1em -0.1em rgba(0, 0, 0, 0.25);
  }
`
