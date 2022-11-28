import { use } from 'react';
import { Movie, movieDb } from '../api/db';
import { wait } from '../utils';
import EditMovieItem from './edit-movie-item';
import { MovieItem } from './movie-item';

async function getMovies() {
  await wait(200);
  return movieDb;
}

export default function Page() {
  const movies = use(getMovies());

  return (
    <>
      <EditMovieItem isNew={true} />

      <ul className="my-5 space-y-5">
        {movies.reverse().map((movie: Movie, index: number) => (
          <MovieItem movie={movie} key={index} />
        ))}
      </ul>
    </>
  );
}
