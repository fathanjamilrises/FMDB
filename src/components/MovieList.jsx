import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
import Skeleton from 'react-loading-skeleton';  // Import skeleton loader (if using react-loading-skeleton)

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
      setLoading(false); // Set loading to false once data is fetched
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${
          index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'
        }`}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none scrollbar-hide scroll-smooth pt-4 px-3 pb-4"
      >
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-[200px] h-[300px]">
                {/* Skeleton loader while data is loading */}
                <Skeleton height="100%" width="100%" />
              </div>
            ))
          : movieList.map((item, index) => (
              <>
                {index_ % 3 === 0 ? (
                  <HrMovieCard movie={item} />
                ) : (
                  <MovieCard movie={item} loading={loading} />
                )}
              </>
            ))}
      </div>

      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${
          index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'
        }`}
      />
    </div>
  );
}

export default MovieList;
