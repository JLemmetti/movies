'use client';

import { useSearchParams } from 'next/navigation';
import { use } from 'react';
import { Movie, movieDb } from '../api/db';
// import { wait } from '../utils';
import EditMovieItem from './edit-movie-item';
import { Filters } from './Filters';
import { MovieItem } from './movie-item';

type Props = {
  children: JSX.Element;
};

async function getMovies() {
  // await wait(2000);
  return movieDb;
}

export default function RootLayout({ children }: Props): JSX.Element {
  const movies = use(getMovies());
  const searchParams = useSearchParams();
  const rating = searchParams?.get('rating');

  return (
    <div>
      <h2 className="text-3xl font-medium text-slate-800">Movies</h2>
      <p className="text-lg text-slate-700">
        (Movies watched: {movies.length})
      </p>

      <EditMovieItem isNew={true} />

      <Filters />

      <div className="grid grid-cols-2 gap-4">
        <ul className="my-5 space-y-5">
          {movies
            .filter((movie) => (rating ? movie.rating === rating : true))
            .map((movie: Movie, index: number) => (
              <MovieItem movie={movie} key={movie.id} />
            ))
            .reverse()}
        </ul>

        <div>{children}</div>
      </div>
    </div>
  );
}
