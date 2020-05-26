import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import styles from './index.module.css'

export default function Home () {
  return (
    <>
      <div className={styles.percent20}>
        <div className={styles.status}>
          <p><span className="offline">offline</span> Arbitrat0r</p>
          <p><span className="offline">offline</span> informati0n</p>
          <p><span className="online">online</span> chatb0t</p>
          <p><span className="error">hiding</span> shoxxii</p>
        </div>
        <iframe className={styles.ship} src='/Ship/Ship.html'></iframe>
        <iframe className={styles.sheilkwamm} src='/Shielkwamm/Shielkwamm.html'></iframe>
        <iframe className={styles.messages} src='/Slipurrrrss/Slipurrrrs.html'></iframe>
      </div>
    </>
  )
}