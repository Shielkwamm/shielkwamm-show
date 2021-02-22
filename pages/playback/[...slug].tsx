import { useRouter } from 'next/router'
import Link from 'next/link'
import { GetStaticPaths } from 'next'
import Head from 'next/head';
import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate"
import styles from './[...slug].module.css'
import classNames from 'classnames'
import { useState } from 'react'

export default function playback({ state, isLast }) {
  let routerProps = useRouter();
  let query = routerProps?.query;
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
  const onClick = () => {
    animationObject.actor.addEventListener("actingFinished", function() {console.log("actingFinished")})
  }

  return (
    <>
    <Head>
      <title>The Scoup</title>
    </Head>
    <div className={classNames(styles.playback)}>
    <div>
      <AnimateCC
        animationName="Scoup"
        getAnimationObject={getAnimationObject}
      />
    </div>
    <div>{state.time} {state.handle}: {state.mood}, {state.message}</div>
    </div>
    <div className={styles.controls}>
    {(+query.slug?.[1]-1 >= 0? (
      <div className={styles.prev}>
      <Link href={"/playback/" + "theScoup" + "/" + (+query.slug?.[1] - 1) }>Back</Link>
      </div>
    ):null)}
    {!isLast? (
    <div className={styles.next}>
      <Link href={"/playback/" + "theScoup" + "/" + (+query.slug?.[1] + 1) }>Next</Link>
    </div>
    ) : (
      <div className={styles.next}>
        <Link href={"/"}>End</Link>
      </div>
    )}
    </div>
    </>
  );
}

export async function getStaticProps(context) {
  let jsonUrl = "https://raw.githubusercontent.com/Shielkwamm/shielkwamm/master/public/theScoup.json";
  const response = await fetch(jsonUrl);
  let json = await response.json()
  let isLast = context.params?.slug[1] >= json.states.length - 1
  return {
    props: {state: json.states[context.params?.slug[1]], isLast: isLast},
  }
}

export async function getStaticPaths() {
  let jsonUrl = "https://raw.githubusercontent.com/Shielkwamm/shielkwamm/master/public/theScoup.json";
  const response = await fetch(jsonUrl);
  let json = await response.json()

  const paths = json.states.map((state, index) => ({
    params: { slug: [json.setup.name, index.toString()]},
  }))

  return {paths, fallback: false};
}