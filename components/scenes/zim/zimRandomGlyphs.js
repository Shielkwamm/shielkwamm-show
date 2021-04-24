import dynamic from 'next/dynamic'

const ZimRandomGlyphsClient = dynamic(
  () => import('./zimRandomGlyphsClient'),
  { ssr: false }
)

const ZimRandomGlyphs = ( props ) => {
  return (
  <>
    <ZimRandomGlyphsClient glyphsList={props.glyphsList} amount={props.amount} zIndex={props.zIndex} minSize={50} maxSize={250}/>
  </>
  )
}

export default ZimRandomGlyphs;

//I'm really tired right now lol, hard to focus on that pattern for props