import '../styles/index.css'
import Layout from '../components/layout'

import { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics';

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    initGA()
    logPageView()
  });
  return (
    <ApolloProvider client={client}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
  )
}

  
