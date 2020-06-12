

export default function processTheSituation (situation) {
  let actors = [];
  situation.theSetup.actors.forEach(actor => {
    actors.push({handle: actor.handle, state: "loading", data: actor});
  })
  
  return {
    actors,
    stateIndex: 0,
    states: situation.states,
    actorsState: "initing",
    getActorState: (actorHandle) => {
      return theSituation.actors.find(actor => actor.handle === actorHandle).state;
    },
    setActorState: (actorHandle, actorState) => {
      let lastActorState = null;
      let allStatesEqual = true;
      theSituation.actors = theSituation.actors.map(actor => {
        if(actor.handle === actorHandle) actor.state = actorState;
        if(!lastActorState) lastActorState = actor.state
        else if(lastActorState !== actor.state) allStatesEqual = false;
        return actor;
      })
      if(allStatesEqual) {
        theSituation.actorsState = lastActorState
        if(lastActorState === "outro_done") {
          window.dispatchEvent(new Event("situationOver"));
        }
      }
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
        actor.mc.gotoAndPlay(actor.data.intro.label);
        actor.state = "intro";
        actor.nextButtonMc?.gotoAndPlay("active");
        //set all actor mc states to introing
        /*theSituation.actors = theSituation.actors.map(actor => {
          actor.state = "introing";
          return actor;
        })*/
      })
      theSituation.actorsState = "intro"
      theSituation.updateState();
    },
    endSituation: () => {
      theSituation.stateIndex = 0;
      theSituation.actors.forEach(actor => {
        actor.mc?.gotoAndPlay(actor.data.outro.label);
        actor.nextButtonMc?.gotoAndPlay("inactive");
        actor.state = "outro"
        /*theSituation.actors = theSituation.actors.map(actor => {
          actor.state = "exiting";
          return actor;
        })*/
      })
      theSituation.actorsState = "outro"
      theSituation.updateState();
    },
    nextState: () => {
      theSituation.stateIndex++;
      theSituation.updateState();
    },
    updateState: () => {
      let stateUpdate = theSituation.states[theSituation.stateIndex];
      if(!stateUpdate) {
        theSituation.endSituation()
      }
      else {
        theSituation.actors.forEach(actor => {
          if(actor.nextButtonMc) actor.mc.textbox_mc.textbox.text = stateUpdate.message
       })
      }
    }
  };
}