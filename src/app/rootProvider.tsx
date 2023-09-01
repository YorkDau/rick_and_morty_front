'use client'

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ReactElement } from "react";

interface Props {
    children: ReactElement
}

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

export default function RootProvider({children} : Props) : ReactElement  {
    return  (
      <ApolloProvider client={client}>
         {children}
      </ApolloProvider>
    );
}