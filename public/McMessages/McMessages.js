(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"McMessages_atlas_", frames: [[0,0,536,225],[0,227,403,83]]}
];


// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["McMessages_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["McMessages_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.textbox3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.textbox = new cjs.Text("1:53 AM Slipurrrrs: ||〠 [sic] *hic* [sic], I think we should break up...", "12px 'Tahoma'");
	this.textbox.name = "textbox";
	this.textbox.lineHeight = 17;
	this.textbox.lineWidth = 191;
	this.textbox.parent = this;
	this.textbox.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.textbox).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.textbox3, new cjs.Rectangle(0,0,195.2,35.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(161.55,-18.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(161.6,-18.5,268,112.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(7.75,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(7.8,0,201.5,41.5), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(103.95,64.3,0.7689,0.4337,-1.2256,0,0,295.1,124.7);
	this.instance.alpha = 0.7891;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,207,53.2), null);


(lib.messageBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(104.7,25.3,1,1,0,0,0,104.7,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

	// Layer_2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(110.2,32.1,1,1,0,0,0,103.5,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({rotation:-1.2258,y:32.15},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.1,-2.1,208,57.5);


(lib.speech = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:1,exit:16});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		window.dispatchEvent(new Event("actorReady"));
	}
	this.frame_15 = function() {
		this.stop();
		window.dispatchEvent(new Event("actingFinished"));
	}
	this.frame_21 = function() {
		this.stop();
		window.dispatchEvent(new Event("actingFinished"));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(6).call(this.frame_21).wait(1));

	// text
	this.textbox_mc = new lib.textbox3();
	this.textbox_mc.setTransform(-324.55,94.1,1,1,0,0,0,97.6,17.7);
	this.textbox_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.textbox_mc).wait(9).to({x:102.4,y:21.2},0).to({alpha:1},6).wait(1).to({alpha:0},5).wait(1));

	// Layer_3
	this.instance = new lib.messageBg();
	this.instance.setTransform(-5.05,29.15,0.0147,0.1489,0,0,0,105.2,32.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:106.8,regY:32.1,scaleX:1,scaleY:1,x:100.7,y:29.05,alpha:1},8,cjs.Ease.quintOut).wait(7).to({alpha:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-422.1,-3.1,631.4000000000001,114.89999999999999);


// stage content:
(lib.McMessages = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.actor = new lib.speech();
	this.actor.setTransform(0.1,31.5);

	this.timeline.addTween(cjs.Tween.get(this.actor).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.5,157.9,91.69999999999999,-14.599999999999994);
// library properties:
lib.properties = {
	id: '8FE286A2761EC44CA32E85E27A8E4C8F',
	width: 207,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/McMessages_atlas_.png", id:"McMessages_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['8FE286A2761EC44CA32E85E27A8E4C8F'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;