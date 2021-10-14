import React from "react";
import App from "./App";
import {createHttpLink} from 'apollo-link-http';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const httpLink = createHttpLink({
    // uri: 'http://149.28.21.2:8087/api/v1/graphql/'
    uri: 'https://d5d4-197-232-32-250.ngrok.io'
  });
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('jwtToken');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `JWT ${token}` : "",
      }
    }
  });
  
  const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    uri:'https://d5d4-197-232-32-250.ngrok.io',
    cache: new InMemoryCache(),
  });
  
  
  export default (
    <ApolloProvider client={client}>
      <App client={client} />
    </ApolloProvider>
  );