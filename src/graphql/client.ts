import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://graphql-pokeapi.vercel.app/api/graphql'

const client = new GraphQLClient(endpoint)

export default client
