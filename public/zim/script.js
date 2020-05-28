const scaling = "fit"; // this will resize to fit inside the screen dimensions
const width = 1024;
const height = 768;
const color = light; // ZIM colors like green, blue, pink, faint, clear, etc.
const outerColor = dark; // any HTML colors like "violet", "#333", etc. are fine to use

const frame = new Frame(scaling, width, height, color, outerColor);
frame.on("ready", () => { // ES6 Arrow Function - like function(){}
    zog("ready from ZIM Frame"); // logs in console (F12 - choose console)

    const stage = frame.stage;
    let stageW = frame.width;
    let stageH = frame.height;

    // see https://zimjs.com/learn.html for video and code tutorials
    // see https://zimjs.com/docs.html for documentation
    // see https://zimjs.com/bits.html for 64 Interactive Media techniques

    // put your code here (you can delete this sample code)

    // with chaining - can also assign to a variable for later access
    new Circle(100, pink)
        .center()
        .drag();

    // without chaining
    // const circle = new Circle(100, pink);
    // circle.center();
    // circle.drag();

    stage.update(); // this is needed to show any changes

}); // end of ready