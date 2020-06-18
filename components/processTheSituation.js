

export default function processTheSituation (situation) {
  let actors = [];
  let index = 0;
  situation.theSetup.actors.forEach(actor => {
    actors.push({handle: actor.handle, state: {name: "loading", isDone: false}, data: actor, index});
    index++;
  })
  
  return {
    actors,
    stateIndex: 0,
    states: situation.states,
    actorsState: {name: "loading", isDone: false},
    getCurrentState: () => {
      return theSituation.states[theSituation.stateIndex];
    },
    getActorState: (actorHandle) => {
      return theSituation.actors.find(actor => actor.handle === actorHandle).state;
    },
    setActorState: (actorHandle, actorState, isDone) => {
      theSituation.actors = theSituation.actors.map(actor => {
        if(actor.handle === actorHandle) actor.state = {name: actorState, isDone}
        return actor;
      })
      theSituation.checkAllAnimationDone();
    },
    setAllActorsState: (actorState, isDone) => {
      theSituation.actors = theSituation.actors.map(actor => {
        actor.state = {name: actorState, isDone}
        return actor;
      })
      theSituation.actorsState = {name: actorState, isDone}
    },
    getActorMc: (actorHandle) => {
      return theSituation.actors.find(actor => actor.handle === actorHandle).mc;
    },
    setActorMc: (actorHandle, actorMc) => {
      theSituation.actors = theSituation.actors.map(actor => {
        if(actor.handle === actorHandle) actor.mc = actorMc
        return actor;
      })
    },
    checkAllAnimationDone: () => {
      let lastActorState = null;
      let isAllAnimationSameState = true;
      let isAllAnimationDone = true;
      theSituation.actors.forEach(actor => {
        if(!lastActorState) lastActorState = actor.state.name
        else if(lastActorState !== actor.state.name) isAllAnimationSameState = false;
        if(!actor.state.isDone) isAllAnimationDone = false;
      })

      if(isAllAnimationSameState) {
        theSituation.actorsState.name = lastActorState;
      }
      if(isAllAnimationDone && !theSituation.actorsState.isDone) {
        theSituation.actorsState.isDone = true;
        window.dispatchEvent(new CustomEvent("allActingFinished", {detail: {name: theSituation.actorsState.name}}));
        if(theSituation.stateIndex === theSituation.states.length - 1) {
          window.dispatchEvent(new Event("situationFinished"));
        }
      }
      return isAllAnimationDone;
    },
    setNextButtonMc: (actorHandle, nextButtonMc) => {
      theSituation.actors = theSituation.actors.map(actor => {
        if(actor.handle === actorHandle) {
          actor.nextButtonMc = nextButtonMc;
        }

        return actor;
      })
    },
    startSituation: () => {
      theSituation.stateIndex = 0;
      theSituation.actors.forEach(actor => {
        actor.nextButtonMc?.gotoAndPlay("active");
      })
      theSituation.updateState();
    },
    endSituation: () => {
      theSituation.stateIndex = theSituation.states.length - 1;
      theSituation.actors.forEach(actor => {
        actor.nextButtonMc?.gotoAndPlay("inactive");
      })
      theSituation.updateState();
    },
    nextState: () => {
      theSituation.stateIndex++;
      theSituation.updateState();
    },
    updateState: () => {
      let stateUpdate = theSituation.states[theSituation.stateIndex];

      theSituation.actors.forEach(actor => {
        if(actor.nextButtonMc) actor.mc.textbox_mc.textbox.text = stateUpdate.message || "";
      })
      
      theSituation.setAllActorsState(stateUpdate.mood.label, false);
      theSituation.animateActors(stateUpdate);
    },
    animateActors: () => {
      let currentState = theSituation.getCurrentState();
      theSituation.actors.forEach(actor => {
        let actorState = actor.data.states.find(state => state.name === currentState.mood.name);
        actor.mc["gotoAnd" + actorState.timelineCommand](actorState.label);
      })
    },
  };
}