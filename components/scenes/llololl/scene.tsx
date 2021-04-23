import Ship from '../percent20/ship/ship'
import dynamic from 'next/dynamic'

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