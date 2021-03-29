import ReactPlayer from 'react-player'
import ShWindow from '../components/shUI/window';

const Player = () => (
  <ShWindow left={"Marble Madness"} right={"↑↑⬤"}>
    <ReactPlayer url='https://www.youtube.com/watch?v=HxAYJdLXgZo' />
  </ShWindow>
)

export default Player;