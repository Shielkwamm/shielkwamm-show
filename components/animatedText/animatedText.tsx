import { useEffect, useState } from 'react'

const AnimatedText = ({ text }) => {
  const animatedText = processText(text);
  return (
    <AnimatedTextText animatedText={animatedText} />
  )
}

export default AnimatedText;

const AnimatedTextText = ({ animatedText }) => {
  const frameRate = 12;
  const interval = 60000 / frameRate;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textState = animatedText.frames[currentTextIndex];
  useEffect(() => {
    setFrameEnd(getFrameLength(interval, animatedText.speed, textState.wait));
  }, [false]);

  const setFrameEnd = ( frameLength ) => {
    setTimeout(() => {
      setNextState();
    }, frameLength);
  }

  const setNextState = () => {
    const newFrame = (currentTextIndex >= animatedText.frames.length)? 0: currentTextIndex + 1;
    console.log(currentTextIndex, "current text index!", newFrame)
    setCurrentTextIndex(newFrame);
    setFrameEnd(getFrameLength(interval, animatedText.speed, textState.wait))
  }
  return (
    <h1>{textState.text}</h1>
  )
}

function getFrameLength(interval, speed, wait) {
  return 1500;
}

function processText(text) {
  const speed = 5;
  const repeat = true;
  const playTime = 20;
  return {
    speed: speed,
    repeat: repeat,
    playtime: playTime,
    frames: [{
      text: "boop",
      wait: 2
    },{
      text: "beep",
      wait: 3
    },
    {
      text: "bolt",
      wait: 1
    }
  ]
  }
}