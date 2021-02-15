(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Scoup_atlas_1", frames: [[0,0,96,133],[73,135,70,48],[0,135,71,51],[98,0,73,35],[98,37,68,25],[98,64,65,21],[98,87,65,21],[98,110,65,19]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Scoup_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Scoup_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Scoup_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Scoup_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Scoup_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Scoup_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Scoup_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Scoup_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.IceCream = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.9).p("AFWAXQArAEAZAYQAcAcAAA2QAAA4ghApQgjArg0AAQg9AAgggSQglgWAAgyIgFAFQAAAugcAbQgbAbgtAAQguAAghghQgegfgBgsQAAAtgbAeQgcAhgtAAQgsAAgYghQgUgbgCgtIAAgFAFWAXQABAPAAAQAFIAXQAHAAAHAAAlSAnQAFiDBfhfQBkhkCNAAQCNAABjBkQBaBZAJB5AlSAnQAGgBAFAAIgLAQQAAgIAAgHgAjZC3IAAAFQAAAqggAPQgZANg1AAQgtAAghghQgggfAAguQAAgtAgghQAdgcAmgD");
	this.shape.setTransform(35.5895,23.4335,0.8131,0.8131);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9EDBF").s().p("AAEEAQgeggAAgtQgBAugbAfQgcAggtAAQgrAAgYggQgVgcgCgtIAAAFQABAqghAQQgYAMg2AAQgtAAggggQghggAAguQAAguAhggQAcgcAmgDQAFiDBfhfQBkhkCNAAQCNAABkBkQBZBZAJB5QArAEAYAYQAcAcAAA2QAAA4ggApQgjArg0AAQg9AAgfgSQgngWAAgyIgEAFQgBAtgbAbQgbAcgtAAQguAAghggg");
	this.shape_1.setTransform(35.5895,23.4335,0.8131,0.8131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IceCream, new cjs.Rectangle(-1,-1,73.2,48.9), null);


(lib.cone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cone, new cjs.Rectangle(-0.5,-0.5,48,66.5), null);


(lib.actor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {intro:0,idle:10,exit:14};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.dispatchEvent(new Event("actorReady"));
	}
	this.frame_9 = function() {
		this.dispatchEvent(new Event("actingFinished"));
	}
	this.frame_13 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_19 = function() {
		this.stop();
		this.dispatchEvent(new Event("actingFinished"));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(4).call(this.frame_13).wait(6).call(this.frame_19).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhNgQQgCgFAFgBQAFgBABAEQAMAhAzgBQAbAAAygLQAFAAABAFQACAFgFAAIhVALQg2AAgNgng");
	this.shape.setTransform(38.2348,-4.3119,0.8131,0.8131);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhVAaQAAgFAFAAQAwgBAogGIAtgJQAcgIgJgTQgCgEAEgDQAFgCACAEQAJATgHAIQgFAIgVAFQhAARhJABQgFAAAAgFg");
	this.shape_1.setTransform(14.7238,-3.7868,0.8131,0.8131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{scaleX:0.8131,scaleY:0.8131,x:14.7238,y:-3.7868}},{t:this.shape,p:{scaleX:0.8131,scaleY:0.8131,x:38.2348,y:-4.3119}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.8132,scaleY:0.8132,x:14.7243,y:-4.7867}},{t:this.shape,p:{scaleX:0.8132,scaleY:0.8132,x:38.2356,y:-5.3117}}]},9).to({state:[{t:this.shape_1,p:{scaleX:0.8132,scaleY:0.8132,x:14.7243,y:-3.7867}},{t:this.shape,p:{scaleX:0.8132,scaleY:0.8132,x:38.2356,y:-4.3117}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.8132,scaleY:0.8132,x:14.7243,y:-4.2867}},{t:this.shape,p:{scaleX:0.8132,scaleY:0.8132,x:38.2356,y:-4.8117}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.8132,scaleY:0.8132,x:14.4743,y:-4.2867}},{t:this.shape,p:{scaleX:0.8132,scaleY:0.8132,x:37.9856,y:-4.8117}}]},1).wait(7));

	// Layer_3
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(10.5,-1.65,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(10.5,-1.65,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(10.5,-1.4,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(10,-1.4,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(7.5,-1.4,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(8.7,-1.4,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_7();
	this.instance_6.setTransform(8.7,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	// Layer_7
	this.instance_7 = new lib.IceCream();
	this.instance_7.setTransform(28.05,-50.75,1,1,0,0,0,35.6,23.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({y:10.25},6,cjs.Ease.elasticOut).wait(7).to({regY:23.7,scaleY:0.349,y:25.45},4).wait(2));

	// Layer_1
	this.instance_8 = new lib.cone();
	this.instance_8.setTransform(26.7,51.15,1,0.7082,0,0,0,23.6,32.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-74.7,73.2,149.60000000000002);


// stage content:
(lib.Scoup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.actor = new lib.actor();
	this.actor.name = "actor";
	this.actor.setTransform(50.5,49.55,1,1,0,0,0,28.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.actor).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '1519EDCC2C20B84490E8DD4CA102A133',
	width: 100,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"actors/Scoup/images/Scoup_atlas_1.png", id:"Scoup_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1519EDCC2C20B84490E8DD4CA102A133'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;