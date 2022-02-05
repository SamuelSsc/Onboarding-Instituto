import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import React from 'react';
import Login from './components/Login/Login.component';

/*importando as dependencias do Apollo*/
import { MyRoutes } from './routes';

/*Inicializando o Apollo Cliente passando uma config de URL e cache*/
const client = new ApolloClient({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

/*Eslint solicitou que adcionasse o JSX.Element*/
function App(): JSX.Element {
  return (
    /*Envolvendo a aplicação React com o Apollo Client*/
    <ApolloProvider client={client}>
      <MyRoutes />
    </ApolloProvider>
  );
}

export default App;
