import Head from 'next/head'
import styles from './burgerPhones.module.css'
import Link from 'next/link'
import { useState } from 'react'
import classNames from 'classnames'
//import { getStaticProps } from 'next';

function BurgerPhones ( ) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  let actorIsFinished = false;
  let talkIsFinished = false;
  let burgerStyles = ['flex', 'mb-4', styles.viewScreen];
  const checkFinished = () => {
    if(actorIsFinished && talkIsFinished) {
      setIsBurgerOpen(false);
    }
  }
  const actorHasFinished = () => {
    actorIsFinished = true;
    actor().gotoAndStop(0);
    checkFinished();
  }
  const talkHasFinished = () => {
    talkIsFinished = true;
    talk().gotoAndStop(0);
    checkFinished();
  }
  const actor = () => {
    return document.querySelector("#burger-phone").contentWindow.stage.children[0].actor;
  }
  const talk = () => {
    return document.querySelector("#burger-message").contentWindow.stage.children[0].talk;
  }
  
  if(isBurgerOpen) {
    burgerStyles.push(styles.showBurger);
  }
  let burgerMessages = [];
  const burgerPhone = e => {
    burgerMessages = getBurgerMessages();
    actor().hasFinished = actorHasFinished;
    talk().hasFinished = talkHasFinished;
    if(!isBurgerOpen) {
      setIsBurgerOpen(true);
      setBurgerMessage("wowzah");
      actor().gotoAndPlay("intro");
      talk().gotoAndPlay("intro");
      //document.querySelector("#burger-message").contentWindow.stage.children[0].messageBubble.
    }
    /*else if(messageIndex < burgerMessages.length) {
      setBurgerMessage();
    }*/
    else {
      //setIsBurgerOpen(false);
      actor().gotoAndPlay("exit");
      talk().gotoAndPlay("exit");
      //document.querySelector("#burger-phone").contentWindow.stage.children[0].messageBubble.gotoAndPlay("bubbleClose");
      //messageIndex = 0;
    }
  }
  let messageIndex = 0;
  const setBurgerMessage = (message) => {
    //talk().textbox_mc.textbox.text
    // = burgerMessages[messageIndex].message;
    //messageIndex++;
  }
  return (
    <>
    <div className={classNames(burgerStyles)}>
      <iframe className={classNames('w-1/4', 'sm:w-1/4', 'md:w-1/3', 'lg:w-1/5', styles.messages)} id="burger-phone" src='/Slipurrrrss/Slipurrrrss.html'></iframe>
      <iframe className={classNames('w-3/4', 'sm:w-3/4', 'md:w-2/3', 'lg:w-4/5', styles.messages)} id="burger-message" src='/McMessages/McMessages.html'></iframe>
    </div>
    <div onClick={burgerPhone} className={styles.burgerPhone}>🍔</div>
    </>
  )
}

function getBurgerMessages() {
  return {
    burgerMessages: [
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
  }
}

export default BurgerPhones;

/*

  
  

    */