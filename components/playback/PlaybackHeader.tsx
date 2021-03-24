import classNames from 'classnames'
import styles from './PlaybackHeader.module.css'
import Link from 'next/link'

const PlaybackHeader = ({ setup, state }) => (
  <div className={classNames("md:flex md:justify-between", styles.header)}>
    <div className={classNames(styles.address)}>{setup.address}</div>
    <div className={classNames(styles.playbackTime)}>{state.time}</div>
    <Link href={"/"}>
      <div className={classNames(styles.closeButton)}>x</div>
    </Link>
  </div>
)

export default PlaybackHeader;