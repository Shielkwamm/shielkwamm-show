import { useEffect, useRef } from 'react'
import Head from 'next/head'

const ZimLlololl = () => {
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
        let emojiArray = ['🗻', '👌', '🦓', '🧂', '🚴']
        var cp = new ColorPicker();
            cp.center();
            cp.on("change", function() {
              zog(cp.selectedColor); // #ffcc99, etc. after pressing OK
              zog(cp.selectedAlpha); // 0-1
              for(let i = 0;i < 15;i++) {
                let randomSize = 50 * Math.random() + 50;
                let randoPizzazz = pizzazz.makeShape("kidney", cp.selectedColor, randomSize);
                  let rando = new Label(emojiArray[Math.floor(Math.random() * emojiArray.length)]);
                  rando.x = Math.floor(Math.random() * width);
                  rando.y = Math.floor(Math.random() * height);
                  rando.size = randomSize;
                  rando.rotation = Math.floor(Math.random() * 360);
                  rando.addChildAt(randoPizzazz, 0)
                  stage.addChild(rando);
                  //rando.wiggle("y", rando.y, 10, 30, 3, 1);
                  rando.drag({slide:true})
                  rando.addEventListener("slidestart", (e) => {rando.pauseAnimate()})
                  rando.addEventListener('slidestop', (e) => {rando.wiggle("y", rando.y, 10, 30, 3, 1);})
                }
            });
            stage.update();
        
      }, 2200)
      didMountRef.current = true;
    }
    /*return function cleanup() {
      frame.dispose();
      clearInterval(interval)
    }*/
  });
  return null
}

export default ZimLlololl

//
//<script src="https://zimjs.org/cdn/physics_2.0.js"></script>