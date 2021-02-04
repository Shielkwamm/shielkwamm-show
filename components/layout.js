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
      <title>=== Sh.ielkwamm ===</title>
      <link rel="icon" href="/favicon_io/favicon.ico" />
      <meta
        name="description"
        content="Hello?  I make 10,000 dollars from home a month and you could too!"
      />
      <script src="https://zimjs.org/cdn/1.3.0/createjs.js"></script>
      <script src="https://zimjs.org/cdn/10.9.0/zim.js"></script>
    </Head>
    
    <main>{children}</main>
    
    <Situation theSituationJSON="/theScoup.json"/>
    <div className={classNames(styles.navLeft)}>
      <Link href="/"><div className={classNames(styles.linkMe, styles.sheilkwamm, "noUserSelect")}></div></Link>
    </div>
    <div className={classNames(styles.navRight)}>
    <a href="https://guide.shielkwamm.com"><div className={classNames(styles.shielkwammGuide, "noUserSelect")}>⧊</div></a>
    <a href="https://acktueli.com"><div className={classNames(styles.acktueli, "noUserSelect")}>◫</div></a>
    <a href="https://github.com/orgs/Shielkwamm/projects/3"><div className={classNames(styles.shielkwammGithub, "noUserSelect")}>📷</div></a>
    </div>
    </>
  )
}

const HudContext = React.createContext({burgerPhonesOpen: false})
HudContext.displayName = "HudContext"