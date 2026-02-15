import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Project</title>
        <meta name="description" content="My project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen" style={{ background: '#1a1a1a' }} />
    </>
  );
}
