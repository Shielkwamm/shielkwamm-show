import classNames from 'classnames'
import Link from 'next/link'
import styles from './navigation.module.css'

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
      <div className="noDrag">
        <Link scroll={false} href={"/playback/" + "theScoup" + "/" + (+query.slug?.[1] - 1) }>
          <div className={styles.navigationButton}>{"<--"}</div>
        </Link>
      </div>
    ):null)}
  </>
)

const PlaybackNavigationNext = ({ query, isLast}) => (
  <>
  {!isLast? (
    <div className="noDrag">
      <Link scroll={false} href={"/playback/" + "theScoup" + "/" + (+query.slug?.[1] + 1) }>
        <div className={styles.navigationButton}>{"-->"}</div>
      </Link>
    </div>
  ) : (
    <div className="noDrag">
      <Link href={"/"}>
        <div className={styles.navigationButton}>{"--> #[]"}</div>
      </Link>
    </div>
  )}
  </>
)