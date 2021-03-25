import classNames from 'classnames'
import Link from 'next/link'
import styles from './PlaybackNavigation.module.css'

const PlaybackNavigation = ({ setup, state, query, isLast }) => (
  <div className={classNames(styles.controls, "flex justify-content")}>
    <PlaybackNavigationPrevious query={query} />
    <div className="flex-grow"></div>
    <PlaybackNavigationNext query={query} isLast={isLast} />
    </div>
)

export default PlaybackNavigation;

const PlaybackNavigationPrevious = ({ query }) => (
  <>
    {(+query.slug?.[1]-1 >= 0? (
      <Link href={"/playback/" + "theScoup" + "/" + (+query.slug?.[1] - 1) }>
        <div className={styles.navigationButton}>{"<--"}</div>
      </Link>
    ):null)}
  </>
)

const PlaybackNavigationNext = ({ query, isLast}) => (
  <>
  {!isLast? (
    <Link href={"/playback/" + "theScoup" + "/" + (+query.slug?.[1] + 1) }>
      <div className={styles.navigationButton}>{"-->"}</div>
    </Link>
  ) : (
    <Link href={"/"}>
      <div className={styles.navigationButton}>{"--> #[]"}</div>
    </Link>
  )}
  </>
)