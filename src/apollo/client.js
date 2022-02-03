import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        contentCards: {
          keyArgs: false,
          merge(existing, incoming) {
            let edges = [];
            if(existing?.edges){
              edges = [...existing?.edges]
            }
            if(incoming?.edges){
              edges = [...edges, ...incoming?.edges]
            }
            return {
              ...incoming,
              edges,
            };
          }
        }
      }
    }
  }
})


const httpLink = new HttpLink({
  uri: "https://api.staging.tigerhall.io/graphql",
});

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([httpLink]),
});