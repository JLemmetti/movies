import { use } from 'react';
import { Movie, movieDb } from '../api/db';
import { wait } from '../utils';
import EditMovieItem from './edit-movie-item';
import { MovieItem } from './movie-item';

type Props = {
  children: JSX.Element;
};

async function getMovies() {
  await wait(2000); // Prefetched
  return movieDb;
}

export default function RootLayout({ children }: Props): JSX.Element {
  const movies = use(getMovies());

  return (
    <div>
      <h2 className="text-3xl">Movies</h2>
      <p>(Movies watched: {movies.length})</p>

      <EditMovieItem isNew={true} />

      <div className="grid grid-cols-2 gap-4">
        <ul className="my-5 space-y-5">
          {movies
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
