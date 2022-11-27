import NavLink from './nav-link';
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

      <body className="antialiased bg-slate-400">
        <header className="text-xl p-14 bg-slate-500">
          <h1 className="text-3xl ">Movie app</h1>
          <nav className="my-5 space-x-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/movies">Movies</NavLink>
          </nav>
        </header>
        <main className="px-32 py-10">{children}</main>
        <footer className="h-32 p-4 bg-slate-800">
          <p className="text-gray-200">[2022]</p>
        </footer>
      </body>
    </html>
  );
}
