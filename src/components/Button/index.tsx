import { MouseEventHandler, ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = {
  func: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

const Button = ({ children, func }: ButtonProps) => (
  <S.Wrapper value="Search" onClick={func}>
    {children}
  </S.Wrapper>
)

export default Button
