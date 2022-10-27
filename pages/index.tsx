import Head from 'next/head';

export default function Home() {
  return (
    <div className="grid">
      <Head>
        <title>Technical interview</title>
        <meta name="description" content="Technical interview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-32 bg-slate-200">
        <h1 className="font-bold text-3xl">Technical interview</h1>
      </main>

      <footer className="bg-slate-400 p-4 h-32">[2022]</footer>
    </div>
  );
}
