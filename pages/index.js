import Head from 'next/head'
import Link from 'next/link'
import styles from './index.module.css'
import { useState } from 'react'
import classNames from 'classnames'

export default function Home () {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const burgerMessages = [
    {
      time: "1:53 AM", 
      handle: "Slipurrrrss", 
      mood: "||〠", 
      message: "[sic] *hic* [sic], I think we should see other people..."
    },
    {
      time: "1:54 AM",
      handle: "Slipurrrrss",
      mood: "|{〠}|",
      message: "Look, I just don't want to waste your time..."
    },
    {
      time: "1:55 AM",
      handle: "Slipurrrrss",
      mood: "|_〠}",
      message: "...it really hurts me... I trusted you..."
    },
    {
      time: "1:56 AM",
      handle: "Slipurrrrss",
      mood: "-{[〠]-",
      message: "...you're always listening to that stupid Путин song..."
    },
    {
      time: "1:57 AM",
      handle: "Slipurrrrss",
      mood: "{-[〠]-}",
      message: "... Erdoğan... you're just going down the list......"
    },
    {
      time: "1:58 AM",
      handle: "Slipurrrrss",
      mood: "--〠--",
      message: "...you're just trying to get people's attention..."
    },
    {
      time: "1:59 AM",
      handle: "Slipurrrrss",
      mood: "-{-[〠]-}-",
      message: "...you said you would vote for me in November..."
    },
    {
      time: "2:01 AM",
      handle: "Slipurrrrss",
      mood: "+🍕",
      message: "I'm glad I didn't trust you... again... HAGS."
    }
  ]
  let messageIndex = 0;
  const setBurgerMessage = () => {
    //document.querySelector("#burger-phone").contentWindow.stage.children[0].messageBubble.textbox_mc.textbox.text = burgerMessages[messageIndex].message;
    messageIndex++;
  }
  const burgerPhone = e => {
    if(!isBurgerOpen) {
      setBurgerMessage();
      setIsBurgerOpen(true);
      document.querySelector("#burger-phone").contentWindow.stage.children[0].actor.play();
      document.querySelector("#burger-message").contentWindow.stage.children[0].message.gotoAndPlay("bubbleOpen");
      //document.querySelector("#burger-message").contentWindow.stage.children[0].messageBubble.
    }
    else if(messageIndex < burgerMessages.length) {
      setBurgerMessage();
    }
    else {
      setIsBurgerOpen(false);
      //document.querySelector("#burger-phone").contentWindow.stage.children[0].messageBubble.gotoAndPlay("bubbleClose");
      messageIndex = 0;
    }
  }
  return (
    <>
      <Head>
        <title>=== Shïelielïelïelielïelïelielïelkwammk ===</title>
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </Head>

      <div className={styles.percent20}>
        <div className={styles.status}>
          <p><span className="offline">offline</span> Arbitrat0r</p>
          <p><span className="offline">offline</span> informati0n</p>
          <p><span className="online">online</span> chatb0t</p>
          <p><span className="error">hiding</span> shoxxii</p>
        </div>
        <div className={classNames('flex', 'mb-4', styles.viewScreen)}>
          <iframe className={classNames('w-1/4', 'sm:w-1/4', 'md:w-1/3', 'lg:w-1/5', styles.messages)} id="burger-phone" src='/Slipurrrrss/Slipurrrrss.html'></iframe>
          <iframe className={classNames('w-3/4', 'sm:w-3/4', 'md:w-2/3', 'lg:w-4/5', styles.messages)} id="burger-message" src='/McMessages/McMessages.html'></iframe>
        </div>
        <iframe className={styles.ship} src='/Ship/Ship.html'></iframe>
        <iframe className={styles.sheilkwamm} src='/Shielkwamm/Shielkwamm.html'></iframe>
        <div onClick={burgerPhone} className={styles.burgerPhone}>🍔</div>
      </div>
    </>
  )
}