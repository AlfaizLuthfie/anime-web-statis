import React from 'react'

function SearchAnime() {
  return (
    <>
        <input type="text" placeholder="Search Anime..." className="z-10 relative py-3 px-4 border  focus:outline-none text-sm rounded-l-lg w-2/3 lg:w-[33%]"/>
        <button className="py-3 px-4 bg-primary relative z-10 text-white text-sm rounded-r-lg">Search</button>
    </>
  )
}

export default SearchAnime;