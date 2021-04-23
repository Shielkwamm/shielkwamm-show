import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import classNames from 'classnames'
import React, { useEffect } from 'react'
import NavBar from './navBar'
import Scene from './scenes/scene'
import { useRouter } from 'next/router'
import AnimatedText from './animatedText/animatedText'
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import ClientOnly from '../components/clientOnly';

export default function Layout({ children }) {
  const routerProps = useRouter();
  let zIndex = 2;
  if(routerProps.pathname !== "/") {
    zIndex = 4;
  }

  const { data, loading, error } = useQuery(getFeaturedRoom, {
    variables: {
      roomInput: {
        filter: {isFeatured: {_eq: true}}
      }
    }
  }) 

  const currentRoom = data?.room?.result || null;
  
  const currentSh = ">=== Sh.ielkwamm ===";
  return (
    <>
      <Head>
        <title>{currentSh}</title>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon_io/favicon.ico"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"></link>
        <link rel="manifest" href="/favicon_io/site.webmanifest"></link>
        <meta
          name="description"
          content="Hello?  I make 10,000 dollars from home a month and you could too!"
        />
        <script src="https://zimjs.org/cdn/1.3.2/createjs.js"></script>
        <script src="https://zimjs.org/cdn/cat/03/zim.js"></script>
        <script src="https://zimjs.org/cdn/pizzazz_01.js"></script>
        <script src="/actors/Scoup/Scoup.js" type="text/javascript"></script>   
        <meta property="og:title" content="=== Shíélkwámm ===" />
        <meta property="og:description" content="Stuck in percent20... again... still..." />
        <meta property="og:url" content="https://shielkwamm.com/live-stream" />
        <meta property="og:image" content="https://github.com/Shielkwamm/shielkwamm-show/raw/main/public/bg.png" />
      </Head>
      <ClientOnly>
      {!loading? (
      <div style={{zIndex: 3}} className="absolute px-2 text-purple-800">
        <div><a href={`https://sh.shielkwamm.com/room/${currentRoom?.slug}`}>&#35;{currentRoom?.name}</a></div>
      </div> ) : null }
      </ClientOnly>
      <div style={{zIndex: 3, top: "25px"}} className="absolute">
        <Link href="/playback/theScoup/0">
          <div style={{fontSize: "45px", width: "45px", cursor: "grab"}} className="">
          🍦
          </div>
        </Link>
      </div>
      <div style={{zIndex: 1}} className="absolute inset-0">
        <Scene/>
      </div>
      <div style={{zIndex: zIndex, height: "100%", width: "calc(100% - 55px)"}} className="absolute inset-0">
        {children}
      </div>
      <ClientOnly>
        {!loading? (
      <div style={{zIndex: 3, bottom: 0, left: 0}} className="absolute">
        <Link href="/player"><div className="cursor-pointer">{currentRoom?.vibe} {currentRoom?.currentMusicTitle}</div></Link>
      </div>
        ): null}
      </ClientOnly>
      <NavBar/>
    </>
  )
}

//<Scene />

const HudContext = React.createContext({burgerPhonesOpen: false})
HudContext.displayName = "HudContext"

const getFeaturedRoom = gql `query FeaturedRoom($roomInput: SingleRoomInput!) {
  room(input: $roomInput) {
    result {
      name
      bwam
      vibe
      currentMusicTitle
      currentMusicUrl
      slug
      colorScheme {
        backgroundColor
        color
        linkColor
        altColor
      }
    }
  } 
}`

//<AnimatedText text="[ {🍦} ], [{{🍦}}], [  🍦  ]" />