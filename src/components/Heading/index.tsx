import * as S from './styles'

export type HeadingProps = {
  children: string
  small?: boolean
  isWhite?: boolean
  toUppercase?: boolean
}

const Heading = ({
  children,
  small,
  isWhite = false,
  toUppercase = false
}: HeadingProps) => (
  <S.Wrapper toUppercase={toUppercase} isWhite={isWhite} small={small}>
    {children}
  </S.Wrapper>
)

export default Heading
