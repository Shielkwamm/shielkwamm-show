import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import classNames from 'classnames'
import React, { useEffect } from 'react'
import NavBar from './navBar'
import Scene from './scenes/scene'

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
        <script src="https://zimjs.org/cdn/1.3.2/createjs.js"></script>
        <script src="https://zimjs.org/cdn/cat/03/zim.js"></script>
        <script src="/actors/Scoup/Scoup.js" type="text/javascript"></script>
      </Head>
      <main>{children}</main>
      <div className={classNames(styles.navRight)}>
        <Link href="/playback/theScoup/0"><div className={classNames(styles.linkMe, styles.motd, "noUserSelect")}>🍦</div></Link>
      </div>
      <Scene/>
      <NavBar/>
      
    </>
  )
}

//<Scene />

const HudContext = React.createContext({burgerPhonesOpen: false})
HudContext.displayName = "HudContext"

