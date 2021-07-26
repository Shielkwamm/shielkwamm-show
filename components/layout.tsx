import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'
import NavBar from './navBar'
import Scene from './scenes/scene'
import { useRouter } from 'next/router'
import AnimatedText from './animatedText/animatedText'
import ClientOnly from '../components/clientOnly';


import { getShowData, getProperData, getFeaturedRoom } from '../lib/getData'

import ProperShell from './proper/shell'



export default function Layout({ children }) {
  const proper = getProperData();
  const show = getShowData();

  const { data, loading, error } = getFeaturedRoom();
  
  const currentRoom = data?.room?.result || null;
  
  const currentSh = ">=== Sh.ielkwamm ===";

  const routerProps = useRouter();
  let zIndex = 2;
  if(routerProps.pathname !== "/") {
    zIndex = 4;
  }
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
          content={show?.meta?.description}
        />
        <script src="https://zimjs.org/cdn/1.3.2/createjs.js"></script>
        <script src="https://zimjs.org/cdn/cat/04/zim.js"></script>
        <script src="https://zimjs.org/cdn/pizzazz_01.js"></script>
        {/*<script src="https://shielkwamm.s3.us-east-2.amazonaws.com/show/actors/Scoup/Scoup.js" type="text/javascript"></script>   --> */}
        <script src={proper?.hero?.src} type="text/javascript"></script> 
        <meta property="og:title" content={currentSh}/>
        <meta property="og:description" content={show?.meta?.ogDescription} />
        <meta property="og:image" content={show?.meta?.ogImage}/>
        
      </Head>
      <style jsx global>{`
        body {
          background-image: url(https://i5.walmartimages.com/asr/45377c89-09a9-4c6f-acd0-15118720f060.e8262abba0f18a7bb8b5edb41cb2b5f0.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff);
          background-position-x: 0;
          animation: bgAnimate 1000s linear infinite;
        }`
      }
      
      </style>

      {proper.shell && show.shellVisible ? (
        <ProperShell loading={loading} zIndex={3} currentRoom={currentRoom} proper={proper}/>
      ): null}

      {proper.comm && show.heroVisible? (// 5x6
        <div style={{zIndex: 3, top: "25px"}} className="absolute">
          <Link href="/playback/theScoup/0">
            <div style={{fontSize: "45px", width: "45px", cursor: "grab"}} className="">
            <AnimatedText text="[ {🍦} ], [{{🍦}}], [  🍦  ]" />
            </div>
          </Link>
        </div>
      ): null}


      <div style={{zIndex: 1}} className="absolute inset-0">
        <Scene/>
      </div>



      <div style={{zIndex: zIndex, height: "100%", width: "calc(100% - 55px)"}} className="absolute inset-0">
        {children}
      </div>

      <ClientOnly>
      {proper.vibe && show.vibeVisible? (
        <>
        {!loading? (
      <div style={{zIndex: 3, bottom: 0, left: 0}} className="absolute">
        <Link href="/player"><div className="cursor-pointer">{currentRoom?.vibe} {currentRoom?.currentMusicTitle}</div></Link>
      </div>
        ): null}
        </>
      ): null }
      </ClientOnly>

      {proper.ship && show.shipVisible? (
        <NavBar/>
      ): null}
      
    </>
  )
}

//https://i5.walmartimages.com/asr/45377c89-09a9-4c6f-acd0-15118720f060.e8262abba0f18a7bb8b5edb41cb2b5f0.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff
//<-- background-image: url(${show.style.backgroundImage}); -->