import React from 'react';
import Nav from './components/Nav';
import Product from './components/Product';
import Footer from './components/Footer';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav></Nav>
        </div>
        <div >
          <Switch>

          </Switch>
        </div>
        <Product>

        </Product>
        <Footer>

        </Footer>
      </Router>
    </ApolloProvider >
  );
}

export default App;
