'use client';

import { format, parseISO } from 'date-fns';
import { use, useState } from 'react';
import { Movie, movieDb } from '../../api/db';
import { wait } from '../../utils';
import EditMovieItem from '../edit-movie-item';
import Rating from '../rating';

type Params = {
  id: string;
};

async function getMovie(id: number) {
  // await wait(2000);
  return movieDb.find((movie: Movie) => movie.id === id);
}

export const MovieDetails = ({ id }: Params) => {
  const [isEditing, toggleEditing] = useState(false);
  const movie = use(getMovie(parseInt(id)));

  if (!movie)
    return (
      <p className="px-5 py-10 my-5 space-y-4 rounded bg-slate-200">
        No movie found
      </p>
    );

  const { title, link, watchDate, rating, notes } = movie;

  return isEditing ? (
    <EditMovieItem movie={movie} isNew={false} />
  ) : (
    <div className="sticky px-5 py-10 my-5 space-y-4 rounded top-8 bg-slate-200">
      <h3 className="text-2xl">{title}</h3>

      <p>
        <strong>Watched:</strong> {format(parseISO(watchDate), 'd.M.Y')}
      </p>

      <Rating rating={rating} />

      <p>
        {notes}
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
      <div className="flex justify-end space-x-4">
        <button onClick={() => toggleEditing(true)}>Edit</button>
      </div>
    </div>
  );
};
