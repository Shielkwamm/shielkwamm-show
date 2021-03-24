import styles from './Playback.module.css'
import classNames from 'classnames'
import PlaybackActor from './PlaybackActor'
import PlaybackHeader from './PlaybackHeader'
import PlaybackNavigation from './PlaybackNavigation'
import PlaybackMessages from './PlaybackMessages'

const Playback = ({ setup, state, isLast, query }) => (
  <div className={classNames(styles.playbackWrapper)}>
    <PlaybackHeader setup={setup} state={state} />
    <div className={classNames(styles.playback)}>
      <PlaybackActor setup={setup} state={state}/>
      <PlaybackMessages setup={setup} state={state} />
    </div>
    <hr/>
    <PlaybackNavigation setup={setup} state={state} query={query} isLast={isLast}/>
  </div>
)

export default Playback;