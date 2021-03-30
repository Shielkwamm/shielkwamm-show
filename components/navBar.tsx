import { useRouter } from 'next/router'

const NavBar = () => {
  const ship = "↓ ( { ship } )";
  const sh = "↑ △";
  const router = useRouter();
  return (
    <div>
      <div style={{zIndex: 668}} className="fixed border border-indigo-600 bottom-0 right-0 w-14 h-full text-4xl text-center flex flex-col justify-between bg-pink-300 bg-opacity-75">
        <div className="flex-none grid grid-col-1 space-y-2.5">
          <a href="https://guide.shielkwamm.com">⧊</a>
          <a href="https://acktueli.com">◫</a>
        </div>
        <div className="flex-grow text-center text-2xl align-middle m-2 select-none"  style={{writingMode: "vertical-rl", textOrientation: "mixed"}}>
          {router.pathname === "/ship" ? <a href="/">{sh}</a>: <a href="/ship">{ship}</a>}
        </div>
        <div className="flex-none grid grid-col-1 space-y-4">
          <a href="https://sh.shielkwamm.com">🥚</a>
          <a href="https://shielkwamm.net">🦀</a>
          <a href="https://github.com/orgs/Shielkwamm/projects">📷</a>
        </div>
        
      </div>
    </div>
  )
}

export default NavBar;