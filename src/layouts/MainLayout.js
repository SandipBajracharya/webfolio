import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function MainLayout({ children }) {
  const [ toggleDark, setToggleDark ] = useState(false);

  const toggleFunc = (data) => {
    setToggleDark(data);
  }

  return (
    <>
      <Head>
        <title>Sandeep Bajracharya</title>
        <meta name="description" content="This is my webfolio site. Sandeep Bajracharya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconimg.png" />
      </Head>

      <div className={toggleDark ? "dark" : ""}>
        {/* navbar */}
        <Navbar func={toggleFunc} />

        {/* main body */}
        <main className="mx-auto px-8 py-5 min-h-screen dark:bg-gradient-to-b from-neutral-950 to-neutral-900 dark:bg-secondary">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}