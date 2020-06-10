import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import { useState } from 'react'
import classNames from 'classnames'
import Situation from './situation'

export default function Layout({ children }) {
  return (
    <>
    <Head>
      <title>=== Shïelielïelïelielïelïelielïelkwammk ===</title>
      <link rel="icon" href="/favicon_io/favicon.ico" />
      <meta
        name="description"
        content="Did you want to see my meta?  Do you like to look at it?"
      />
      <script src="https://zimjs.org/cdn/1.3.0/createjs.js"></script>
      <script src="https://zimjs.org/cdn/10.9.0/zim.js"></script>
    </Head>
    
    <main>{children}</main>
    <Situation theSituationJSON="/mcSituation.json"/>
    <iframe className={styles.sheilkwamm} src='/Shielkwamm/Shielkwamm.html'></iframe>
    <Link href="/"><div className={classNames(styles.linkMe, styles.sheilkwamm)}></div></Link>
    <Link href="/nice"><div className={styles.nice}>🙄</div></Link>
    <Link href="/zim"><div className={styles.meow}>🐈</div></Link>
    </>
  )
}

const HudContext = React.createContext({burgerPhonesOpen: false})
HudContext.displayName = "HudContext"