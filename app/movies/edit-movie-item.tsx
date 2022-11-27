import { Movie } from '../api/db';

type Props = {
  movie?: Movie;
};

export default function EditMovieItem({ movie }: Props): JSX.Element {
  return (
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

        <fieldset>
          <legend>Rating</legend>
          <input type="radio" name="rating" value="good" id="rating_good" />
          <label htmlFor="rating_good">Good</label>
          <input type="radio" name="rating" value="meh" id="rating_meh" />
          <label htmlFor="rating_meh">Good</label>
          <input type="radio" name="rating" value="bad" id="rating_bad" />
          <label htmlFor="rating_bad">Bad</label>
        </fieldset>

        <label htmlFor="notes">Notes</label>
        <textarea
          name="notes"
          id="notes"
          rows={5}
          defaultValue={movie?.notes ?? ''}
        ></textarea>
      </div>

      <p>watchDate</p>

      {/*
      <div class="calendar">
        {{pikaday-inputless
          options=(hash keyboardInput=false)
          value=movie.watchDate
          onSelection=(action (mut movie.watchDate))
        }}
      </div>
      */}

      <div className="actions">
        <input type="submit" value="Tallenna" />
        {/*
          {{#unless movie.isNew}}
            <button {{action 'deleteMovie' movie}} class="delete">Poista</button>
          {{/unless}}
        <button {{action 'cancelEdit' movie}}>Peruuta</button> */}
      </div>
    </form>
  );
}