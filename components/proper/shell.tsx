import ClientOnly from '../clientOnly';

const ProperShell = ({loading, currentRoom, zIndex, proper}) => (
  
  <ClientOnly>
    {loading ? (
    <div style={{zIndex: zIndex}} className="absolute px-2 text-purple-800">
      <div><a href={`${proper.shellRoot}/room/${currentRoom?.slug}`}>&#35;{currentRoom?.name}</a></div>
    </div> ) : null }
  </ClientOnly>
)

export default ProperShell;