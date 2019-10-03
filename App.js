import React, {PureComponent} from 'react';
import ApolloBoost from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import Main from './src/screens/Main';

const client = new ApolloBoost({
  uri: 'https://graphql-pokemon.now.sh/',
});

export default App = () => {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
};
