import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo'
// import { ApolloClient, HttpLink,InMemoryCache } from 'apollo-boost'
// import {
//   ApolloProvider,
//   ApolloClient,
//   createNetworkInterface
// } from 'react-apollo';
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

import Nav from './Config/routes'

const link = createHttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjfhykru20gay0190z9jg9mkv'
  });

// const client = new ApolloClient({
//   link: link,
//   cache: new InMemoryCache()
// });

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Nav />
      </ApolloProvider>
    );
  }
}
