import styles from './actor.module.css'
import classNames from 'classnames'

const PlaybackActorMeta = ({ state }) => (
  <div className={classNames(styles.portraitMeta)}>
    <div className={classNames(styles.handle)}>{state.handle}</div>
    <div className={classNames(styles.mood)}>{state.mood}</div>
  </div>
)

export default PlaybackActorMeta;