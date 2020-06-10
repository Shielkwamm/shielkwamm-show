import { useEffect, useState, useRef } from 'react'
import styles from './Situation.module.css'
import classNames from 'classnames'
import ActorPortrait from './actorPortrait'
import MessageBox from './messageBox'

function processTheSituation (situation) {
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

function SituationInner({ theSetup }) {
  const [situationOpen, setSituationOpen] = useState(false);
  let burgerStyles = ['flex', 'mb-4', styles.viewScreen];
  if(situationOpen) {
    burgerStyles.push(styles.showBurger);
  }
  const toggleSituation = () => {
    if(!situationOpen) {
      setSituationOpen(true);
      theSituation.startSituation();
    }
    else if(situationOpen) {
      theSituation.endSituation()
    }
  }

  const cleanUpSituation = () => {
    setSituationOpen(false)
  }

  useEffect(() => {
    window.addEventListener("situationOver", cleanUpSituation);
    return function cleanup() {
      window.removeEventListener("situationOver", cleanUpSituation);
    }
  })

  return (
    <>
      <div className={classNames(burgerStyles)}>
        {theSetup.actors.map(actor => (
          <React.Fragment key={actor.handle}>
          {actor.type === "basic" ? (
            <ActorPortrait actor={actor} />
          ): null}
          {actor.type === "messageBox" ?(
            <MessageBox actor={actor} />
          ): null}
          </React.Fragment>
        ))}
      </div>
      <div onClick={toggleSituation} className={styles.burgerPhone}>{theSetup.toggle.text}</div>
    </>
  )
}

export default function Situation({ theSituationJSON }) {
  let [situationSetup, setSituationSetup] = useState(false);

  useEffect(() => {
    if(!situationSetup) {
      fetch(theSituationJSON)
        .then(response => response.json())
        .then(data => {
          window.theSituation = processTheSituation(data);
          setSituationSetup(data.theSetup);
        })
    }
  })
  return (
    <>
    {situationSetup? (
      <SituationInner theSetup={situationSetup}/>
    ): null }
    </>
  )
}