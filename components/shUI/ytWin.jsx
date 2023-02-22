import { useEffect } from 'react'
import Script from 'next/script'
import React from 'react';
import ReactDOMServer from 'react-dom/server'

const YTWin = ({ children, title }) => {
  useEffect(() => {
    new WinBox({ 
      id: "my-window",
    root: document.body,
    border: 4,
    width: 200,
    height: 200,
    x: "right 20%",
    y: "bottom 20%",
    max: false,
    splitscreen: true,
    top: 50,
    right: 50,
    bottom: 0,
    left: 50,
    html: ReactDOMServer.renderToStaticMarkup(children),
    title: title
    });
  }, [])
  return (
    <Script strategy="beforeInteractive" src="https://rawcdn.githack.com/nextapps-de/winbox/0.2.0/dist/winbox.bundle.js" />
  )
}

export default YTWin;