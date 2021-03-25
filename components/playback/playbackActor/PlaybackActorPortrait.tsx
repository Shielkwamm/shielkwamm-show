import { useState } from 'react'
import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate"

const PlaybackActorPortrait = ({ state }) => {
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
  ////{animationSource}
  return (
    <AnimateCC
      animationName={state.playback.actor}
      getAnimationObject={getAnimationObject}
    />
  )
}

export default PlaybackActorPortrait;