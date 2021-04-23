import Ship from '../percent20/ship/ship'
import dynamic from 'next/dynamic'

const ZimEaglesNoSSR = dynamic(
  () => import('./zimEagles'),
  { ssr: false }
)

const Scene = () => (
  <>
    <Ship label="down"/>
    <ZimEaglesNoSSR />
  </>
)

export default Scene;