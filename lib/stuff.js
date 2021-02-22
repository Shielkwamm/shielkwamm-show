export const FILTER_PLAYERS_QUERY = gql`
query filterPlayers(
  $filter: PlayerFilter
  $countryID: [ID!]
  $clubID: [ID!]
) {
  queryPlayer(filter: $filter) @cascade {
    name
    position
    country(filter: { id: $countryID }) {
      id
      name
    }
    club(filter: { id: $clubID }) {
      id
      name
    }
    id
  }
}
`;
/*

  const [country, setCountry] = useState(null);
  const {
    loading: loadingCountries,
    error: errCountries,
    data: countries,
  } = useQuery(ALL_COUNTRIES_QUERY);

{
  "actors": [{
  "handle": "Scoup",
  "type": "basic",
  "src": "/TheScoup/Scoup.js",
  "states": [{
    "name": "intro",
    "mood": "handle --> #room <--"
    "label": "intro",
    "waitUntilDone": true,
    "timelineCommand": "Play"
  },
  {
    "name": "idle",
    "label": "idle",
    "timelineCommand": "Play"
  },
  {
    "name": "outro",
    "label": "exit", 
    "mood": "#room[handle] --> ~[]"
    "waitUntilDone": true,
    "timelineCommand": "Play"
  }],
  "mc": "actor"
  }]
}

type Actor {
  id: ID!
  handle: String!
  type: ActorTypes
  src: String
  states: [ActorState]
  mc: String
}

enum ActorTypes {
  Basic
}

type ActorState {
  name: String,
  label: String,
  waitUntilDone: Boolean
  timelineCommand: TimelineCommands
}

enum TimelineCommands {
  Play
}

type Motd {
  id: ID!
  name: String!
  header: String,
  actors: [String]
  states: [MotdStates]
}

type MotdStates {
  time: Date,
  actor: String!,
  mood: Mood,
  gotoNext: Boolean
  message
}

type Mood {
  name: String, 
  mood: String
}

{
  "motd": {
    "name": "theScoup",
    "header": "🍦[Scoup]",
    "actors": ["Scoup"]
  },
  "states": [
    {
      "time": "5:52 PM",
      "handle": "Scoup",
      "mood": {"name": "intro"},
      "gotoNext": true
    },
    {
      "time": "5:53 PM", 
      "handle": "Scoup", 
      "mood": {"name": "idle", "mood": "+/o🍦"},
      "message": "You made me an ice cream cone?"
    },
    {
      "time": "5:53 PM", 
      "handle": "Scoup", 
      "mood": {"name": "idle", "mood": "+🍦[x]/)"},
      "message": "Are you going to melt me or something?"
    },
    {
      "time": "1:53 AM",
      "handle": "Scoup",
      "mood": {"name": "outro"}
    }
  ]
}

mutation addActor {
    addActor(input: [{
      type:Basic,
      handle: "Scoup",
      src: "/TheScoup/Scoup.js",
      mc: "actor",
      states: [{
    		name: "intro",
        label: "intro",
        waitUntilDone: true,
        timelineCommand:Play
  		},
      {
        name: "idle",
        label: "idle",
        timelineCommand: Play
      },
      {
        name: "outro",
        label: "exit", 
        waitUntilDone: true,
        timelineCommand: Play
      }
    ],
    }])
  {
    actor {
      id,
      type,
      src,
      mc,
      handle,
      states {
        name,
        label,
        timelineCommand,
        waitUntilDone
      },
      
    }
  }
}



mutation addMotd {
  addMotd(input: {
    name: "theScoup",
    header: "🍦[Scoup]",
    actors: ["Scoup"]
  states: [
    {
      time: "2021-01-04T23:52:00.000Z",
      actor: "Scoup",
      mood: {name: "intro"},
      gotoNext: true
    },
    {
      time: "2021-01-04T23:52:30.000Z", 
      actor: "Scoup", 
      mood: {name: "idle", mood: "+/o🍦"},
      message: "You made me an ice cream cone?"
    },
    {
      time: "2021-01-04T23:53:00.000Z", 
      actor: "Scoup", 
      mood: {name: "idle", mood: "+🍦[x]/)"},
      message: "Are you going to melt me or something?"
    },
    {
      time: "2021-01-04T23:57:00.000Z",
      actor: "Scoup",
      mood: {name: "outro"}
    }
  ]
  }),
  {
    motd {
    	name,
      header,
      actors,
      states { 
        time, 
        message, 
        actor, 
        mood {name, mood}
      }
  	}
  }
}


*/