import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css';
import LoginBtn from './login-btn';
import NavLink from './nav-link';
import Providers from './providers';

type Props = {
  children: JSX.Element;
};

export default function RootLayout({ children }: Props): JSX.Element {
  return (
    <html>
      <head>
        <title>Movie app</title>
      </head>
      <Providers>
        <body className="antialiased bg-slate-400">
          <header className="p-8 bg-slate-500">
            <div className="flex items-center justify-between">
              <h1 className="text-xl">
                <Link
                  href="/"
                  className="px-4 py-2 text-3xl rounded-md bg-slate-600 hover:bg-slate-700 text-slate-100"
                >
                  Movie app
                </Link>
              </h1>
              <div className="flex flex-col items-center my-5">
                <LoginBtn />
              </div>
            </div>
            <nav className="my-5 space-x-2 text-2xl">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/movies">Movies</NavLink>
            </nav>
          </header>

          <main className="px-32 py-5">{children}</main>

          <footer className="h-32 p-4 bg-slate-800">
            <p className="text-gray-200">(2023)</p>
            <div className="flex justify-end my-5 space-x-3">
              <Image
                className="w-auto h-8"
                src="/imgs/valid-css.png"
                width="176"
                height="62"
                alt="Valid CSS"
              />
              <Image
                className="w-auto h-8"
                src="/imgs/valid-html401.png"
                width="176"
                height="62"
                alt="Valid CSS"
              />
            </div>
          </footer>
        </body>
      </Providers>
    </html>
  );
}
