import Head from 'next/head'
import Link from 'next/link'
import styles from './index.module.css'
import Layout from '../components/layout'

export default function Home () {
  return (
    <Layout home>
      <div className={styles.percent20}>
        <div className={styles.status}>
          <p><span className="offline">offline</span> Arbitrat0r</p>
          <p><span className="offline">offline</span> informati0n</p>
          <p><span className="online">online</span> chatb0t</p>
          <p><span className="error">hiding</span> shoxxii</p>
        </div>
        <iframe className={styles.ship} src='/Ship/Ship.html'></iframe>
      </div>
      </Layout>
  )
}