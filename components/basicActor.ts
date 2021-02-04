export default class BasicActor {
  public name:string;
  public isLoaded:boolean = false;
  public state:{name: string, isDone: boolean} = {name: "loading", isDone: false};
  public data:Object = {};

  private _iframe:HTMLIFrameElement;

  public constructor(actorData) {

  }

  actorLoaded() {

  }

  actingFinished() {

  }

  set iframe(iframeRef: HTMLIFrameElement) {
    this._iframe = iframeRef;
    alert("wowowow")
    alert(this._iframe)
  }

}