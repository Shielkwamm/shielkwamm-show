import AnimatedText from '../animatedText/animatedText'
import ProperShell from './shell'
import ClientOnly from '../../components/clientOnly';
import Link from 'next/link'

const Hud = ({ proper, show, currentRoom }) => {
  return (
    <>
      <Shell proper={proper} show={show} currentRoom={currentRoom}/>
      <Hero proper={proper} show={show} currentRoom={currentRoom}/>
      <Vibe proper={proper} show={show} currentRoom={currentRoom}/>
    </>
  )
}

export default Hud;

const Shell = ({ proper, show, currentRoom }) => {
  return (
    <>
      {proper?.shell && show.shellVisible ? (
        <ProperShell zIndex={3} currentRoom={currentRoom} proper={proper}/>
      ): null}
    </>
  )
}



const Hero = ({ proper, show, currentRoom }) => {
  return (
  <>
  {proper?.comm && show.heroVisible? (// 5x6
    <div style={{zIndex: 3, top: "25px"}} className="absolute">
      <Link href="/playback/theScoup/0">
        <div style={{fontSize: "45px", width: "45px", cursor: "grab"}} className="">
        <AnimatedText text="[ {🍦} ], [{{🍦}}], [  🍦  ]" />
        </div>
      </Link>
    </div>
  ): null}
  </>
  )
}

const Vibe = ({ proper, show, currentRoom }) => {
  return (
  <ClientOnly>
      {proper?.vibe && show.vibeVisible? (
        <>
      <div style={{zIndex: 3, bottom: 0, left: 0}} className="absolute">
        <Link href="/player"><div className="cursor-pointer">{currentRoom?.vibe} {currentRoom?.currentMusicTitle}</div></Link>
      </div>
        </>
      ): null }
      </ClientOnly>
  )
}

