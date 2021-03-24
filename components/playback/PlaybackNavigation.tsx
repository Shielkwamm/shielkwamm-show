import classNames from 'classnames'
import Link from 'next/link'
import styles from './PlaybackNavigation.module.css'

const PlaybackNavigation = ({ setup, state, query, isLast }) => (
  <div className={classNames(styles.controls)}>
    {(+query.slug?.[1]-1 >= 0? (
      <Link href={"/playback/" + "theScoup" + "/" + (+query.slug?.[1] - 1) }>
        <div className={styles.prev}>←</div>
      </Link>
    ):null)}
    {!isLast? (
      <Link href={"/playback/" + "theScoup" + "/" + (+query.slug?.[1] + 1) }>
        <div className={styles.next}>→</div>
      </Link>
    ) : (
      null
    )}
    </div>
)

export default PlaybackNavigation;