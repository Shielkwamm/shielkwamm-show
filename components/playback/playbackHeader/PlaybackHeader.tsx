import PlaybackCloseButton from './PlaybackCloseButton'

const PlaybackHeader = ({ setup, state }) => (
  <div className="md:flex md:justify-between bg-gray-900 bg-opacity-10">
    <div className="py-2 px-3 text-yellow-800">{setup.address}</div>
    <div className="py-2 px-3 text-indigo-900">{state.time}</div>
    <PlaybackCloseButton />
  </div>
)

export default PlaybackHeader;