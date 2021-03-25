import Head from 'next/head'
//import PlaybackActorPortrait from './PlaybackActorPortrait';
import PlaybackActorMeta from './actorMeta';
import dynamic from 'next/dynamic'

const ActorPortraitNoSSR = dynamic(
  () => import('./actorPortrait'),
  { ssr: false }
)

const PlaybackActor = ({ setup, state }) => {
  const animationSource = `/actors/$actorName/${state.playback.actor}.js`;
  return (
    <>
    <Head>
      <script src="/actors/Scoup/Scoup.js" type="text/javascript"></script>
    </Head>
    <div className="w-full sm:w-3/12 inline-block">
      <div className="w-1/2 sm:w-full lg:w-9/12 mx-auto">
        <ActorPortraitNoSSR state={state}/>
      </div>
      <PlaybackActorMeta state={state}/>
    </div>
    </>
  )
}

export default PlaybackActor;

/* Head doesn't load properly


*/