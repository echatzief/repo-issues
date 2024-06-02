import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { BASE_URL, GITHUB_TOKEN } from "@/lib/config";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: BASE_URL,
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`
      }
    }),
  });
});