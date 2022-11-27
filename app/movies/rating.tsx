import { Rating as RatingType } from '../api/db';

type Props = {
  rating?: RatingType;
};

export default function Rating({ rating }: Props): JSX.Element {
  switch (rating) {
    case 'good':
      return <span>Good 👍</span>;
      break;
    case 'meh':
      return <span>Meh 😒</span>;
      break;
    case 'bad':
      return <span>Bad 👎</span>;
      break;

    default:
      return <span>No rating</span>;
  }
}
