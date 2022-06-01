import {
  ApolloClient,
  InMemoryCache,
  HttpLink
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: 'http://localhost:3003/shop-api',
})

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  credentials: "include",
  defaultOptions,
});

export default client;