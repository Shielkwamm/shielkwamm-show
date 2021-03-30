import { useEffect, useState, useRef } from 'react'
import { processText, getKeyFrameLength } from '../../lib/animatedText';

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
  const textState = animatedText.keyFrames[currentTextIndex];
  const keyFrames = animatedText.keyFrames;
  const [animationStopped, setAnimationStopped] = useState(false);
 
  const setFrameEnd = ( frameLength ) => {
    return new Promise(r => setTimeout(r, frameLength));
  }

  const startTimer = () => {
    setFrameEnd(getKeyFrameLength(interval, textState.wait)).then(()=> {
      if(!animationStopped) {
        setNextState(currentTextIndex);
      }
    })
  }
  
  const setNextState = (currentTextIndex) => {
    const newFrame = getNextState(currentTextIndex, keyFrames);
    setCurrentTextIndex(newFrame);
    startTimer();
  }

  const stopAnimation = () => {
    setAnimationStopped(true);
    setCurrentTextIndex(0);
  }

  useEffect(() => {
    startTimer();
  }, []);
  return (
    <h1>{textState.text}</h1>
  )
}

const getNextState = (currentTextIndex, keyFrames) => {
  return (currentTextIndex >= keyFrames.length - 1)? 0: currentTextIndex + 1
}