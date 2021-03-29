import ShipTopNav from './topNav'
import ShipContentX from './contentX'
import ShipBottomNav from './bottomNav'

const ShipStatus = () => (
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
)

export default ShipStatus;