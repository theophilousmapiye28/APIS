import React from 'react'
import Link from 'next/link'

const hero = () => {
  return (
    <div>
    <div className='Container' >
      <div className=' pt-20 pl-10'>
      <h2 className='text-white text-6xl font-semibold'>Welcome.</h2>
      <p className='text-white text-4xl'>Millions of movies, TV shows and people to discover. Explore now.</p>
      <div className='pt-10'>
     
      </div>
      <form className="flex items-center">
  <input
    type="text"
    placeholder="Search for a movie, tv show, person..."
    className="flex-grow text-xl sm:w-[390px] lg:w-[1480px] border p-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button
    type="submit"
    className="bg-aqua mr-4 text-white rounded-r-full z-index-1 p-3 hover:bg-blue-500 transition-colors duration-300 "
  >
    Search
  </button>
</form>


      
      </div>
    </div>
 
    </div>
  )
}

export default hero
