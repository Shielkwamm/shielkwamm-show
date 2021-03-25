import { useState } from 'react'
import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate"

const Ship = ({ label }) => {
  const [actorReady, setActorReady] = useState(false)
  const [animationObject, getAnimationObject] = useState<GetAnimationObjectParameter|null>(null);
  if(actorReady) { 
    console.log("ship ready")
    //animationObject.actor.gotoAndPlay();
  }
  if(animationObject) {
    console.log("animation object?")
    animationObject.addEventListener("actorReady", function() {
      setActorReady(true);
    })
  }
  return (
    <div className="fixed w-full h-full flex justify-center inset-0" >
      <div className="w-5/12 h-5/12 lg:w-2/12 lg:h-2/12 self-center">
      <AnimateCC
        animationName="Ship"
        getAnimationObject={getAnimationObject}
      />
      </div>
    </div>
  )
}

export default Ship;