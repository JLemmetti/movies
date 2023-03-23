type Props = {
  data: unknown;
};

export default function Page({ data }: Props) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
