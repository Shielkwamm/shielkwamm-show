import '../styles/index.css'
import Layout from '../components/layout'

import { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    initGA()
    logPageView()
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}