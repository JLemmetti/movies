type Props = {
  children: JSX.Element;
};

export default function RootLayout({ children }: Props): JSX.Element {
  return (
    <div>
      <h2 className="text-3xl">Movies page</h2>

      <div>{children}</div>
    </div>
  );
}
