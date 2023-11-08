import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_URL_API_BACKEND,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;