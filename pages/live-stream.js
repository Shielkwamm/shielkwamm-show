import ReactPlayer from 'react-player'
import ShWindow from '../components/shUI/window';
import { gql, useQuery } from '@apollo/client';
import ClientOnly from '../components/clientOnly';
import Head from 'next/head';

const LiveStream = () => {
  const twitchUrl = "https://www.twitch.tv/shielkwamm";
  return (
    <>
    <Head>
      <title>=== Shielkwamm 1 year anniversary ===</title>
      <meta
        name="description"
        content="=== Shielkwamm 1 year anniversary ==="
      />
      <meta property="og:title" content="=== Shielkwamm 1 year anniversary ===" />
      <meta property="og:url" content="https://shielkwamm.com/live-stream" />
      <meta property="og:image" content="https://github.com/Shielkwamm/shielkwamm-show/raw/main/public/bg.png" />
      <meta property="og:description" content="[+🎥] --> +△" />
    </Head>
    <ShWindow left={"Live Stream"} right={"+☴"}>
      <ClientOnly>
        <ReactPlayer width="100%" url={twitchUrl} />
      </ClientOnly>
    </ShWindow>
    </>
  )
}

export default LiveStream;