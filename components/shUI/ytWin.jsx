import { useEffect } from 'react'
import Script from 'next/script'

const YTWin = () => {
  useEffect(() => {
    new WinBox({ 
      id: "my-window",
    root: document.body,
    title: "All Options",
    border: 4,
    width: 200,
    height: 200,
    x: "center",
    y: "center",
    max: false,
    splitscreen: true,
    top: 50,
    right: 50,
    bottom: 0,
    left: 50,
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tN12Tg5ttpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    });
  }, [])
  return (
    <Script strategy="beforeInteractive" src="https://rawcdn.githack.com/nextapps-de/winbox/0.2.0/dist/winbox.bundle.js" />
  )
}

export default YTWin;