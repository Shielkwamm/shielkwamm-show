import Ship from '../ship/ship'
import ZimRandomGlyphs from '../zim/zimRandomGlyphs';

const Scene = () => (
  <>
    <Ship label="down"/>
    <ZimRandomGlyphs glyphsList={["🦅", "💩", "✨"]} amount="20" maxSize="350"/>
  </>
)

export default Scene;