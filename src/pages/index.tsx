import client from 'graphql/client'
import { GetStaticProps } from 'next'

import GET_ALL_POKEMONS from 'graphql/queries/getAllPokemons'
import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

export const getStaticProps: GetStaticProps = async () => {
  const variables = { limit: 9, offset: 0 }
  const {
    pokemons: { results }
  } = await client.request(GET_ALL_POKEMONS, variables)

  return {
    props: {
      results
    }
  }
}

export default function Home({ results }: HomeTemplateProps) {
  return <HomeTemplate results={results} />
}
