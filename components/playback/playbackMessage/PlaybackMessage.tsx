import styles from './PlaybackMessage.module.css'
import classNames from 'classnames'

const PlaybackMessage = ({ setup, state }) => (
  <div className="w-full sm:w-9/12 inline-block">
    <div className="py-20 text-purple-800"> {state.message}</div>
  </div>
)

export default PlaybackMessage;