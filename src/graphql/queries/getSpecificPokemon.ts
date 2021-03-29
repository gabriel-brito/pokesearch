const GET_SPECIFIC_POKEMON = /* GraphQL */ `
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      name
      id
      height
      weight
      status
      sprites {
        front_default
      }
    }
  }
`
export default GET_SPECIFIC_POKEMON
