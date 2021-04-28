import Head from 'next/head';
import ShipStatus from '../components/ship/status'

const ship = "( { ship } )";
//I just like this title
//<title>△^best</title>

const ShipPage = () => {
  const sh = "△";
  return (
    <>
    <Head>
      <title>{ ship }</title>
      <meta
        name="description"
        content="If you wanna get a good look at a good ===>shkwam===>, well, take a look at these."
      />
    </Head>
    <ShipStatus />
    </>
  )
}

export default ShipPage;

export async function getStaticProps(context) {
  const jsonUrl = "https://shielkwamm.s3.us-east-2.amazonaws.com/show/percent20.json"; //"http://localhost:3000/theScoup.json";
  const response = await fetch(jsonUrl);
  const json = await response.json();

  return {
    props: {
      //actorSetup: actorJson.setup;
      room: json
    },
  }
}