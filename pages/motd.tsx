import Head from 'next/head'
import useSetup from '../lib/useSetup'
import dynamic from 'next/dynamic'
import Actor from '../components/Actor'

/*const Actor = dynamic(
  () => import('../components/Actor'),
  { ssr: false }
)

const TestComponent = dynamic(
  () => import('../components/TestComponent'),
  {ssr: false}
)*/

export default function Motd () {
  const theSetup = useSetup("/TheScoup.json");
  console.log(theSetup)
  return (
    <>
    <Head>
      <title>△^best</title>
      <meta
        name="description"
        content="If you wanna get a good look at a good ===>shkwam===>, well, take a look at these."
      />
      </Head>
      <Actor src="" animationName=""/>
    </>
  )
}