import { gql, useQuery } from '@apollo/client';

const ActiveRoom = () => {
  const { data, loading, error } = useQuery(getActiveRoom, {
    variables: {
      roomInput: {
        filter: {isFeatured: {_eq: true}}
      }
    }
  })
  if(loading) {
    return <h1>loading</h1>
  }
  if(error) {
    console.log(error)
    return null;
  }
  console.log(data)
  return (
    <h1>{data.room.name}</h1>
  )
}

const getActiveRoom = gql `query ActiveRoom($roomInput: SingleRoomInput!) {
  room(input: $roomInput) {
    result {
      name
    }
  } 
}`

export default ActiveRoom;