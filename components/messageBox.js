import { useState, useRef, useEffect } from 'react'
import styles from './messageBox.module.css'
import classNames from 'classnames'

export default function messageBox({ actorData }) {
  const actorIframe = useRef(null);
  const nextButtonIframe = useRef(null);

  const actingFinished = () => {
    theSituation.setActorState(actorData.handle, theSituation.getActorState(actorData.handle).name, true);
  }

  useEffect(() => {
    actorIframe.current = document.getElementById("messageBox");
    actorIframe.current.onload = function() {
      actorIframe.current.contentWindow.addEventListener("actorReady", actorInit);
    }
    nextButtonIframe.current = document.getElementById("messageNext");
    nextButtonIframe.current.onload = function() {
      nextButtonIframe.current.contentWindow.addEventListener("actorReady", nextButtonInit);
    }
  })

  const nextButtonInit = () => {
    theSituation.setNextButtonMc(actorData.handle, nextButtonIframe.current.contentWindow.stage.children[0].actor);
    nextButtonIframe.current.contentWindow.removeEventListener("actorReady", nextButtonInit);
  }

  const actorInit = () => {
    theSituation.setActorMc(actorData.handle, actorIframe.current.contentWindow.stage.children[0].actor)
    actorIframe.current.contentWindow.removeEventListener("actorReady", actorInit);
    actorIframe.current.contentWindow.addEventListener("actingFinished", actingFinished);
    theSituation.setActorState(actorData.handle, theSituation.getActorState(actorData.handle).name, true);
  }

  return (
    <>
      <iframe className={classNames('w-3/4', 'sm:w-3/4', 'md:w-2/3', 'lg:w-4/5', styles.messageBox, "noUserSelect", "noPointerEvents")} id="messageBox" src={actorData.src}></iframe>
      <iframe className={classNames(styles.messageNext, "noUserSelect", "noPointerEvents")} id="messageNext" src={actorData.nextButtonSrc}></iframe>
      <div onClick={theSituation.nextState} className={classNames(styles.messageNextClick, "noUserSelect")}></div>
    </>
  )
}

