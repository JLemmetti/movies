import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Rating from './rating';
import { Movie } from '../api/db';

export const MovieItem = ({
  movie: { title, link, watchDate, rating, notes },
}: {
  movie: Movie;
}): JSX.Element => (
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
    <p>({format(parseISO(watchDate), 'd.M.Y')})</p>
    <p>{notes}</p>
    <p>
      <Rating rating={rating} />
    </p>
  </li>
);
