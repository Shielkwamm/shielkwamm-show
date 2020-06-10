import Head from 'next/head'
import { useEffect } from 'react'

export default function Zim () {
  useEffect(()=> {
    const scaling = "full"; // this will resize to fit inside the screen dimensions
    const width = 1024;
    const height = 768;
    const color = clear; // ZIM colors like green, blue, pink, faint, clear, etc.
    const outerColor = dark; // any HTML colors like "violet", "#333", etc. are fine to use

    const frame = new Frame(scaling, width, height, color, outerColor);
    frame.on("ready", () => { // ES6 Arrow Function - like function(){}
      var interval
      const stage = frame.stage;
      let stageW = frame.width;
      let stageH = frame.height;
      let bcircle = new Circle(100, pink)
          .center()
          .drag()
      stage.update();
      fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=14')
        .then(response => response.json())
        .then(catFacts => {
          catFacts.forEach(catFact => {
            var label = new Label(catFact.text)
            stage.addChild(label);
            label.x = Math.floor(Math.random() * 500);
            label.y = Math.floor(Math.random() * 500);
            label.rotation = Math.floor(Math.random() * 360);
            label.drag()
          })
        })
    }, 2200)
    return function cleanup() {
      frame.dispose();
      clearInterval(interval)
    }
  });
  return (
    <>
    </>
  )
}