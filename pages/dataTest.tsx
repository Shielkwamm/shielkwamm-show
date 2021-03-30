import ActiveRoom from '../components/activeRoom';
import ClientOnly from "../components/clientOnly";

const DataTest = () => {
 
  return (
    <ClientOnly>
      <ActiveRoom />
    </ClientOnly>
  )
}

export default DataTest;

