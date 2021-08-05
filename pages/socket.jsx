import { useEffect, useState } from 'react'
import * as Colyseus from "colyseus.js"
import React from 'react'
import YTWin from '../components/shUI/ytWin'

export default function Socket() {
  //const title = React.createElement('h1', {}, 'My First React Code');
  //console.log(title)
  const [message, setMessage] = useState("toot")

  useEffect(()=> {
    var host = window.document.location.host.replace(/:.*/, '');
  var port = 2567;
  var clientAddress = location.protocol.replace("http", "ws") + "//" + host + (port ? ':'+ port : '');
  var remoteAddress = "wss://socket-st.herokuapp.com"
  var client = new Colyseus.Client(remoteAddress);

  client.joinOrCreate("my_room").then(room => {
    console.log("joined");

    var players = {};

    room.onStateChange.once(function(state) {
        console.log("initial room state:", state);
    });

    // new room state
    room.onStateChange(function(state) {
        // this signal is triggered on each patch
    });
    
    room.state.players.onAdd = function (player, sessionId) {
      //var dom = document.createElement("div");
      //dom.className = "player";
      //dom.style.left = player.x + "px";
      //dom.style.top = player.y + "px";
      //dom.style.background = colors[Math.floor(Math.random() * colors.length)];
      //dom.innerText = "Player " + sessionId;
      player.onChange = function (changes) {
        document.querySelector("#fun").style.top = player.y + "px";
        document.querySelector("#fun").style.left = player.x + "px";
        document.querySelector("#fun").style.transform = "rotate3d(1, 1, 1, " + player.x + "deg)"
        document.querySelector("#fun2").style.transform = "rotate3d(1, 1, 1, " + player.y + "deg)"
      }

      /*players[sessionId] = dom;
      document.body.appendChild(dom);*/
  }

  room.state.players.onRemove = function (player, sessionId) {
      //document.body.removeChild(players[sessionId]);
      delete players[sessionId];
  }

    // listen to patches coming from the server
    room.onMessage("messages", function(message) {
        var p = document.createElement("p");
        p.innerText = message;
        document.querySelector("#messages").appendChild(p);
    });


    // send message to room on submit
    
    (document.querySelector("#form")).onsubmit = function(e) {
      e.preventDefault();

      var input = document.querySelector("#input");

      console.log("input:", input.value);

      // send data to room
      room.send("message", input.value);

      // clear input
      
      input.value = "";
  }

    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
          room.send("move", {y: -1})
        }
        else if (e.keyCode == '40') {
          room.send("move", {y: 1})
        }
        else if (e.keyCode == '37') {
          room.send("move", {x: -1})
        }
        else if (e.keyCode == '39') {
          room.send("move", {x: 1})
        }

    }
  });

  }, [])
  return (
    <>
    <YTWin title="socket">
    <h1 style={{fontSize: "100px", color: "purple"}} id="fun">💋 Fun!</h1>
    <h2 style={{fontSize: "80px", color: "blue"}} id="fun2">💋 Chat!</h2>
    <strong>Messages</strong>
    
    <br/>

    <form id="form">
      <input type="text" id="input" value={message} onChange={e => setMessage( e.target.value )}/>
      <input type="submit" value="Submit" />
    </form>

    <div id="messages"></div>
    </YTWin>
    </>
  )
}



