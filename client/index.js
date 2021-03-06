import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HashRouter } from 'react-router-dom'

import App from './components/App/App'

const cache = new InMemoryCache()
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
})

const client = new ApolloClient({
  link: httpLink,
  cache,
  // dataIdFromObject: o => o.id
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <HashRouter>
      <App/>
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('root')
)