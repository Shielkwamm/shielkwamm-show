const NavBar = () => {
  const ship = "( { ship } )";
  return (
    <div>
      <div style={{zIndex: 667}} className="border border-indigo-600 fixed bottom-0 left-0 w-400 h-full text-4xl text-center flex flex-col justify-between bg-pink-300 bg-opacity-75">
        <div className="flex-none grid grid-col-1 space-y-2.5">
          <a href="https://guide.shielkwamm.com">⧊</a>
          <a href="https://acktueli.com">◫</a>
        </div>
        <div className="flex-grow text-center text-2xl align-middle m-1 select-none"  style={{writingMode: "vertical-rl", textOrientation: "mixed"}}>
          <a href="/ship">{ship}</a>
        </div>
        <div className="flex-none grid grid-col-1 space-y-4">
          <a href="http://sh.shielkwamm.com">💎</a>
          <a href="https://shielkwamm.net">🌈</a>
          <a href="https://github.com/orgs/Shielkwamm/projects">📷</a>
        </div>
        
      </div>
    </div>
  )
}

export default NavBar;