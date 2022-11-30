import { format, parseISO } from 'date-fns';
import { use } from 'react';
import { Movie, movieDb } from '../../api/db';
import { wait } from '../../utils';
import Rating from '../rating';

type Params = {
  [param: string]: any;
};

async function getMovie(id: number) {
  await wait(2000);
  return movieDb.find((movie: Movie) => movie.id === id);
}

export default function Page({ params }: Params) {
  const movie = use(getMovie(parseInt(params.id)));

  if (!movie) return <p>No movie found</p>;

  const { title, link, watchDate, rating, notes } = movie;

  return (
    <div className="px-5 py-10 my-5 space-y-4 rounded bg-slate-200">
      <h3 className="text-2xl">{title}</h3>

      <p>Watched: {format(parseISO(watchDate), 'd.M.Y')}</p>

      <p>
        <Rating rating={rating} />
      </p>

      <p>{notes}</p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum aut
        error magni, voluptatum labore nesciunt adipisci quos itaque delectus
        vitae doloremque optio ratione dignissimos sit atque, unde veritatis
        rem!
      </p>

      <p className="space-x-5">
        <a
          className="text-2xl font-bold text-slate-800 hover:underline hover:underline-offset-2"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          title={`${title} on IMDB`}
        >
          IMDB
        </a>

        <a
          className="text-2xl font-bold text-slate-800 hover:underline hover:underline-offset-2"
          href={`https://www.justwatch.com/fi/etsi?q=${encodeURI(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`Check where to watch ${title} in JustWatch`}
        >
          JustWatch
        </a>
      </p>
    </div>
  );
}
