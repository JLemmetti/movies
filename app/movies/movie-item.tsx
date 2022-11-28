'use client';

import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';
import { Movie } from '../api/db';
import EditMovieItem from './edit-movie-item';
import Rating from './rating';

export const MovieItem = ({ movie }: { movie: Movie }): JSX.Element => {
  const [isEditing, toggleEditing] = useState(false);

  const { title, link, watchDate, rating, notes } = movie;

  return isEditing ? (
    <EditMovieItem movie={movie} isNew={false} />
  ) : (
    <li className="px-5 py-10 space-y-4 rounded bg-slate-200">
      <div className="flex items-center">
        <h3 className="text-2xl hover:underline">{title}</h3>

        <a
          className="ml-3 "
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          title={`${title} on IMDB`}
        >
          <Image
            className="outline-slate-600 hover:outline hover:outline-2"
            src="/imgs/imdb.svg"
            width="45"
            height="20"
            alt=""
          />
        </a>

        <a
          className="w-6 h-6 ml-3 rounded-full bg-slate-400 hover:bg-slate-600"
          href={`https://www.justwatch.com/fi/etsi?q=${encodeURI(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`Check where to watch ${title} in JustWatch`}
        >
          <Image
            className="ml-[7px] mt-[6px]"
            src="/imgs/jw-logo.svg"
            width="13"
            height="13"
            alt=""
          />
        </a>
      </div>
      <p>({format(parseISO(watchDate), 'd.M.Y')})</p>
      <p>{notes}</p>
      <p>
        <Rating rating={rating} />
      </p>
      <div className="flex justify-end space-x-4">
        <button onClick={() => toggleEditing(true)}>Edit</button>
      </div>
    </li>
  );
};