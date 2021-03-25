import Link from 'next/link'

const PlaybackCloseButton = () => (
  <div className="noDrag">
    <Link href={"/"}>
      <div className="order-4 sm:order-3 bg-gray-300 w-12 cursor-pointer text-center py-2 px-3 select-none">X</div>
    </Link>
  </div>
)

export default PlaybackCloseButton;