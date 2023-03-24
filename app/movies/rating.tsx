import { Rating as RatingType } from '../api/db';

type Props = {
  rating?: RatingType;
};

export default function Rating({ rating }: Props): JSX.Element {
  switch (rating) {
    case 'good':
      return (
        <div className="flex items-center">
          <span>Good</span>
          <span className="px-1 ml-2 text-3xl">👍</span>
        </div>
      );
      break;
    case 'meh':
      return (
        <div className="flex items-center">
          <span>Meh</span>
          <span className="px-1 ml-2 text-3xl">😒</span>
        </div>
      );
      break;
    case 'bad':
      return (
        <div className="flex items-center">
          <span>Bad</span>
          <span className="px-1 ml-2 text-3xl">👎</span>
        </div>
      );
      break;

    default:
      return <span>No rating</span>;
  }
}
