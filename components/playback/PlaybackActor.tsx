import { useState } from 'react'
import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate"
import styles from './PlaybackActor.module.css'
import classNames from 'classnames'

const PlaybackActor = ({ setup, state }) => {
  const [actorReady, setActorReady] = useState(false)

  const [animationObject, getAnimationObject] = useState<GetAnimationObjectParameter|null>(null);
  if(actorReady) { 
    animationObject.actor.gotoAndPlay(state.playback.name);
  }
  if(animationObject) {
    animationObject.actor.addEventListener("actorReady", function() {
      setActorReady(true);
    })
  }
  return (
    <div className="w-full sm:w-3/12 inline-block">
      <div className="w-1/2 sm:w-full lg:w-9/12 mx-auto">
        <AnimateCC
          animationName="Scoup"
          getAnimationObject={getAnimationObject}
        />
      </div>
      <div className={classNames(styles.portraitMeta)}>
        <div className={classNames(styles.handle)}>{state.handle}</div>
        <div className={classNames(styles.mood)}>{state.mood}</div>
      </div>
    </div>
  )
}

export default PlaybackActor;