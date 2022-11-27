import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import { use } from 'react';
import { Movie, movieDb } from '../api/db';
import { wait } from '../utils';
import EditMovieItem from './edit-movie-item';
import Rating from './rating';

async function getMovies() {
  await wait(200);
  return movieDb;
}

const MovieItem = ({
  movie: { title, link, watchDate, rating, notes },
}: {
  movie: Movie;
}): JSX.Element => (
  <li className="px-5 py-10 space-y-4 rounded bg-slate-200">
    <h3 className="text-xl hover:underline">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
      <div className="relative inline-block w-6 h-6 ml-3 align-middle rounded-full bg-slate-400 hover:bg-slate-600">
        <a
          href={`https://www.justwatch.com/fi/etsi?q=${encodeURI(title)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="ml-[7px] mt-[6px]"
            src="/imgs/jw-logo.svg"
            width="13"
            height="13"
            alt={`Check where to watch ${title} in JustWatch`}
          />
        </a>
      </div>
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
