import { gql, useQuery } from '@apollo/client';
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json());

const organizationName = "Shielkwamm";
const organizationUrl = `https://raw.githubusercontent.com/${organizationName}`

export const getShowData = () => {
 /* const branch = "main";
  const showDataUrl = `${organizationUrl}/sh-proper/${branch}/show.json`;

  const res = await fetch(showDataUrl);
  const showData = await res.json()*/
 
  /*const branch = "main";
  const properDataUrl = `${organizationUrl}/sh-proper/${branch}/proper.json`;//oh my one more character 5x6
  
  const { data: proper, error: orgError } = useSWR(properDataUrl,
    fetcher
  )
  
  return proper;*/

  return {
    shellVisible: false,
    shipVisible: false,
    narratorVisible: false,
    heroVisible: false,
    vibeVisible: false,
    redirectTo: true,
    meta: {
      bgImage: "https://shielkwamm.s3.us-east-2.amazonaws.com/show/bg.png",
      description: "Stuck in percent20... again... still...",
      ogDescription: "Hello?  I make 10,000 dollars from home a month and you could too!",
      ogImage: "https://shielkwamm.s3.us-east-2.amazonaws.com/show/bg.png"
    },
    style: {
      backgroundImage: "https://shielkwamm.s3.us-east-2.amazonaws.com/show/Shielkwamm/images/Shielkwamm_atlas_.png"
    }
  }
}

export const getProperData = () => {
  const branch = "main";
  const properDataUrl = `${organizationUrl}/sh-proper/${branch}/proper.json`;//oh my one more character 5x6
  const { data: proper, error: orgError } = useSWR(properDataUrl,
    fetcher
  )
  
  return proper
}

export const getFeaturedRoom = () => {
  return useQuery(queryRoom, {
    variables: {
      roomInput: {
        filter: {isFeatured: {_eq: true}}
      }
    }
  })
}

const queryRoom = gql `query FeaturedRoom($roomInput: SingleRoomInput!) {
  room(input: $roomInput) {
    result {
      name
      bwam
      vibe
      isFeatured
      currentMusicTitle
      currentMusicUrl
      slug
      colorScheme {
        backgroundColor
        color
        linkColor
        altColor
      }
    }
  } 
}`