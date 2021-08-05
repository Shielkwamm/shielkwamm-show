import Head from 'next/head'
import React, { useEffect } from 'react'
import NavBar from './navBar'
import Scene from './scenes/scene'
import { useRouter } from 'next/router'
import { getShowData, getProperData, getFeaturedRoom } from '../lib/getData'
import Script from 'next/script'
import Hud from './shHud/hud'
import YTWin from './shUI/ytWin'

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
        <meta property="og:title" content={currentSh}/>
        <meta property="og:description" content={show?.meta?.ogDescription} />
        <meta property="og:image" content={show?.meta?.ogImage}/>
      </Head>
      <Script src={proper?.hero?.src} type="text/javascript"/> 
      <Script strategy="beforeInteractive" src="https://zimjs.org/cdn/1.3.4/createjs.js" />
      <Script strategy="beforeInteractive" src="https://zimjs.org/cdn/cat/04/zim.js" />
      <Script strategy="beforeInteractive" src="https://zimjs.org/cdn/pizzazz_01.js" />
      <Script strategy="beforeInteractive" src="https://learneverything.github.io/le-actors/actors/Scoup/Scoup.js" />
      
      <style jsx global>{`
        body {
          background-image: url(https://i5.walmartimages.com/asr/45377c89-09a9-4c6f-acd0-15118720f060.e8262abba0f18a7bb8b5edb41cb2b5f0.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff);
          background-position-x: 0;
          animation: bgAnimate 1000s linear infinite;
          position:absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }`
      }
      </style>
      <div id="desktop" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}>
      
      <div style={{zIndex: 1}} className="absolute inset-0">
        <Scene/>
      </div>
      

      <div style={{zIndex: zIndex, height: "100%", width: "calc(100% - 55px)"}} className="absolute inset-0">
        {children}
      </div>

      {proper?.ship && show.shipVisible? (
        <NavBar/>
      ): null}

      {loading? (
      <Hud proper={proper} show={show} currentRoom={currentRoom}/>
      ): null}

      <YTWin />
      </div>
    </>
  )
}



//https://i5.walmartimages.com/asr/45377c89-09a9-4c6f-acd0-15118720f060.e8262abba0f18a7bb8b5edb41cb2b5f0.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff
//<-- background-image: url(${show.style.backgroundImage}); -->