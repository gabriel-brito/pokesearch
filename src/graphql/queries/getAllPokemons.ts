const GET_ALL_POKEMONS = /* GraphQL */ `
  query Pokemons($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        image
        name
      }
    }
  }
`

export default GET_ALL_POKEMONS
