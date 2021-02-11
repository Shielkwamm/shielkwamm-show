import { useState, useRef, useEffect } from 'react'
import styles from './messageBox.module.css'
import classNames from 'classnames'

export default function messageBoxCSS({ actorData }) {
  return (
    <>
      <div onClick={theSituation.nextState} className={classNames(styles.messageNextClick, "noUserSelect")}>%</div>
    </>
  )
}

