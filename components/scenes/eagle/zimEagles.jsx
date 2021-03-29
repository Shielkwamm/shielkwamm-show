import { useEffect, useRef } from 'react'

const ZimBig = () => {
  const didMountRef = useRef(false);
  useEffect(()=> {
    if(didMountRef.current) {
      //don't rerender
    }
    else {
      const scaling = "full"; // this will resize to fit inside the screen dimensions
      const width = 1024;
      const height = 768;
      const color = clear; // ZIM colors like green, blue, pink, faint, clear, etc.
      const outerColor = dark; // any HTML colors like "violet", "#333", etc. are fine to use

      const frame = new Frame(scaling, width, height, color, outerColor);
      frame.on("ready", () => { // ES6 Arrow Function - like function(){}
        frame.canvas.style.zIndex = 2;
        var interval
        const stage = frame.stage;
        let stageW = frame.width;
        let stageH = frame.height;
        stage.update();
        for(let i = 0;i < 5;i++){
            let eagle = new Label("🦅")
            eagle.x = Math.floor(Math.random() * width);
            eagle.y = Math.floor(Math.random() * height);
            eagle.size = 300 * Math.random() + 50;
            eagle.rotation = Math.floor(Math.random() * 360);
            stage.addChild(eagle);
            eagle.wiggle("y", eagle.y, 10, 30, 3, 1);
            eagle.drag({slide:true})
            eagle.addEventListener("slidestart", (e) => {eagle.pauseAnimate()})
            eagle.addEventListener('slidestop', (e) => {eagle.wiggle("y", eagle.y, 10, 30, 3, 1);})
          }
      }, 2200)
      didMountRef.current = true;
    }
    /*return function cleanup() {
      frame.dispose();
      clearInterval(interval)
    }*/
  });
  return null;
}

export default ZimBig