import React from 'react'
import GenresList from '../constant/GenreList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
        {GenresList.genre.map((item,index)=>index<=4&&(
            <div className='p-8 px-8 md:px-16'>
                <h2 className='text-[20px] text-blue-500 font-sans
                font-bold'>{item.name}</h2> 
                <MovieList genreId={item.id} index_={index} />   
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList