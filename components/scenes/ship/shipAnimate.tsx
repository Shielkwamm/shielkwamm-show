import { useState } from 'react'
import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate"

const ShipAnimate = ({}) => {
  const [actorReady, setActorReady] = useState(false)
  const [animationObject, getAnimationObject] = useState<GetAnimationObjectParameter|null>(null);
  if(actorReady) { 
    //animationObject.actor.gotoAndPlay();
  }
  if(animationObject) {
    animationObject.addEventListener("actorReady", function() {
      setActorReady(true);
    })
  }
  return (
    <AnimateCC
      animationName="Ship"
      getAnimationObject={getAnimationObject}
    />
  )
}

export default ShipAnimate;