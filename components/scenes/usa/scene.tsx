import Ship from '../percent20/ship/ship'
import dynamic from 'next/dynamic'

const ZimEaglesNoSSR = dynamic(
  () => import('./zimEagles'),
  { ssr: false }
)

const UsaScene = () => (
  <>
    <Ship label="down"/>
    <ZimEaglesNoSSR />
  </>
)

export default UsaScene;