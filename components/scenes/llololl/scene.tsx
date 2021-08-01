import Ship from '../percent20/ship/ship'
import dynamic from 'next/dynamic'
import Script from 'next/script'

const ZimLlolollNoSSR = dynamic(
  () => import('./zimLlololl'),
  { ssr: false }
)

const LlolollScene = () => (
  <>
    <div style={{zIndex: 4}}> 
      <ZimLlolollNoSSR />
    </div>
  </>
)

export default LlolollScene;