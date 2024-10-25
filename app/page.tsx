

'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';




interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path:string
}

export default function MoviePage() {
  const API_KEY = '7e70189c40d0c3989843b8ff55eae598';
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<'today' | 'week'>('today');

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=release_date.desc`);
      const data = await res.json();

      setMovies(data.results);
    };

    fetchMovies();
  }, []); 

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className=''>
<div className='flex items-center p-10'>
        <h2 className='text-lg font-semibold pr-4'>Trending</h2>
        <div className='flex items-center justify-between border-2 border-blue w-56 rounded-full p-1'>
          <button
            onClick={() => setSelectedCategory('today')}
            className={`px-4 py-1 text-md ${selectedCategory === 'today' ? 'bg-blue text-aqua' : 'text-blue'} rounded-full transition-all duration-300`}
          >
            Today
          </button>
          <button
            onClick={() => setSelectedCategory('week')}
            className={`px-4 py-1 text-md ${selectedCategory === 'week' ? 'bg-blue text-aqua' : 'text-blue'} rounded-full transition-all duration-300`}
          >
            This Week
          </button>
        </div>
      </div>


      {/* <div className='flex'>
      {movies.map((movie) => (
        <div key={movie.id}>
    
          <Image  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={200} height={300} />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>{movie.release_date}</p>
          <p>{movie.vote_average}</p>
        </div>
      ))}
    </div> */}

<div className='flex flex-row bg-fixed overflow-x-scroll space-x-4 mt-10'>
  {movies.map((movie) => (
    <div
      key={movie.id}
      className="flex-shrink-0 w-[200px] h-[350px] transform transition-transform duration-500 hover:scale-105"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={200}
        height={300}
        className="object-cover w-full h-[300px] rounded-md"
      />
      <h1 className="text-xl font-bold mt-2">{movie.title}</h1>
      
      <p className="text-sm">{movie.release_date}</p>
   
    </div>
  ))}
</div>
<div className='hallowin'>
<div className='bg-blue opacity-80'>
<div className='flex items-center p-10'>
        <h2 className='text-xl text-white font-semibold pr-4'>Latest Trailers</h2>
        <div className='flex  text-white justify-between border-2 border-aqua w-[700px] rounded-full p-1'>
          <button
            onClick={() => setSelectedCategory('today')}
            className={`px-4 py-1 text-md ${selectedCategory === 'today' ? 'bg-blue text-white' : 'text-blue'} rounded-full transition-all duration-300`}
          >
           Popular
          </button>
          <button
            onClick={() => setSelectedCategory('week')}
            className={`px-4 py-1 text-md ${selectedCategory === 'week' ? 'bg-blue text-white' : 'text-blue'} rounded-full transition-all duration-300`}
          >
           Streaming
          </button>

          <button
            onClick={() => setSelectedCategory('week')}
            className={`px-4 py-1 text-md ${selectedCategory === 'week' ? 'bg-blue text-white' : 'text-blue'} rounded-full transition-all duration-300`}
          >
           On TV
          </button>
          <button
            onClick={() => setSelectedCategory('week')}
            className={`px-4 py-1 text-md ${selectedCategory === 'week' ? 'bg-blue text-white' : 'text-blue'} rounded-full transition-all duration-300`}
          >
           For Rent
          </button>
          <button
            onClick={() => setSelectedCategory('week')}
            className={`px-4 py-1 text-md ${selectedCategory === 'week' ? 'bg-blue text-white' : 'text-blue'} rounded-full transition-all duration-300`}
          >
          In Theaters
          </button>

        </div>


      </div>
      <div className='flex flex-row bg-fixed overflow-x-scroll space-x-4 mt-10 text-white'>
  {movies.map((movie) => (
    <div
      key={movie.id}
      className="flex-shrink-0 w-[200px] h-[350px] transform transition-transform duration-500 hover:scale-105"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={200}
        height={300}
        className="object-cover w-full h-[300px] rounded-md"
      />
      <h1 className="text-xl font-bold mt-2">{movie.title}</h1>
      
      <p className="text-sm">{movie.release_date}</p>
   
    </div>
  ))}
</div>









      </div>
      </div>

      <div className=''>
<div className='flex items-center p-10'>
        <h2 className='text-xl text-white font-semibold pr-4'>Latest Trailers</h2>
        <div className='flex  text-white justify-between border-2 border-aqua w-[700px] rounded-full p-1'>
          <button
            onClick={() => setSelectedCategory('today')}
            className={`px-4 py-1 text-md ${selectedCategory === 'today' ? 'bg-blue text-white' : 'text-blue'} rounded-full transition-all duration-300`}
          >
           Popular
          </button>
          <button
            onClick={() => setSelectedCategory('week')}
            className={`px-4 py-1 text-md ${selectedCategory === 'week' ? 'bg-blue text-white' : 'text-blue'} rounded-full transition-all duration-300`}
          >
           Streaming
          </button>

          <button
            onClick={() => setSelectedCategory('week')}
            className={`px-4 py-1 text-md ${selectedCategory === 'week' ? 'bg-blue text-white' : 'text-blue'} rounded-full transition-all duration-300`}
          >
           On TV
          </button>
          <button
            onClick={() => setSelectedCategory('week')}
            className={`px-4 py-1 text-md ${selectedCategory === 'week' ? 'bg-blue text-white' : 'text-blue'} rounded-full transition-all duration-300`}
          >
           For Rent
          </button>
          <button
            onClick={() => setSelectedCategory('week')}
            className={`px-4 py-1 text-md ${selectedCategory === 'week' ? 'bg-blue text-white' : 'text-blue'} rounded-full transition-all duration-300`}
          >
          In Theaters
          </button>

        </div>


      </div>
      <div className='flex flex-row bg-fixed overflow-x-scroll space-x-4 mt-10 text-white'>
  {movies.map((movie) => (
    <div
      key={movie.id}
      className="flex-shrink-0 w-[200px] h-[350px] transform transition-transform duration-500 hover:scale-105"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={200}
        height={300}
        className="object-cover w-full h-[300px] rounded-md"
      />
      <h1 className="text-xl font-bold mt-2">{movie.title}</h1>
      
      <p className="text-sm">{movie.release_date}</p>
   
    </div>
  ))}
</div>









      </div>

















    </div>
  );
}





























// export default async function MoviePage() {
//   const API_KEY = '7e70189c40d0c3989843b8ff55eae598';
//   const movieId = '550'; // Replace this with dynamic ID if necessary

//   const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=release_date.desc`);
//   const movie = await res.json();

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//       <p> {movie.release_date}</p>
//       <p> {movie.vote_average}</p>
//     </div>
//   );
// }




//......... rrrrrrrrrrrrrrrrrrrrrrrrrr.............



// 'use client';

// import React, { useEffect, useState } from 'react';


// const Page = () => {
//   const [userInfo, setUserInfo] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       const query = await fetch('https://api.themoviedb.org/3/movie/550?api_key=7e70189c40d0c3989843b8ff55eae598');
//       const response = await query.json();
//       console.log('response from API', response);
//       setUserInfo(response);
//     };

//     getData();
//   }, []);

//   return (
//     <div>




//      
//     </div>
//   );
// };

// export default Page;

