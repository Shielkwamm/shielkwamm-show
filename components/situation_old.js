import Head from 'next/head'
import styles from './Situation.module.css'
import Link from 'next/link'
import { useState } from 'react'
import classNames from 'classnames'

import ActorPortrait from './ActorPortrait.js'
import MessageBox from './MessageBox.js'

export default function Situation () {
  const [isBurgerPhoneOpen, setIsBurgerPhoneOpen] = useState(false);
  let burgerStyles = ['flex', 'mb-4', styles.viewScreen];
  if(isBurgerPhoneOpen) {
    burgerStyles.push(styles.showBurger);
  }
  const [actorState, setActorState] = useState('loading');
  const [actorCuedAnimation, setActorCuedAnimation] = useState([]);
  const [talkState, setTalkState] = useState("loading");
  const [talkCuedAnimation, setTalkCuedAnimation] = useState([]);
  /*
  // {name: 'loading', doesAlwaysFinish: true},
  // {name: 'hiding', doesAlwaysFinish: false},
  // {name: 'introing', doesAlwaysFinish: true},
  // {name: 'idleing', doesAlwaysFinish: false},
  // {name: "exiting", doesAlwaysFinish: true},
  // {name: "exited"}
  */


  //let burgerNextStyles = [styles.burgerNextClick];
  /*
  
  let talkIsFinished = false;
  
  
  const checkFinished = () => {
    if(actorIsFinished && talkIsFinished) {
      setBurgerState("closed");
    }
  }
  
  
  

  let burgerMessages;
  let messageIndex = 0;
  const initBurgerPhone = () => {
    burgerMessages = getBurgerMessages().burgerMessages;
    actor().hasFinished = actorHasFinished;
    talk().hasFinished = talkHasFinished;
    setBurgerState("closed");
    openBurgerPhone();
  }
  const openBurgerPhone = () => {
    setBurgerState("open");
    setBurgerMessage("wowzah");
    actor().gotoAndPlay("intro");
    talk().gotoAndPlay("intro");
  }
  
  
  const setBurgerMessage = () => {
    talk().textbox_mc.textbox.text = burgerMessages[messageIndex].message;
  }
  
  
  */
  /*const actorStateChanged = (newState) => {
    if(newState === "exited") {
      setIsBurgerPhoneOpen(false);
      setActorState("actorReady");
    }
  }*/

  let myActor;

 const burgerPhone = e => {
  if(!isBurgerPhoneOpen) {
    //setActorCuedAnimation({label: "intro"});
    myActor.cueAnimation({label: "intro"});// = //setCuedAnimation({label: "intro"})
    setIsBurgerPhoneOpen(true);
  }
  else {
    myActor.cueAnimation({label: "exit"});
    //wait for burger state to report back that it's finished
    //setActorState("exit");
    //listen for exit sign
  }
  /*if(actorState === "exited") {
    setIsBurgerPhoneOpen(false);
  }*/
  //}
  /*if(burgerState === "notReady") {
    initBurgerPhone();
  }
  else if(burgerState === "closed") {
    openBurgerPhone();
    //document.querySelector("#burger-message").contentWindow.stage.children[0].messageBubble.
  }
  else if(messageIndex < burgerMessages.length) {
    setBurgerMessage();
  }
  else if(burgerState !== "closing") {
    //setIsBurgerOpen(false);
    actor().gotoAndPlay("exit");
    talk().gotoAndPlay("exit");
    setBurgerState("closing");
    //document.querySelector("#burger-phone").contentWindow.stage.children[0].messageBubble.gotoAndPlay("bubbleClose");
    //messageIndex = 0;
  }*/
}
 const nextBurgerMessage = () => {
  messageIndex++;
  setBurgerMessage();
}
  const theSitaution = getTheSituation();
  return (
    <>
    {isBurgerPhoneOpen ? (
      <>
      <Head><title>{theSituation.header}</title></Head>
      </>
    ): null }
    <div className={classNames(burgerStyles)}>
      {theSituation.actors.map(actor => {
        {actor.type === "basic" ? (
          <ActorPortrait contentSrc={actor.src} myActor={myActor} actorState={actorState} setActorState={setActorState} actorCuedAnimation={actorCuedAnimation} setActorCuedAnimation={setActorCuedAnimation}/>
        ): null}
      })}
    </div>
    <div onClick={burgerPhone} className={styles.burgerPhone}>{theSituation.toggle.text}</div>
    </>
  )
}

//introduce layouts?
function getTheSituation() {
  return {
    name: "McBurgerPhones",
    toggle: {
      text: "🍔",
    },
    header: "🍔 Slipurrrrss 🍔",
    actors: [{
      handle: "Slipurrrrss",
      type: "basic",
      src: "/Slipurrrrss/Slipurrrrss.html",
      intro: {
        label: "intro",
        waitUntilDone: true
      },
      idle: {
        label: "idle"
      },
      exit: {
        label: "exit", 
        waitUntilDone: true
      }
    },
    {
      handle: "McMessages",
      type: "messageBox",
      src: "/McMessages/McMessages.html",
      nextButtonSrc: "/McNext/McNext.html",
      intro: {
        label: "intro",
        waitUntilDone: true
      },
      idle: {
        label: "idle"
      },
      exit: {
        label: "exit",
        waitUntilDone: false
      },
      messages: [
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
          message: "... FrogMan... you're just going down the list......"
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
    }],
  }
}