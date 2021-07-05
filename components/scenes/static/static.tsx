import ZimRandomGlyphs from '../zim/zimRandomGlyphs';
import ZimRandomText from '../zim/zimRandomText';
import ClientOnly from '../../clientOnly';

const Scene = () => (
  <>
    <ZimRandomGlyphs glyphsList={["_", "💃", "🕺", "+", "-", "x", "{", "}", "[", "🏈"]} amount="45" maxSize="50"/>
  </>
)

export default Scene;