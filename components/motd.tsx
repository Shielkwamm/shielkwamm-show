import { useEffect, useState } from 'react'
import MotdInner from './motdInner'
import processMotd from './processMotd'
import useSetup from '../lib/useSetup'

export default function Motd({ motdJson }) {
  
  const theSetup = useSetup('/TheScoup.json')

  return (
    <>
    {theSetup? (
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