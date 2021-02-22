import Head from 'next/head'
import Link from 'next/link'
import styles from './index.module.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=> {
    const scaling = "full"; // this will resize to fit inside the screen dimensions
    const width = 1024;
    const height = 768;
    const color = clear; // ZIM colors like green, blue, pink, faint, clear, etc.
    const outerColor = dark; // any HTML colors like "violet", "#333", etc. are fine to use

    const frame = new Frame(scaling, width, height, color, outerColor);
    frame.on("ready", () => { // ES6 Arrow Function - like function(){}
      var interval
      const stage = frame.stage;
      let stageW = frame.width;
      let stageH = frame.height;
      stage.update();
      for(let i = 0;i < 5;i++){
          let eagle = new Label("🦅")
          eagle.x = Math.floor(Math.random() * width);
          eagle.y = Math.floor(Math.random() * height);
          eagle.size = 300 * Math.random() + 50;
          eagle.rotation = Math.floor(Math.random() * 360);
          stage.addChild(eagle);
          eagle.wiggle("y", eagle.y, 10, 30, 3, 1);
          eagle.drag({slide:true})
          eagle.addEventListener("slidestart", (e) => {eagle.pauseAnimate()})
          eagle.addEventListener('slidestop', (e) => {eagle.wiggle("y", eagle.y, 10, 30, 3, 1);})
        }
    }, 2200)
    return function cleanup() {
      frame.dispose();
      clearInterval(interval)
    }
  });
  return (
    <>
    <div className={styles.percent20}></div>
    </>
  )
}

/*
export default function Home () {
  return (
    <div className={styles.percent20}>
      <div className={styles.status}>
        <p><span className="offline">offline</span> Arbitrat0r</p>
        <p><span className="offline">offline</span> informati0n</p>
        <p><span className="online">online</span> chatb0t</p>
        <p><span className="error">hiding</span> shoxxii</p>
      </div>
      <iframe className={styles.ship} src='/Ship/Ship.html'></iframe>
    </div>
  )
}*/