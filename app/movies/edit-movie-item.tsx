'use client';

import { Movie } from '../api/db';
import PickDate from './pick-date';
import { useState } from 'react';

type Props = {
  movie?: Movie;
};

export default function EditMovieItem({ movie }: Props): JSX.Element {
  const [isEditing, toggleEditing] = useState(false);

  return isEditing ? (
    <form className="p-5 my-5 space-y-4 rounded bg-slate-300">
      <h2 className="text-2xl">{movie ? 'Edit movie' : 'Add new movie'}</h2>

      <div className="info">
        <label>
          Title
          <input type="text" defaultValue={movie?.title ?? ''} />
        </label>
        <label>
          Link
          <input type="text" defaultValue={movie?.link ?? ''} />
        </label>

        <fieldset className="flex flex-col">
          <legend>Rating</legend>
          <div>
            <input type="radio" name="rating" value="good" id="rating_good" />
            <label htmlFor="rating_good">Good</label>
          </div>

          <div>
            <input type="radio" name="rating" value="meh" id="rating_meh" />
            <label htmlFor="rating_meh">Meh</label>
          </div>

          <div>
            <input type="radio" name="rating" value="bad" id="rating_bad" />
            <label htmlFor="rating_bad">Bad</label>
          </div>
        </fieldset>

        <label htmlFor="notes">Notes</label>
        <textarea
          name="notes"
          id="notes"
          rows={5}
          defaultValue={movie?.notes ?? ''}
        ></textarea>
      </div>
      <PickDate />
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
