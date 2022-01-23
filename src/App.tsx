import React from "react";
import Login from "./components/Login/Login.component";

/*importando as dependencias do Apollo*/
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

/*Inicializando o Apollo Cliente passando uma config de URL e cache*/
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});


const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;



/*Eslint solicitou que adcionasse o JSX.Element*/
function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Login />
    </ApolloProvider>
  );
}

export default App;
