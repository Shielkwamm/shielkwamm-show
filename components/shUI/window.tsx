import React from 'react'
import Draggable, {DraggableCore} from 'react-draggable'
import ShWindowHeader from './windowHeader'
import styles from './window.module.css'
import classNames from 'classnames'

const ShWindow = ({ children, left, right }) => {
  let newChildren = React.cloneElement(children)
  return (
  <div style={{zIndex: 1000, position: "relative"}}>
    <Draggable cancel=".noDrag">
      <div className={classNames(styles.playbackWrapper)}>
        <ShWindowHeader left={left} right={right}/>
        <div className="noDrag">
          {children}
        </div>
      </div>
    </Draggable>
  </div>
  )
}

export default ShWindow;

/*
setup, state, isLast, query

*/