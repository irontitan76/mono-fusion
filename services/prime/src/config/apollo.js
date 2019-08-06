import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import fetch from "isomorphic-unfetch";

export function createClient() {
  const client = new ApolloClient({
    cache: process.browser ? new InMemoryCache().restore(window.__APOLLO_STATE__) : new InMemoryCache(),
    connectToDevTools: process.browser,
    link: new HttpLink({
      // uri: process.env.MONGO_DB_URI,
      uri: "http://localhost:4100/api/graphql",
      fetch: !process.browser && fetch,
    }),
    ssrMode: !process.browser,
  });

  return client;
}