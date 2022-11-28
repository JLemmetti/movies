'use client';

import { Movie } from '../api/db';
import PickDate from './pick-date';
import { useState } from 'react';

type Props = {
  movie?: Movie;
  enable?: boolean;
};

export default function EditMovieItem({ movie, enable }: Props): JSX.Element {
  const [isEditing, toggleEditing] = useState(false);

  return isEditing || enable ? (
    <form className="p-5 my-5 space-y-4 rounded bg-slate-300">
      <h2 className="text-2xl">{movie ? 'Edit movie' : 'Add new movie'}</h2>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" defaultValue={movie?.title ?? ''} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="link">Link</label>
            <input type="text" id="link" defaultValue={movie?.link ?? ''} />
          </div>
        </div>
        <fieldset className="flex flex-col">
          <legend>Rating</legend>
          <div className="space-x-2">
            <input type="radio" name="rating" value="good" id="rating_good" />
            <label className="ml-2" htmlFor="rating_good">
              Good
            </label>
          </div>
          <div className="space-x-2">
            <input type="radio" name="rating" value="meh" id="rating_meh" />
            <label className="ml-2" htmlFor="rating_meh">
              Meh
            </label>
          </div>
          <div className="space-x-2">
            <input type="radio" name="rating" value="bad" id="rating_bad" />
            <label className="ml-2" htmlFor="rating_bad">
              Bad
            </label>
          </div>
        </fieldset>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            id="notes"
            rows={5}
            defaultValue={movie?.notes ?? ''}
          ></textarea>
        </div>
        <PickDate />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          className="px-3 py-2 mx-1 font-medium rounded-md bg-slate-900 text-slate-100"
          onClick={() => toggleEditing(true)}
        >
          Cancel
        </button>
        <input
          className="px-3 py-2 mx-1 font-medium rounded-md cursor-pointer bg-slate-900 text-slate-100"
          type="submit"
          value="Tallenna"
        />
      </div>
    </form>
  ) : (
    <button onClick={() => toggleEditing(true)}>Add movie</button>
  );
}
