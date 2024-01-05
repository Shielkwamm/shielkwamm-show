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
  console.log(proper, show, data)
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
      <Script strategy="beforeInteractive" src={proper?.hero?.src} type="text/javascript"/> 
      <Script strategy="beforeInteractive" src="https://zimjs.org/cdn/1.3.4/createjs.js" />
      <Script strategy="beforeInteractive" src="https://zimjs.org/cdn/cat/04/zim.js" />
      <Script strategy="beforeInteractive" src="https://zimjs.org/cdn/pizzazz_01.js" />
      <Script strategy="beforeInteractive" src="https://learneverything.github.io/le-actors/actors/Scoup/Scoup.js" />
      
      <style jsx global>{`
        body {
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
        <h1>‾🦍‾</h1>
        <Scene/>
      </div>
      

      <div style={{zIndex: zIndex, height: "100%", width: "calc(100% - 55px)"}} className="absolute inset-0">
        {children}
      </div>

      {proper?.organization && show.shipVisible? (
        <NavBar/>
      ): null}

      {!loading? (
        <Hud proper={proper} show={show} currentRoom={currentRoom}/>
      ): null}
        <YTWin title={"Bison instead of Bears"}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tJ0fHAHihPA?si=3nWIKcY3i9i7zq-H" title="Bison Water Hole - Grasslands National Park powered by EXPLORE.org" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'
      </YTWin>
      <YTWin title={"Oryx"}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ydYDqZQpim8?si=Vs_YlM4Xlkzpn38W" title="Namibia: Live stream in the Namib Desert" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'
      </YTWin>
      <YTWin title={"Sea Manatees"}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/yPSYdCWRWFA?si=8cicT4mb267PZK2v" title="Underwater Manatee Cam At Homosassa Springs | Fall in love with the beloved sea cows! | explore.org" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'
      </YTWin>
        <YTWin title={"Peregrine Falcons"}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qzMJliQwMNc?si=HplAF_ArzXvG1ivU" title="Box Camera - FalconCam Project LIVE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'
      </YTWin>
        <YTWin title={"Orcas"}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-vK6dVJ7erU?si=EbxK1COtLb5IBJ0k" title="Strider Rubbing Beach - Underwater powered by EXPLORE.org" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'
      </YTWin>
        <YTWin title={"Hummingbirds from LA"}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/pXe8MpU7uzk?si=suvNku04a-NEcCr6" title="Live Hummingbird Feeder Cam, Bird Feeder, Studio City, California" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'
      </YTWin>
        <YTWin title={"Olifants"}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_NXaovxB-Bk?si=CV16Bv9QUarp8Jr3" title="Africam Olifants River powered by EXPLORE.org" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'
      </YTWin>
      <YTWin title={"Hippopotamus"}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KyQAB-TKOVA?si=QPWRNKNLHWvESGCT" title="African Watering Hole powered by Explore.org" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'
      </YTWin>
      <YTWin title={"Gorillas"}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/yfSyjwY6zSQ?si=nEBI76e5q8cQ66hm" title="GRACE Gorilla Forest Corridor Cam powered by EXPLORE.org" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'
      </YTWin>
        <YTWin title={"Animal Families Elephants"}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/DsNtwGJXTTs?si=nLxJ9eTfqTf9ax-F" title="Africam Tau powered by EXPLORE.org" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'
      </YTWin>
        <YTWin title={"Animal Families Lions"}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dIChLG4_WNs?si=Bc_0fyJNxx1SKE1h" title="Africam Nkorho Bush Lodge powered by EXPLORE.org" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'
      </YTWin>
      </div>
    </>
  )
}
//
//https://i5.walmartimages.com/asr/45377c89-09a9-4c6f-acd0-15118720f060.e8262abba0f18a7bb8b5edb41cb2b5f0.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff
//<-- background-image: url(${show.style.backgroundImage}); -->
