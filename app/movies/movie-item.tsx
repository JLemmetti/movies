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
      <div className="flex">
        <h3 className="text-xl hover:underline">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>

        <a
          className="w-6 h-6 mt-[3px] ml-3 rounded-full bg-slate-400 hover:bg-slate-600"
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
        <button
          className="px-3 py-2 mx-1 font-medium rounded-md bg-slate-900 text-slate-100"
          onClick={() => toggleEditing(true)}
        >
          Edit
        </button>
      </div>
    </li>
  );
};
