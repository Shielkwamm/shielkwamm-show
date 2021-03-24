import { useRouter } from 'next/router'
import Head from 'next/head';
import Playback from '../../components/playback/Playback';

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