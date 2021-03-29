import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import classNames from 'classnames'
import React, { useEffect } from 'react'
import NavBar from './navBar'
import Scene from './scenes/scene'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const routerProps = useRouter();
  let zIndex = 1;
  if(routerProps.pathname !== "/") {
    zIndex = 4;
  }
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
      <div style={{zIndex: 3}} className="absolute inset-0">
        <Link href="/playback/theScoup/0"><div style={{fontSize: "45px", width: "45px", cursor: "grab"}} className="">🍦</div></Link>
      </div>
      <div style={{zIndex: 1}} className="absolute inset-0">
        <Scene/>
      </div>
      <div style={{zIndex: zIndex, height: "100%", width: "calc(100% - 55px)"}} className="absolute inset-0">
        {children}
      </div>
      <NavBar/>
    </>
  )
}

//<Scene />

const HudContext = React.createContext({burgerPhonesOpen: false})
HudContext.displayName = "HudContext"

