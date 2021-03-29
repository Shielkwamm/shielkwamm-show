import { useEffect, useState, useRef } from 'react'

const AnimatedText = ({ text }) => {
  const animatedText = processText(text);
  return (
    <AnimatedTextText animatedText={animatedText} />
  )
}

export default AnimatedText;

class AnimatedTextTimer {
  public frameRate = 12;
  public interval = 60000 / this.frameRate;
  public timer;

  #setFrameEnd = ( frameLength ) => {
    return new Promise(r => setTimeout(r, frameLength));
  }

  public clearTimer = () => {

  }

  startTimer = () => {
    this.#setFrameEnd(500).then(()=> {
      console.log("woo")
    })
  }

  #getFrameLength = (interval, speed, wait) => {
    return 1500;
  }
}

const AnimatedTextText = ({ animatedText }) => {
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textState = animatedText.keyFrames[currentTextIndex];
  const keyFrames = animatedText.keyFrames;
  const timer = useRef(new AnimatedTextTimer);
  timer.current.startTimer();
  
  /*
  useEffect(() => {
    setFrameEnd(getFrameLength(interval, animatedText.speed, textState.wait));
    return () => {
      clearTimeout(pauseTimer.current)
    }
  }, [false]);

  

  const setNextState = () => {
    const newFrame = (currentTextIndex >= keyFrames.length)? 0: currentTextIndex + 1;
    console.log(currentTextIndex, newFrame)
    setFrameEnd(getFrameLength(interval, animatedText.speed, textState.wait))
    setCurrentTextIndex(newFrame);
    console.log("setting end");
  }
  */
  return (
    <h1>{textState.text}</h1>
  )
}

function processText(text) {
  const speed = 5;
  const repeat = true;
  const playTime = 20;///\[.*?\]/g
  let matches = text.matchAll(/\[(.*?)\]/g);
  let keyFrames = [];
  for (const match of matches) {
    keyFrames.push({
      text: match[1],
      wait: 1
    })
  }
  return {
    speed,
    repeat,
    playTime,
    keyFrames,
    originalText: "[ {🍦} ], [{{🍦}}], [  🍦  ]"
  }
}