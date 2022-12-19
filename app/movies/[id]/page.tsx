import { MovieDetails } from './movie-details';

type Params = {
  [param: string]: any;
};

export default function Page({ params }: Params) {
  return <MovieDetails id={params.id} />;
}
