import '../styles/globals.css';

type Props = {
  children: JSX.Element;
};

export default function RootLayout({ children }: Props): JSX.Element {
  return (
    <html>
      <head>
        <title>Movie app</title>
      </head>

      <body className="bg-slate-400">
        <header className="text-xl p-14 bg-slate-500">Movie app</header>
        <main className="py-32 px-32">{children}</main>
        <footer className="bg-slate-800 p-4 h-32">
          <p className="text-gray-200">[2022]</p>
        </footer>
      </body>
    </html>
  );
}
