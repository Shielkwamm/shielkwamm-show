import Head from 'next/head'
import dynamic from 'next/dynamic'

const ShipNoSSR = dynamic(
  () => import('./shipAnimate'),
  { ssr: false }
)
//<ShipNoSSR />
const Ship = ({ label }) => (
  <>
    <Head>
      <script src="https://shielkwamm.s3.us-east-2.amazonaws.com/show/Ship/Ship.js" type="text/javascript"></script>
    </Head>
    <div style={{zIndex: 1}} className="fixed w-full h-full flex justify-center inset-0" >
      <div className="w-5/12 h-5/12 lg:w-2/12 lg:h-2/12 self-center">
        <ShipNoSSR/>
      </div>
    </div>
  </>
)

export default Ship;
