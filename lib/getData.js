import { gql, useQuery } from '@apollo/client';

export const getShowData = () => {
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
  return {
    ship: {
      src: "https://shielkwamm.com/ship"
    },
    narrator: {
      profile: "Neobii"
    },
    comm: {  
      rootUrl: "https://shielkwamm.com/comm"
    },
    vibe: {
      src: "https://shielkwamm.com/show",
    },
    shell: {
      rootUrl: "https://sh.shielkwamm.com/"
    },
    hero: {
      src: '/actors/Name/Name.js'
    },
    net: {
      src: 'http://shielkwamm.net/'
    }
  }
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