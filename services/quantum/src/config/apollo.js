import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-unfetch";

export function createClient() {
  const client = new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: createHttpLink({
      // uri: process.env.MONGO_DB_URI,
      uri: "http://localhost:4100/api/graphql",
      fetch
    }),
    cache: process.browser ? new InMemoryCache().restore(window.__APOLLO_STATE__) : new InMemoryCache()
  });

  return client;
}