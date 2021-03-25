import Link from 'next/link'

const PlaybackCloseButton = () => (
  <Link href={"/"}>
    <div className="bg-gray-300 w-12 cursor-pointer text-center py-2 px-3">X</div>
  </Link>
)

export default PlaybackCloseButton;