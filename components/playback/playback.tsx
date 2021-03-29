import PlaybackActor from './actor/actor'
import PlaybackNavigation from './navigation/navigation'
import PlaybackMessage from './message/message'
import { Resizable } from 're-resizable'
import React from 'react'
import ShWindow from '../shUI/window'

const Playback = ({ setup, state, isLast, query }) => (
  <ShWindow left={setup.address} right={state.time}>  
    <PlaybackActor setup={setup} state={state}/>
    <Resizable>
      <PlaybackMessage setup={setup} state={state} />
    </Resizable>
    <hr/>
    <PlaybackNavigation setup={setup} state={state} query={query} isLast={isLast}/>
  </ShWindow>
)

export default Playback;

