import { FormEvent, useState } from 'react'

import client from 'graphql/client'
import GET_SPECIFIC_POKEMON from 'graphql/queries/getSpecificPokemon'
import Link from 'next/link'

import Button from 'components/Button'
import Card from 'components/Card'
import Heading from 'components/Heading'
import Input from 'components/Input'

import * as S from '../styles'

const SearchTemplate = () => {
  const [error, setError] = useState('')
  const [foundPokemon, setFoundPokemon] = useState('')
  const [pokemonName, setPokemonName] = useState('')

  const choosingPokemonName = (event: FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.value.toLowerCase()

    setPokemonName(name)
  }

  const invokeSearchFunction = () => searchPokemonByName(pokemonName)

  const searchPokemonByName = async (name: string) => {
    const variables = { name }
    let data

    setError('')
    setFoundPokemon('')

    try {
      const { pokemon } = await client.request(GET_SPECIFIC_POKEMON, variables)
      const { status } = pokemon

      if (!status) {
        throw new Error(
          'Something went wrong with your request. Please try again.'
        )
      }

      data = {
        ...pokemon,
        image: pokemon?.sprites['front_default']
      }

      setFoundPokemon(data)
    } catch ({ message }) {
      setError(message)
    }
  }

  return (
    <S.Wrapper>
      <Heading>Search Page</Heading>

      <S.SearchWrapper>
        <Input func={choosingPokemonName} />
        <Button func={invokeSearchFunction}>Search</Button>
      </S.SearchWrapper>

      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

      <S.Description>
        <Link href="/">Click here</Link> to see the list with the first nine.
      </S.Description>

      <S.ResultsWrapper>
        {foundPokemon && <Card {...foundPokemon} />}
      </S.ResultsWrapper>
    </S.Wrapper>
  )
}

export default SearchTemplate
