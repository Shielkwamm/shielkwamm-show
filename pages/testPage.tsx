import Head from 'next/head'
import Link from 'next/link'
import styles from './index.module.css'
import { useEffect, useState } from 'react'
import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate";

export default function TestPage() {
  
  //const [paused, setPaused] = useState(true);
  const [animationObject, getAnimationObject] = useState<GetAnimationObjectParameter|null>(null);
  const [paused, setPaused] = useState(true);
  const onClick = () => {
    //console.log(animationObject);
  animationObject.addEventListener("actingFinished", function() {console.log("actingFinished")})
  animationObject.actor.play();
  }
  useEffect(()=> {
    //when to add event listeners?
    //animationObject.addEventListener("actorReady", function(){console.log("actorReady")})
  })
  return (
    <div style={{ width: "400px" }}>
    <Head>
    <script src="https://zimjs.org/cdn/1.3.0/createjs.js"></script>
      <script src="https://zimjs.org/cdn/10.9.0/zim.js"></script>
      <script src="/TheScoup/Scoup.js" type="text/javascript"></script>
        
      </Head>
      <AnimateCC
        animationName="Scoup"
        getAnimationObject={getAnimationObject}
        //paused={paused}
      />
    <button onClick={onClick}>{paused ? "Unpause" : "Pause"}</button><br />
    <div className={styles.percent20}></div>
    </div>
  )
}