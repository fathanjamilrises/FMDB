import React from 'react';
import Skeleton from 'react-loading-skeleton'; // Import skeleton loader
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie, loading }) {
  return (
    <>
      {loading ? (
        <div className="w-[110px] md:w-[200px] h-[300px]">
          {/* Skeleton loader for the card */}
          <Skeleton height="100%" width="100%" />
        </div>
      ) : (
        <img
          src={IMAGE_BASE_URL + movie.poster_path}
          alt={movie.title}
          className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-blue-500 cursor-pointer hover:scale-110 transition-all duration-150 ease-in"
        />
      )}
    </>
  );
}

export default MovieCard;
