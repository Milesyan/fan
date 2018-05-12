// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ExchangeRates } from './components/ExchangeRates';

import { Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import AboutUs from './screens/About';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
});
class App extends Component<*, *> {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                <Link to="/1">Home</Link>
                <Link to="/about-us">About</Link>
              </header>
              <main>
                <Route exact path="/1" component={Home} />
                <Route exact path="/about-us" component={AboutUs} />
              </main>
              {/*<p className="App-intro">
                My first Apollo App🚀
              </p>
              <ExchangeRates />*/}
            </div>
          </ConnectedRouter>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
