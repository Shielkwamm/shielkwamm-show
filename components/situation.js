import { useEffect, useState, useRef } from 'react'
import styles from './situation.module.css'
import classNames from 'classnames'
import ActorPortrait from './actorPortrait'
import MessageBox from './messageBox'
import processTheSituation  from './processTheSituation'
import Head from 'next/head'
import React from 'react'

function SituationInner({ theSetup }) {
  const [isSituationOpen, setIsSituationOpen] = useState(false);
  let burgerStyles = ['flex', 'mb-4', styles.viewScreen];
  if(isSituationOpen) {
    burgerStyles.push(styles.showBurger);
  }
  const toggleSituation = () => {
    if(!isSituationOpen) {
      setIsSituationOpen(true);
      theSituation.startSituation();
    }
    else if(isSituationOpen) {
      theSituation.endSituation()
    }
  }

  const cleanUpSituation = (e) => {
    setIsSituationOpen(false)
  }

  useEffect(() => {
    window.addEventListener("situationFinished", cleanUpSituation);
    return function cleanup() {
      window.removeEventListener("situationFinished", cleanUpSituation);
    }
  })

  return (
    <>
      {isSituationOpen ? (
        <>
        <Head><title>{theSetup.header}</title></Head>
        </>
      ): null }
      <div className={classNames(burgerStyles)}>
        {theSetup.actors.map(actor => (
          <React.Fragment key={actor.handle}>
          {actor.type === "basic" ? (
            <ActorPortrait actorData={actor} />
          ): null}
          {actor.type === "messageBox" ?(
            <MessageBox actorData={actor} />
          ): null}
          </React.Fragment>
        ))}
      </div>
      <div onClick={toggleSituation} className={styles.burgerPhone}>{theSetup.toggle.text}</div>
    </>
  )
}

export default function Situation({ theSituationJSON }) {
  let [situationSetup, setSituationSetup] = useState(false);

  useEffect(() => {
    if(!situationSetup) {
      fetch(theSituationJSON)
        .then(response => response.json())
        .then(data => {
          window.theSituation = processTheSituation(data);
          setSituationSetup(data.theSetup);
        })
    }
  })
  return (
    <>
    {situationSetup? (
      <SituationInner theSetup={situationSetup}/>
    ): null }
    </>
  )
}