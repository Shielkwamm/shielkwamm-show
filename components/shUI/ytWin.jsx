import { useEffect } from 'react'
import Script from 'next/script'
import React from 'react';
import ReactDOMServer from 'react-dom/server'

const YTWin = ({ children, title }) => {
  useEffect(() => {
    new WinBox({ 
    root: document.body,
    border: 4,
    width: 200,
    height: 200,
    x: "center",
    y: "center",
    max: false,
    splitscreen: true,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    html: ReactDOMServer.renderToStaticMarkup(children),
    title: title
    });
  }, [])
  return (
    <Script strategy="beforeInteractive" src="https://rawcdn.githack.com/nextapps-de/winbox/0.2.82/dist/winbox.bundle.min.js" />
  )
}

export default YTWin;
