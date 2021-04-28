import { useRouter } from 'next/router'
import Head from 'next/head';
import Playback from '../../components/playback/playback';

export default function playback({ setup, state, isLast }) {
  let routerProps = useRouter();
  let query = routerProps?.query;

  return (
    <>
    <Head>
      <title>{setup.name}</title>
    </Head>
    <Playback setup={setup} state={state} isLast={isLast} query={query}/>
    </>
  );
}

export async function getStaticProps(context) {
  const jsonUrl = "https://shielkwamm.s3.us-east-2.amazonaws.com/show/theScoup.json"; //"http://localhost:3000/theScoup.json";
  const response = await fetch(jsonUrl);
  const json = await response.json();

  const state = json.states[context.params?.slug[1]];
  const isLast = context.params?.slug[1] >= json.states.length - 1;

  //const actorJsonUrl = "https://state.playback.actor";
  //const actorJson = await fetch(jsonUrl);
  

  return {
    props: {
      //actorSetup: actorJson.setup;
      setup: json.setup,
      state: state,
      isLast: isLast
    },
  }
}

export async function getStaticPaths() {
  let jsonUrl = "https://shielkwamm.s3.us-east-2.amazonaws.com/show/theScoup.json";
  const response = await fetch(jsonUrl);
  let json = await response.json()

  const paths = json.states.map((state, index) => ({
    params: { slug: [json.setup.name, index.toString()]},
  }))

  return {paths, fallback: false};
}