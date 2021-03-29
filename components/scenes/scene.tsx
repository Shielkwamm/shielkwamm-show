import ZimEagles from './eagle/zimEagles'
import Ship from './ship/ship'

const Scene = () => (
  <>
    <div style={{zIndex: 1}}>
      <Ship label="down"/>
    </div>
    <div style={{zIndex: 4}}> 
      <ZimEagles />
    </div>
  </>
)

export default Scene;