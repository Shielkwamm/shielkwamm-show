import styles from './PlaybackMessage.module.css'
import classNames from 'classnames'

const PlaybackMessages = ({ setup, state }) => (
  <div className="w-full sm:w-9/12 inline-block">
    <div className={classNames(styles.message)}> {state.message}</div>
  </div>
)

export default PlaybackMessages;