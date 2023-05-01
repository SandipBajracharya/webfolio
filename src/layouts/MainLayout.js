import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Sandeep Bajracharya</title>
        <meta name="description" content="This is my webfolio site. Sandeep Bajracharya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconimg.png" />
      </Head>

      {/* navbar */}
      <Navbar/>

      {/* main body */}
      <main className="container mx-auto px-8 py-5 min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}