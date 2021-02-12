import { useEffect, useState } from 'react'
import MotdInner from './motdInner'
import processMotd from './processMotd'

export default function Motd({ motdJson }) {
  
  let [motdSetup, setMotdSetup] = useState(false);

  let motd = false;

  useEffect(() => {
    if(!motdSetup) {
      fetch(motdJson)
        .then(response => response.json())
        .then(data => {
          window.motd = processMotd(data);
          console.log(data)
          //setSituationSetup(data.theSetup);

        })
    }
  })
  return (
    <>
    {motdSetup? (
      <MotdInner theSetup={{}}/>
    ): null }
    </>
  )
}

/*
import { gql, useQuery } from "@apollo/client";

  export const ALL_PLAYERS_QUERY = gql`
    query allPlayers {
      queryPlayer {
        name
        position
        country {
          id
          name
          stadium
        }
        club {
          id
          name
          stadium
        }
        id
      }
    }
  `;

  ...

  const { loading, error, data } = useQuery(ALL_PLAYERS_QUERY);*/