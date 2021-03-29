import styles from './playback.module.css'
import classNames from 'classnames'
import PlaybackActor from './actor/actor'
import PlaybackHeader from './header/header'
import PlaybackNavigation from './navigation/navigation'
import PlaybackMessage from './message/message'
import Draggable, {DraggableCore} from 'react-draggable'
import { Resizable } from 're-resizable'
import React from 'react'

const Playback = ({ setup, state, isLast, query }) => (
  <ShUI setup={setup} state={state} isLast={isLast} query={query}>  
    <PlaybackActor setup={setup} state={state}/>
    <Resizable>
      <PlaybackMessage setup={setup} state={state} />
    </Resizable>
    <hr/>
    <PlaybackNavigation setup={setup} state={state} query={query} isLast={isLast}/>
  </ShUI>
)

export default Playback;

const ShUI = ({ children, setup, state, isLast, query }) => {
  let newChildren = React.cloneElement(children, { setup: setup, state: state, isLast: isLast, query: query })
  return (
  <div style={{zIndex: 1000, position: "relative"}}>
    <Draggable cancel=".noDrag">
      <div className={classNames(styles.playbackWrapper)}>
        <PlaybackHeader setup={setup} state={state} />
        <div className="noDrag">
          {children}
        </div>
      </div>
    </Draggable>
  </div>
  )
}