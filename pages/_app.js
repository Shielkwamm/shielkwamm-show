import '../styles/index.css'
import Layout from '../components/layout'

import { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics';

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  useEffect(() => {
    initGA()
    logPageView()
  });
  return (
    <ApolloProvider client={apolloClient}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
  )
}

  
