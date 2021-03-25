import styles from './playback.module.css'
import classNames from 'classnames'
import PlaybackActor from './actor/actor'
import PlaybackHeader from './header/header'
import PlaybackNavigation from './navigation/navigation'
import PlaybackMessage from './message/message'
import Draggable, {DraggableCore} from 'react-draggable'
import { Resizable, ResizableBox } from 'react-resizable';

const Playback = ({ setup, state, isLast, query }) => (
  <Draggable cancel=".noDrag">
    <div className={classNames(styles.playbackWrapper)}>
    <PlaybackHeader setup={setup} state={state} />
    
    <PlaybackActor setup={setup} state={state}/>
    
    <PlaybackMessage setup={setup} state={state} />
    <hr/>
    <PlaybackNavigation setup={setup} state={state} query={query} isLast={isLast}/>
    </div>
  </Draggable>
)

export default Playback;