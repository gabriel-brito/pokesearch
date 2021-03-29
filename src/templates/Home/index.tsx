import Card, { CardProps } from 'components/Card'
import Heading from 'components/Heading'
import Link from 'next/link'

import * as S from '../styles'

export type ResultsProps = Pick<CardProps, 'id' | 'name' | 'image'>

export type HomeTemplateProps = {
  results: ResultsProps[]
}

const HomeTemplate = ({ results }: HomeTemplateProps) => {
  return (
    <S.Wrapper>
      <Heading>Pokemon Search</Heading>

      <S.Description>
        Hello there!
        <br />
        There&apos;s a list below with the first nine pokemons!
        <br />
        They&apos;re fetched with GraphQL.
        <br />
        <Link href="/search">Click here</Link> if you want to search your own
        pokemon.
      </S.Description>

      <S.ResultsWrapper>
        {results?.map((pokemon, index) => (
          <Card {...pokemon} key={index} />
        ))}
      </S.ResultsWrapper>
    </S.Wrapper>
  )
}

export default HomeTemplate
