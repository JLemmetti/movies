import { format, parseISO } from 'date-fns';
import { use } from 'react';
import { Movie, movieDb } from '../api/db';

const MovieItem = ({
  movie: { title, link, watchDate, rating, notes },
}: {
  movie: Movie;
}): JSX.Element => (
  <li className="px-5 py-10 space-y-4 border-2 border-solid rounded border-slate-300 bg-slate-200">
    <h3 className="text-xl">
      <a href={link}>{title}</a>
    </h3>
    <h3>({format(parseISO(watchDate), 'd.M.Y')})</h3>
    <p>{notes}</p>
    <p>{rating}</p>
  </li>
);

export default function Page() {
  const movies = use(getMovies());

  return (
    <>
      <h2 className="text-3xl">Movies page</h2>

      <ul className="my-5 space-y-5">
        {movies.reverse().map((movie: Movie, index: number) => (
          <MovieItem movie={movie} key={index} />
        ))}
      </ul>
    </>
  );
}
