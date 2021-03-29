import Head from 'next/head';
import ShipContent from '../components/ship/shipContent'
import AnimatedText from '../components/animatedText/animatedText'

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
    <div style={{height: "100%", width: "100%"}} className="border border-indigo-600 text-4xl flex flex-col justify-between bg-pink-300 bg-opacity-75">
      <div>
        <ShipTopNav />
      </div>
        <div style={{overflow: "auto"}} className="flex-grow border border-indigo-600">
          <ShipContentX />
        </div>
        <div>
          <ShipBottomNav />        
        </div>
      </div>
    </>
  )
}

export default ShipPage;

const ShipTopNav = () => (
  <div style={{paddingRight: "8px"}} className="grid grid-col-1 space-y-2.5 text-right">
    <a href="https://guide.shielkwamm.com">guide</a>
    <a href="https://acktueli.com">acktueli</a>
  </div>
)

const ShipContentX = () => (
  <div className="text-center text-2xl align-middle m-1">
    <AnimatedText text={"[ [boop,..], [beep,...], [bolt,.]],.."}/>
    <ShipContent />
  </div>
)

const ShipBottomNav = () => (
  <div style={{paddingRight: "8px"}} className="grid grid-col-1 space-y-4 text-right ">
    <a href="http://sh.shielkwamm.com">shell</a>
    <a href="https://shielkwamm.net">shielkwamm.net</a>
    <a href="https://github.com/orgs/Shielkwamm/projects">schedule</a>
  </div>
)