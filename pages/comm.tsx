const Comm = () => {
  const comm = {
    hero: {
      src: '/actors/Name/Name.js'
    },
    randomGlyphs0: {
      glyphSet: ["ⓚ", "⬛", "ℙ", "⬜", "ʎ", "▲", "⚪", "⋗", "Ḵ", '℟'],
      colors: ["white", "black"],
    },
    style: {
      backgroundImage: "https://shielkwamm.s3.us-east-2.amazonaws.com/show/Shielkwamm/images/Shielkwamm_atlas_.png"
    },
    meta: {
      bgImage: "https://shielkwamm.s3.us-east-2.amazonaws.com/show/bg.png",
      description: "{ Understand this! }",
      ogDescription: "{ Understand this! }",
      ogImage: "https://shielkwamm.s3.us-east-2.amazonaws.com/show/bg.png"
    },
  }
  return (
    <>
      <style jsx global>{`
        body {
          
          background-position-x: 0;
          animation: bgAnimate 1000s linear infinite;
        }`
      }
      </style>
    </>
  )
}

export default Comm;

//background-image: url(${comm.style.backgroundImage});