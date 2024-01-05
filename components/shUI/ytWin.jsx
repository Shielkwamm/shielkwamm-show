import { useEffect } from 'react'
import Script from 'next/script'
import React from 'react';
import ReactDOMServer from 'react-dom/server'

const YTWin = ({ children, title, x, y, hidden }) => {
  useEffect(() => {
    new WinBox({ 
    root: document.body,
    border: 4,
    width: 200,
    height: 200,
    max: false,
    splitscreen: true,
    x: x,
    y: y,
    hidden: hidden,
    html: ReactDOMServer.renderToStaticMarkup(children),
    title: title
    });
  }, [])
  return (
    <Script strategy="beforeInteractive" src="https://rawcdn.githack.com/nextapps-de/winbox/0.2.82/dist/winbox.bundle.min.js" />
  )
}

export default YTWin;
