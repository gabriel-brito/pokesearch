import { ChangeEventHandler } from 'react'
import * as S from './styles'

export type InputProps = {
  func: ChangeEventHandler<HTMLInputElement>
}

const Input = ({ func }: InputProps) => (
  <S.Wrapper
    aria-label="Input"
    onChange={func}
    placeholder="type your pokemon name"
  />
)

export default Input
