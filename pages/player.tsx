import ReactPlayer from 'react-player'
import ShWindow from '../components/shUI/window';
import { gql, useQuery } from '@apollo/client';
import ClientOnly from '../components/clientOnly';

const Player = () => {
  const { data, loading, error } = useQuery(getActiveRoom, {
    variables: {
      roomInput: {
        filter: {isFeatured: {_eq: true}}
      }
    }
  }) 
  const currentRoom = data?.room?.result || null;
  return (
    <ShWindow left={currentRoom?.currentMusicTitle} right={"↑↑⬤"}>
      <ClientOnly>
        <ReactPlayer width="100%" url={currentRoom?.currentMusicUrl} />
      </ClientOnly>
    </ShWindow>
  )
}

export default Player;



const getActiveRoom = gql `query ActiveRoom($roomInput: SingleRoomInput!) {
  room(input: $roomInput) {
    result {
      vibe
      currentMusicTitle
      currentMusicUrl
    }
  } 
}`