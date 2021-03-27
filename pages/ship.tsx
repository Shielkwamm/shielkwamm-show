import Head from 'next/head';
import ShipContent from '../components/ship/shipContent'

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
    <div style={{zIndex: 667}} className="text-right border border-indigo-600 bottom-0 left-0 w-full h-full text-4xl text-center flex flex-col justify-between bg-pink-300 bg-opacity-75">
      <div className="flex-none grid grid-col-1 space-y-2.5">
        <a href="https://guide.shielkwamm.com">guide</a>
          <a href="https://acktueli.com">acktueli</a>
        </div>
        <div className="border border-indigo-600 flex-grow text-center text-2xl align-middle m-1 select-none">
          <ShipContent />
        </div>
        <div className="flex-none grid grid-col-1 space-y-4">
          <a href="http://sh.shielkwamm.com">shell</a>
          <a href="https://shielkwamm.net">shielkwammNet</a>
          <a href="https://github.com/orgs/Shielkwamm/projects">schedule</a>
        </div>
      </div>
    </>
  )
}

export default ShipPage;