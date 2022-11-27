import { format, parseISO } from 'date-fns';
import { use } from 'react';
import { Movie, movieDb } from '../api/db';
import { wait } from '../utils';
import EditMovieItem from './edit-movie-item';
import Rating from './rating';

async function getMovies() {
  await wait(2000);
  return movieDb;
}

const MovieItem = ({
  movie: { title, link, watchDate, rating, notes },
}: {
  movie: Movie;
}): JSX.Element => (
  <li className="px-5 py-10 space-y-4 rounded bg-slate-200">
    <h3 className="text-xl hover:underline">
      <a href={link}>{title}</a>
    </h3>
    <h3>({format(parseISO(watchDate), 'd.M.Y')})</h3>
    <p>{notes}</p>
    <p>
      <Rating rating={rating} />
    </p>
  </li>
);

export default function Page() {
  const movies = use(getMovies());

  return (
    <>
      <h2 className="text-3xl">Movies page</h2>

      <EditMovieItem />

      <ul className="my-5 space-y-5">
        {movies.reverse().map((movie: Movie, index: number) => (
          <MovieItem movie={movie} key={index} />
        ))}
      </ul>
    </>
  );
}
