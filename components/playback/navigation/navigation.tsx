import classNames from 'classnames'
import Link from 'next/link'
import styles from './navigation.module.css'
import { useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'

const PlaybackNavigation = ({ setup, state, query, isLast }) => {
  const router = useRouter();

  const handleNavigation = useCallback(
    event => {
      console.log("c'mon")
      const keyName = event.key;
      switch(keyName) {
        case "ArrowLeft":
          const prev = +query.slug?.[1] - 1;
          const previous = "/playback/" + "theScoup" + "/" + prev
          if(prev >= 0) router.push(previous);
        break;
        case "ArrowRight":
          const next = (isLast)? "/" : "/playback/" + "theScoup" + "/" + (+query.slug?.[1] + 1);
          router.push(next);
        break;
      }
    }, [query, isLast]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleNavigation);
    return () => {
      document.removeEventListener('keydown', handleNavigation);
    }
  })
  return (
    <div className={classNames(styles.controls, "flex justify-content")}>
      <PlaybackNavigationPrevious query={query} />
      <div className="flex-grow"></div>
      <PlaybackNavigationNext query={query} isLast={isLast} />
    </div>
  )
}




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

/*
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  */