import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.hygraph.com/v2/clb5jvs6i01fz01uq9vc9hg5o/master",
    cache: new InMemoryCache
})