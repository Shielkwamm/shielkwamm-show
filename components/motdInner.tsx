import { useState } from 'react'
import Head from 'next/head';
import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate";

export default function MotdInner({ theSetup }) {
  //const [paused, setPaused] = useState(true);
  const [animationObject, getAnimationObject] = useState<GetAnimationObjectParameter|null>(null);
  const [paused, setPaused] = useState(true);
  if(animationObject) {
    console.log(animationObject)
    animationObject.actor.addEventListener("actorReady", function() {console.log("Actor Inited")})
  }
  const onClick = () => {
    animationObject.actor.addEventListener("actingFinished", function() {console.log("actingFinished")})
    animationObject.actor.play();
  }
  return (
  <>
    <Head>
    <script src="/TheScoup/Scoup.js" type="text/javascript"></script>
    </Head>
        <AnimateCC
          animationName="Scoup"
          getAnimationObject={getAnimationObject}
          //paused={paused}
        />
      <button style={{ position: "fixed", top: 0, right: 0}} onClick={onClick}>{paused ? "Unpause" : "Pause"}</button><br />
    </>
  )
}