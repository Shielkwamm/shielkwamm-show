import Link from 'next/link'

const ShWindowCloseButton = () => (
  <div className="order-4 sm:order-3 noDrag">
    <Link href={"/"}>
      <div className="bg-gray-300 w-12 cursor-pointer text-center py-2 px-3 select-none">X</div>
    </Link>
  </div>
)

export default ShWindowCloseButton;