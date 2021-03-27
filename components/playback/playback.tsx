import styles from './playback.module.css'
import classNames from 'classnames'
import PlaybackActor from './actor/actor'
import PlaybackHeader from './header/header'
import PlaybackNavigation from './navigation/navigation'
import PlaybackMessage from './message/message'
import Draggable, {DraggableCore} from 'react-draggable'
import { Resizable } from 're-resizable';

const Playback = ({ setup, state, isLast, query }) => (
  <Draggable cancel=".noDrag">
    <div className={classNames(styles.playbackWrapper)}>
    <PlaybackHeader setup={setup} state={state} />
    <div className="noDrag">
    
    <PlaybackActor setup={setup} state={state}/>
    <Resizable>
    <PlaybackMessage setup={setup} state={state} />
    </Resizable>
    <hr/>
    <PlaybackNavigation setup={setup} state={state} query={query} isLast={isLast}/>
    </div>
    </div>
  </Draggable>
)

export default Playback;