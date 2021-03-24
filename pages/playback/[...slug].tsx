import { useRouter } from 'next/router'
import Link from 'next/link'
import { GetStaticPaths } from 'next'
import Head from 'next/head';
import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate"
import styles from './[...slug].module.css'
import classNames from 'classnames'
import { useState } from 'react'

export default function playback({ setup, state, isLast }) {
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
      <title>{setup.name}</title>
    </Head>
    <div className={classNames(styles.playbackWrapper)}>
    <div className={classNames(styles.playback, "flex")}>
      <div className={classNames(styles.portrait, "flex-initial")}>
      <AnimateCC
        animationName="Scoup"
        getAnimationObject={getAnimationObject}
      />
      <div className={classNames(styles.handle)}>{state.handle}</div>
      </div>
      <div className="md:flex-1">
        <div className={classNames("md:flex md:justify-between", styles.header)}>
          <div className={classNames(styles.address)}>{setup.address}</div>
          <div className={classNames(styles.playbackTime)}>{state.time}</div>
        </div>
        <div className={classNames(styles.message)}><span className={classNames(styles.mood)}>{state.mood},</span> {state.message}</div>
    </div>
    </div>
    <hr/>
    <div className={classNames(styles.controls)}>
    {(+query.slug?.[1]-1 >= 0? (
      <Link href={"/playback/" + "theScoup" + "/" + (+query.slug?.[1] - 1) }>
        <div className={styles.prev}>←</div>
      </Link>
    ):null)}
    {!isLast? (
      <Link href={"/playback/" + "theScoup" + "/" + (+query.slug?.[1] + 1) }>
        <div className={styles.next}>→</div>
      </Link>
    ) : (
      <Link href={"/"}>
        <div className={styles.end}>x</div>
      </Link>
    )}
    </div>
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
    props: {setup: json.setup, state: json.states[context.params?.slug[1]], isLast: isLast},
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