import styled from 'styled-components'
import { HeadingProps } from '.'

export const Wrapper = styled.h1.attrs(
  ({ small, isWhite, toUppercase }: Omit<HeadingProps, 'children'>) => ({
    small,
    isWhite,
    toUppercase
  })
)`
  color: ${({ isWhite }) => (isWhite ? 'white' : 'black')};
  font-size: ${({ small }) => (small ? '1.8em' : '3.5em')};
  margin-bottom: 1em;
  position: relative;
  text-transform: ${({ toUppercase }) => toUppercase && 'uppercase'};

  &::after {
    border-bottom: ${({ isWhite }) =>
      isWhite ? '0.5rem solid white' : '0.5rem solid #d31e25'};
    bottom: -1rem;
    content: '';
    left: 0;
    position: absolute;
    width: 3rem;
  }
`
