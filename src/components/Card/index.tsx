import Heading from 'components/Heading'
import * as S from './styles'

export type CardProps = {
  height?: number
  id: number
  image: string
  name: string
  weight?: number
  baseXp?: number
}

const Card = ({ baseXp, height, id, image, name, weight }: CardProps) => (
  <S.Wrapper>
    <S.Image alt={`It's the pokemon named ${name}`} src={image} />

    <S.InfoWrapper>
      <Heading small toUppercase isWhite>
        {name}
      </Heading>
      <S.Info>
        <strong>N°</strong> {id}
      </S.Info>
      {baseXp && (
        <S.Info>
          <strong>Base experience:</strong>: {baseXp};
        </S.Info>
      )}
      {height && (
        <S.Info>
          <strong>Height</strong>: {height}&apos;
        </S.Info>
      )}
      {weight && (
        <S.Info>
          <strong>Weight</strong>: {weight} pounds.
        </S.Info>
      )}
    </S.InfoWrapper>
  </S.Wrapper>
)

export default Card
