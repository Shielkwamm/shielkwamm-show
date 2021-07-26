
import dynamic from 'next/dynamic'

const ClientComp = dynamic(
  () => import('./p5js'),
  { ssr: false }
)

const P5jsClient = ( props ) => {
  return (
  <>
    <ClientComp/>
  </>
  )
}

export default P5jsClient;