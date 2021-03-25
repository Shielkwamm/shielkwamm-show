import styles from './Playback.module.css'
import classNames from 'classnames'
import PlaybackActor from './playbackActor/PlaybackActor'
import PlaybackHeader from './playbackHeader/PlaybackHeader'
import PlaybackNavigation from './playbackNavigation/PlaybackNavigation'
import PlaybackMessage from './playbackMessage/PlaybackMessage'
import Draggable, {DraggableCore} from 'react-draggable'

const Playback = ({ setup, state, isLast, query }) => (
  <Draggable><div className={classNames(styles.playbackWrapper)}>
    <PlaybackHeader setup={setup} state={state} />
    <PlaybackActor setup={setup} state={state}/>
    <PlaybackMessage setup={setup} state={state} />
    <hr/>
    <PlaybackNavigation setup={setup} state={state} query={query} isLast={isLast}/>
  </div>
  </Draggable>
)

export default Playback;