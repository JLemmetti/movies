
type Props = {
  children: JSX.Element;
};

export default function RootLayout({ children }: Props): JSX.Element {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
