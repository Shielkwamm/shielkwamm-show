import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://sh.shielkwamm.com/graphql",
    cache: new InMemoryCache(),
});

export default client;