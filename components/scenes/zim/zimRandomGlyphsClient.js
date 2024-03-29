import { useEffect, useRef } from 'react'

const ZimRandomGlyphsClient = ({ glyphsList, amount = 5, zIndex = 2, minSize = 50, maxSize = 250}) => {
  const didMountRef = useRef(false);
  let frame;
  useEffect(()=> {
    if(didMountRef.current) {
      //don't rerender
    }
    else {
      const scaling = "full"; // this will resize to fit inside the screen dimensions
      const width = 1024;
      const height = 768;
      const color = clear; // ZIM colors like green, blue, pink, faint, clear, etc.
      const outerColor = "#dde26a"//dark; // any HTML colors like "violet", "#333", etc. are fine to use

      frame = new Frame(scaling, width, height, color, outerColor);
      
      frame.on("ready", () => { // ES6 Arrow Function - like function(){}
        frame.canvas.style.zIndex = zIndex;
        const stage = frame.stage;
        let stageW = frame.width;
        let stageH = frame.height;
        stage.update();
        
        addEmitter(glyphsList, stage);
        addEmitter(glyphsList, stage);
        for(let i = 0;i < amount;i++) {
          let randomGlyph = glyphsList[Math.floor(Math.random() * glyphsList.length)];
          let neobii = Math.floor(Math.random() * 2);
          let colors = ["red", "white", "blue"];
          let randomColor = Math.floor(Math.random() * colors.length)
          console.log("hi I'm a random color", randomColor)
          
          //let color = neobii? "red":"white";
          //console.log(color)
          let glyph = new Label({
            text: randomGlyph,
            color: colors[randomColor]
          });
          glyph.x = Math.floor(Math.random() * stageW);
          glyph.y = Math.floor(Math.random() * stageH);
          const dampen = stageW / 700;
          glyph.size = maxSize * Math.random() + (minSize * dampen);
          glyph.rotation = Math.floor(Math.random() * 360);
          stage.addChild(glyph);
          glyph.wiggle("y", glyph.y, 50, 50, .5, 1);
          glyph.drag({slide:true})
          glyph.addEventListener("slidestart", (e) => {glyph.pauseAnimate()})
          glyph.addEventListener('slidestop', (e) => {glyph.wiggle("x", glyph.y, 50, 50, 1, 2);})
        }
      }, 2200)
      didMountRef.current = true;
    }
    return function cleanup() {
      //frame.dispose();
      //clearInterval(interval)
    }
  });
  return null;
}

function addEmitter(glyphsList, stage) {
  let randomGlyph = glyphsList[Math.floor(Math.random() * glyphsList.length)];      
  var emitter = new zim.Emitter({
    obj: [new Label(randomGlyph)],
    force: 3,
    gravity: .6
  })
    .centerReg()
    .sca(5)
  stage.addChild(emitter)
  new MotionController(emitter, "mousemove", 200); 
}

export default ZimRandomGlyphsClient;