import { useState } from 'react'
import Head from 'next/head'
import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate"
import useSetup from '../lib/useSetup'

export default function Actor({ src, animationName }) {
  const [paused, setPaused] = useState(true);
  const [animationObject, getAnimationObject] = useState<GetAnimationObjectParameter|null>(null);
  if(animationObject) {
    animationObject.actor.addEventListener("actorReady", function() {animationObject.actor.play();})
  }
  const onClick = () => {
    animationObject.actor.addEventListener("actingFinished", function() {console.log("actingFinished")})
    animationObject.actor.play();
  }
  return (
    <>
    <AnimateCC
        animationName="Scoup"
        getAnimationObject={getAnimationObject}
       // paused={paused}
      />
    </>
  )
}

/*
   

    
      

      */