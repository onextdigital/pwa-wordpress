import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createApolloClient = () => {
  const token = localStorage.getItem("token");

  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_URL_API_BACKEND,
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;