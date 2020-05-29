import Head from 'next/head'
import { useEffect, componentWillUnmount } from 'react'
import Layout from '../components/layout'

export default function Zim () {
  var frame;
  useEffect(()=> {
    //alert(JSON.stringify(catFact))
    
    const scaling = "full"; // this will resize to fit inside the screen dimensions
    const width = 1024;
    const height = 768;
    const color = clear; // ZIM colors like green, blue, pink, faint, clear, etc.
    const outerColor = dark; // any HTML colors like "violet", "#333", etc. are fine to use

    frame = new Frame(scaling, width, height, color, outerColor);
    frame.on("ready", () => { // ES6 Arrow Function - like function(){}
      const stage = frame.stage;
          let stageW = frame.width;
          let stageH = frame.height;
          // 2D noise
      // create a Noise object:
      var noise = new Noise();
      // create an empty Bitmap size 200, 200 into which to draw the noise
      var bmp = new Bitmap(null, 200, 200).center(stage);

      // we fill the bitmap starting from top left going across in the inner loop,
      // then down, then across, etc. until we get to bottom right.
      for (var y = 0; y < bmp.height; y++) {
        for (var x = 0; x < bmp.width; x++) {
            // the noise methods return a number from -1 to 1
            // by adding 1 we get a number between 0 and 2 and we divide by 2 to get 0-1
            // and we multiply this by 255 to get a number between 0 and 255
            var value = (noise.simplex2D(x,y)+1)/2 * 255;
            // imageData is one big array with four values per pixel
            // the red, green, blue and alpha
            // each value will constrained to between 0 and 255
            // the i value is how many on the current row plus the columns from the previous rows
            // and we set it to increase by 4 each time giving us a place for each color and alpha
            // We write the same value for red, green, blue to get a shade of grey
            var i = (x + y * bmp.width) * 4;
            bmp.imageData.data[i] = value; // red (0-255)
            bmp.imageData.data[i + 1] = value; // green (0-255)
            bmp.imageData.data[i + 2] = value; // blue (0-255)
            bmp.imageData.data[i + 3] = 255; // alpha (0-255)
        }
      }
      bmp.drawImageData(); // this draws the imageData to the Bitmap

      // Here is the same example to get blobs using smoothStep:

      var f = 25; // try changing this number around
      for (var y = 0; y < bmp.height; y++) {
        for (var x = 0; x < bmp.width; x++) {
          var value = (noise.simplex2D(x/f, y/f)+1)/2; // 0-1
          // smoothStep sets less than .3 to 0 and greater than .35 to 1
          // and transitions between using an easing formula in the shape of an f
          var value = smoothStep(value, .3, .35) * 255;
          var i = (x + y * bmp.width) * 4;
          bmp.imageData.data[i] = value; // red (0-255)
          bmp.imageData.data[i + 1] = value; // green (0-255)
          bmp.imageData.data[i + 2] = value; // blue (0-255)
          if(value === 255){
            bmp.imageData.data[i + 3] = 0; // alpha (0-255)
          }
          else {
            bmp.imageData.data[i + 3] = value; // alpha (0-255)
          }
        }
      }
      bmp.drawImageData();
      bmp.drag();
    });
    return function cleanup() {
      frame.dispose();
    }
  });
  return (
    <>
    </>
  )
}