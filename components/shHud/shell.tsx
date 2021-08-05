import ClientOnly from '../clientOnly';

const Shell = ({currentRoom, zIndex, proper}) => (
  
  <ClientOnly>
    <div style={{zIndex: zIndex}} className="absolute px-2 text-purple-800">
      <div><a href={`${proper.shellRoot}/room/${currentRoom?.slug}`}>&#35;{currentRoom?.name}</a></div>
    </div>
  </ClientOnly>
)

export default Shell;