'use client';

import { formatISO } from 'date-fns';
import { useState } from 'react';
import { Movie, Rating } from '../api/db';
import PickDate from './pick-date';

type Props = {
  movie?: Movie;
  isNew: boolean;
};

export default function EditMovieItem({ movie, isNew }: Props): JSX.Element {
  const [isEditing, toggleEditing] = useState(false);

  const editedMovie = { ...movie } as Movie;

  const onWatchDateChange = (changeDate: Date) => {
    editedMovie.watchDate = formatISO(changeDate);
  };

  const saveChanges = () => {
    console.log(editedMovie);
  };

  return isEditing || !isNew ? (
    <form className="p-5 my-5 space-y-4 rounded bg-slate-300">
      <h2 className="text-2xl">{movie ? 'Edit movie' : 'Add new movie'}</h2>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              className="px-2 py-2 rounded-md"
              type="text"
              id="title"
              defaultValue={movie?.title ?? ''}
              onChange={(e) => (editedMovie.title = e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="link">Link</label>
            <input
              className="px-2 py-2 rounded-md"
              type="text"
              id="link"
              defaultValue={movie?.link ?? ''}
              onChange={(e) => (editedMovie.link = e.target.value)}
            />
          </div>
        </div>

        <fieldset className="flex flex-col">
          <legend>Rating</legend>
          <div className="space-x-2">
            <input
              type="radio"
              name="rating"
              value="good"
              id="rating_good"
              defaultChecked={movie?.rating === 'good'}
              onChange={(e) => (editedMovie.rating = e.target.value as Rating)}
            />
            <label className="ml-2" htmlFor="rating_good">
              Good
            </label>
          </div>
          <div className="space-x-2">
            <input
              type="radio"
              name="rating"
              value="meh"
              id="rating_meh"
              defaultChecked={movie?.rating === 'meh'}
              onChange={(e) => (editedMovie.rating = e.target.value as Rating)}
            />
            <label className="ml-2" htmlFor="rating_meh">
              Meh
            </label>
          </div>
          <div className="space-x-2">
            <input
              type="radio"
              name="rating"
              value="bad"
              id="rating_bad"
              defaultChecked={movie?.rating === 'bad'}
              onChange={(e) => (editedMovie.rating = e.target.value as Rating)}
            />
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
            className="px-2 py-2 rounded-md"
            name="notes"
            id="notes"
            rows={5}
            defaultValue={movie?.notes ?? ''}
            onChange={(e) => (editedMovie.notes = e.target.value)}
          ></textarea>
        </div>
        <PickDate
          watchDate={movie?.watchDate}
          onWatchDateChange={onWatchDateChange}
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={() => toggleEditing(true)}>Cancel</button>
        <button onClick={saveChanges}>Save</button>
      </div>
    </form>
  ) : (
    <div className="flex justify-end space-x-4">
      <button onClick={() => toggleEditing(true)}>Add movie</button>
    </div>
  );
}
