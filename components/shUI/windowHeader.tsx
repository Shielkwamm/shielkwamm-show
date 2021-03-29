import ShWindowCloseButton from './closeButton';

const ShWindowHeader = ({left,  right}) => (
  <div className="playback-header flex justify-between bg-gray-900 bg-opacity-10">
    <div className="order-1 py-2 px-3 text-yellow-800">{left}</div>
    <div className="order-2 flex-grow"/>
    <div className="order-4 sm:order-3 sm:w-auto py-2 px-3 text-indigo-900">{right}</div>
    <ShWindowCloseButton />
  </div>
)

export default ShWindowHeader;